import { useEffect, useRef } from "react";
import * as d3 from "d3";

type Node = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

export function D3Background({ density = 28 }: { density?: number }) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    if (!ref.current) return;
    const parent = ref.current.parentElement!;
    let width = parent.clientWidth;
    let height = parent.clientHeight;

    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid slice");

    const palette = [
      "hsl(0 84% 55%)",       // brand red
      "hsl(142 70% 45%)",     // brand green
      "hsl(220 90% 60%)",     // accent blue
      "hsl(40 95% 55%)",      // accent gold
    ];

    const nodes: Node[] = d3.range(density).map((i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 30 + Math.random() * 80,
      color: palette[i % palette.length],
    }));

    // Gradient defs
    const defs = svg.append("defs");
    nodes.forEach((n) => {
      const g = defs
        .append("radialGradient")
        .attr("id", `grad-${n.id}`)
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%");
      g.append("stop").attr("offset", "0%").attr("stop-color", n.color).attr("stop-opacity", 0.55);
      g.append("stop").attr("offset", "100%").attr("stop-color", n.color).attr("stop-opacity", 0);
    });

    // Lines (connections) under blobs
    const lineLayer = svg.append("g").attr("stroke", "currentColor").attr("stroke-opacity", 0.12);
    const blobLayer = svg.append("g");

    const lines = lineLayer
      .selectAll("line")
      .data(d3.pairs(nodes))
      .join("line")
      .attr("stroke-width", 0.5);

    const blobs = blobLayer
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => `url(#grad-${d.id})`)
      .style("mix-blend-mode", "screen");

    // Initial entrance animation
    blobs
      .attr("opacity", 0)
      .attr("transform", "scale(0.2)")
      .transition()
      .duration(1400)
      .delay((_, i) => i * 35)
      .ease(d3.easeCubicOut)
      .attr("opacity", 1)
      .attr("transform", "scale(1)");

    const timer = d3.timer(() => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -n.r) n.x = width + n.r;
        if (n.x > width + n.r) n.x = -n.r;
        if (n.y < -n.r) n.y = height + n.r;
        if (n.y > height + n.r) n.y = -n.r;
      }
      blobs.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      lines
        .attr("x1", (d) => d[0].x)
        .attr("y1", (d) => d[0].y)
        .attr("x2", (d) => d[1].x)
        .attr("y2", (d) => d[1].y)
        .attr("stroke-opacity", (d) => {
          const dx = d[0].x - d[1].x;
          const dy = d[0].y - d[1].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return Math.max(0, 0.18 - dist / 1800);
        });
    });

    const onResize = () => {
      if (!ref.current) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
    };
    window.addEventListener("resize", onResize);

    return () => {
      timer.stop();
      window.removeEventListener("resize", onResize);
      svg.selectAll("*").remove();
    };
  }, [density]);

  return (
    <svg
      ref={ref}
      className="absolute inset-0 h-full w-full text-foreground pointer-events-none"
      aria-hidden="true"
    />
  );
}
