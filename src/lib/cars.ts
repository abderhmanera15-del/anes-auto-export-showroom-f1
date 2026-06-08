import cagGs3Asset from "@/assets/cag-gs3.jpg.asset.json";
import geelyAsset from "@/assets/geely-coolray.jpg.asset.json";
import livanAsset from "@/assets/car-livan.jpg.asset.json";
import jetourAsset from "@/assets/car-jetour.jpg.asset.json";
import changanAsset from "@/assets/changan-cs75.jpg.asset.json";

const cagGs3 = cagGs3Asset.url;
const geely = geelyAsset.url;
const livan = livanAsset.url;
const jetour = jetourAsset.url;
const changan = changanAsset.url;

export type Trim = {
  name: string;
  highlights: string[];
};

export type Car = {
  slug: string;
  brand: string;
  model: string;
  image: string;
  tagline: string;
  body: string;
  fuel: string;
  trims: Trim[];
};

export const cars: Car[] = [
  {
    slug: "cag-gs3",
    brand: "CAG",
    model: "GS3",
    image: cagGs3,
    tagline: "Compact SUV — Modern & Reliable",
    body: "SUV",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5L Engine", "Manual A/C", "Fabric Seats", "15\" Wheels"] },
      { name: "Medium", highlights: ["1.5L Turbo", "Auto A/C", "Touchscreen 9\"", "Rear Camera"] },
      { name: "Emzoom", highlights: ["1.5L Turbo", "Leather Seats", "Sunroof", "360° Camera"] },
      { name: "Smart", highlights: ["1.5L Turbo", "Panoramic Roof", "ADAS", "Wireless Charge"] },
    ],
  },
  {
    slug: "geely-coolray",
    brand: "Geely",
    model: "Coolray",
    image: geely,
    tagline: "Sporty Crossover — Bold & Agile",
    body: "Crossover",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5T Engine", "DCT Auto", "Cloth Interior", "LED Lights"] },
      { name: "Premium", highlights: ["1.5T Engine", "Leather", "Panoramic Roof", "10.25\" Screen"] },
      { name: "Sport", highlights: ["1.5T Performance", "Sport Seats", "ADAS", "18\" Alloys"] },
    ],
  },
  {
    slug: "livan-x3-pro",
    brand: "Livan",
    model: "X3 Pro",
    image: livan,
    tagline: "Family SUV — Spacious & Smart",
    body: "SUV",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5L Engine", "Manual", "ABS + EBD", "Bluetooth"] },
      { name: "Standard", highlights: ["1.5L Auto", "Reverse Camera", "Cruise Control", "Alloys"] },
      { name: "Top", highlights: ["1.5T Auto", "Leather", "Sunroof", "Driver Assist"] },
    ],
  },
  {
    slug: "jetour-x70",
    brand: "Jetour",
    model: "X70",
    image: jetour,
    tagline: "7-Seater SUV — Built for Families",
    body: "SUV 7P",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5T 7-Seat", "Manual", "Dual A/C", "Rear Sensors"] },
      { name: "Comfort", highlights: ["1.5T DCT", "Touch Screen", "Camera", "Cruise Control"] },
      { name: "Flagship", highlights: ["2.0T DCT", "Leather", "Panoramic Roof", "ADAS Level 2"] },
    ],
  },
  {
    slug: "changan-cs75-plus",
    brand: "Changan",
    model: "CS75 Plus",
    image: changan,
    tagline: "Premium SUV — Refined Power",
    body: "SUV",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5T Auto", "Cloth Seats", "8\" Display", "LED Lights"] },
      { name: "Elite", highlights: ["1.5T Auto", "Leather", "12.3\" Display", "Wireless Charge"] },
      { name: "Supreme", highlights: ["2.0T AWD", "Massage Seats", "BOSE Audio", "ADAS"] },
    ],
  },
];

export const BRANDS = ["CAG", "Geely", "Livan", "Jetour", "Changan"];
export const PHONE = "+353 85 252 7082";
export const PHONE_HREF = "tel:+353852527082";
export const WHATSAPP_HREF = "https://wa.me/353852527082";
