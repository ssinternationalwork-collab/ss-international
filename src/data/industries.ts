export type IndustrySummary = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
};

export const industries: IndustrySummary[] = [
  {
    slug: "automotive",
    name: "Automotive",
    shortName: "Automotive",
    description: "Door seals, glass run channels and body-mounted profiles engineered for OEM vehicle applications.",
    image: "https://images.pexels.com/photos/8478199/pexels-photo-8478199.jpeg?w=1400&q=85",
  },
  {
    slug: "roadways",
    name: "Roadways",
    shortName: "Roadways",
    description: "Coach sealing systems for buses, LCVs and heavy commercial vehicles operating in demanding conditions.",
    image: "https://images.pexels.com/photos/32666529/pexels-photo-32666529.jpeg?w=1400&q=85",
  },
  {
    slug: "architecture",
    name: "Architecture",
    shortName: "Architecture",
    description: "Glazing, curtain-wall and expansion-joint profiles for building envelopes and architectural systems.",
    image: "https://images.pexels.com/photos/5230076/pexels-photo-5230076.jpeg?w=1400&q=85",
  },
  {
    slug: "railways",
    name: "Railways & Mass Transit",
    shortName: "Railways",
    description: "Engineered sealing profiles for rolling stock, metro systems and mass-transit applications.",
    image: "https://images.pexels.com/photos/27826200/pexels-photo-27826200.jpeg?w=1400&q=85",
  },
  {
    slug: "shipping",
    name: "Shipping",
    shortName: "Shipping",
    description: "Container-door seals and durable profiles designed for marine, cargo and logistics environments.",
    image: "https://images.pexels.com/photos/9694390/pexels-photo-9694390.jpeg?w=1400&q=85",
  },
  {
    slug: "power-distribution",
    name: "Power Distribution",
    shortName: "Power",
    description: "Panel and enclosure sealing for electrical equipment, substations, plants and energy infrastructure.",
    image: "https://images.pexels.com/photos/7867328/pexels-photo-7867328.jpeg?w=1400&q=85",
  },
  {
    slug: "mining",
    name: "Mining",
    shortName: "Mining",
    description: "Heavy-duty sealing profiles for equipment exposed to abrasion, dust, vibration and severe environments.",
    image: "https://images.pexels.com/photos/3998410/pexels-photo-3998410.jpeg?w=1400&q=85",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    shortName: "Infrastructure",
    description: "Waterproofing and structural sealing profiles for civil engineering and infrastructure projects.",
    image: "/infrastructure.jpeg",
  },
];

export const automotiveProducts = [
  {
    name: "Automotive Profiles",
    image: "/products/automotive-profiles.png",
    description: "Extruded sealing profiles for vehicle doors, body openings and closure systems.",
  },
  {
    name: "Flocked Glass Run Channel",
    image: "/products/flocked-glass-run-channel.png",
    description: "Low-friction channels that guide and seal moving automotive glass.",
  },
  {
    name: "Co-Extruded Profiles",
    image: "/products/co-extruded-profiles.png",
    description: "Multi-material profiles combining sealing, grip and structural functions in one section.",
  },
  {
    name: "Edge Protectors",
    image: "/products/edge-protectors.png",
    description: "Protective profiles for exposed sheet-metal edges and trim interfaces.",
  },
  {
    name: "Molded Corners",
    image: "/products/molded-corners.png",
    description: "Moulded transitions and corner pieces for continuous sealing assemblies.",
  },
];
