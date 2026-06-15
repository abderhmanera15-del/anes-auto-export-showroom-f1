import cagGs3Asset from "@/assets/cag-gs3.jpg.asset.json";
import geelyAsset from "@/assets/geely-coolray.jpg.asset.json";
import livanAsset from "@/assets/car-livan.jpg.asset.json";
import jetourAsset from "@/assets/car-jetour.jpg.asset.json";
import changanAsset from "@/assets/changan-cs75.jpg.asset.json";
import mg5Asset from "@/assets/mg5.jpg.asset.json";
import jettaVs5Asset from "@/assets/jetta-vs5.jpg.asset.json";
import emgrandAsset from "@/assets/geely-emgrand.jpg.asset.json";
import trocAsset from "@/assets/vw-troc.jpg.asset.json";
import monjaroAsset from "@/assets/geely-monjaro.jpg.asset.json";
import dashingAsset from "@/assets/jetour-dashing.jpg.asset.json";
import x90PlusAsset from "@/assets/jetour-x90-plus.jpg.asset.json";

const cagGs3 = cagGs3Asset.url;
const geely = geelyAsset.url;
const livan = livanAsset.url;
const jetour = jetourAsset.url;
const changan = changanAsset.url;
const mg5 = mg5Asset.url;
const jettaVs5 = jettaVs5Asset.url;
const emgrand = emgrandAsset.url;
const troc = trocAsset.url;
const monjaro = monjaroAsset.url;
const dashing = dashingAsset.url;
const x90Plus = x90PlusAsset.url;

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
    brand: "Geely",
    model: "Livan X3 Pro",
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
  {
    slug: "mg-5",
    brand: "MG",
    model: "MG5",
    image: mg5,
    tagline: "Sport Sedan — Stylish & Dynamic",
    body: "Sedan",
    fuel: "Petrol",
    trims: [
      { name: "Comfort", highlights: ["1.5L Engine", "CVT Auto", "Touchscreen 10\"", "LED Headlights"] },
      { name: "Luxury", highlights: ["1.5L Engine", "Leather Seats", "Sunroof", "Rear Camera"] },
      { name: "GT", highlights: ["1.5T Turbo", "Sport Body Kit", "17\" Alloys", "Ambient Lighting"] },
    ],
  },
  {
    slug: "jetta-vs5",
    brand: "Jetta",
    model: "VS5",
    image: jettaVs5,
    tagline: "Urban SUV — German Engineering",
    body: "SUV",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.4T Engine", "Manual", "ABS + ESP", "LED DRL"] },
      { name: "Comfort", highlights: ["1.4T Auto", "Touch Screen", "Reverse Camera", "Cruise Control"] },
      { name: "Premium", highlights: ["1.4T Auto", "Panoramic Roof", "Leather", "Black Alloys"] },
    ],
  },
  {
    slug: "geely-emgrand",
    brand: "Geely",
    model: "Emgrand",
    image: emgrand,
    tagline: "Elegant Sedan — Smooth & Refined",
    body: "Sedan",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.5L Engine", "Manual", "Fabric Seats", "Bluetooth"] },
      { name: "Comfort", highlights: ["1.5L CVT", "Touchscreen", "Rear Camera", "Cruise Control"] },
      { name: "Flagship", highlights: ["1.5L CVT", "Leather", "Sunroof", "10.25\" Display"] },
    ],
  },
  {
    slug: "vw-t-roc",
    brand: "Volkswagen",
    model: "T-Roc",
    image: troc,
    tagline: "Premium Crossover — Bold European Style",
    body: "Crossover",
    fuel: "Petrol",
    trims: [
      { name: "Style", highlights: ["1.4 TSI", "DSG Auto", "LED Matrix", "17\" Alloys"] },
      { name: "R-Line", highlights: ["1.4 TSI", "Sport Seats", "Digital Cockpit", "18\" Alloys"] },
      { name: "R", highlights: ["2.0 TSI 4Motion", "Performance Brakes", "Panoramic Roof", "Beats Audio"] },
    ],
  },
  {
    slug: "geely-monjaro",
    brand: "Geely",
    model: "Monjaro",
    image: monjaro,
    tagline: "Flagship SUV — Luxury & Power",
    body: "SUV",
    fuel: "Petrol",
    trims: [
      { name: "Comfort", highlights: ["2.0T Engine", "8-Speed Auto", "Leather Seats", "12.3\" Display"] },
      { name: "Luxury", highlights: ["2.0T Engine", "Panoramic Roof", "Heated/Ventilated Seats", "ADAS"] },
      { name: "Flagship", highlights: ["2.0T AWD", "Bose Audio", "Massage Seats", "Head-Up Display"] },
    ],
  },
  {
    slug: "jetour-dashing",
    brand: "Jetour",
    model: "Dashing",
    image: dashing,
    tagline: "Sport Coupe SUV — Futuristic Design",
    body: "SUV Coupe",
    fuel: "Petrol",
    trims: [
      { name: "Basic", highlights: ["1.6T Engine", "7-DCT", "LED Matrix Lights", "10.25\" Screen"] },
      { name: "Sport", highlights: ["1.6T Engine", "Sport Seats", "Panoramic Roof", "Wireless Charge"] },
      { name: "Top", highlights: ["1.6T DCT", "Leather", "ADAS Level 2", "Ambient Lighting"] },
    ],
  },
  {
    slug: "jetour-x90-plus",
    brand: "Jetour",
    model: "X90 Plus",
    image: x90Plus,
    tagline: "Luxury 7-Seater SUV — Bold & Spacious",
    body: "SUV 7P",
    fuel: "Petrol",
    trims: [
      { name: "Comfort", highlights: ["1.6T 7-Seat", "DCT Auto", "12.3\" Display", "Rear Camera"] },
      { name: "Luxury", highlights: ["1.6T DCT", "Leather", "Panoramic Roof", "Wireless Charge"] },
      { name: "Flagship", highlights: ["2.0T DCT", "Massage Seats", "ADAS Level 2", "Premium Audio"] },
    ],
  },
];

export const BRANDS = ["CAG", "Geely", "Jetour", "Changan", "MG", "Jetta", "Volkswagen"];
export const PHONE = "+353 85 252 7082";
export const PHONE_HREF = "tel:+353852527082";
export const WHATSAPP_HREF = "https://wa.me/353852527082";
