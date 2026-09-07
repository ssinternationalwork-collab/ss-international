export type ProductSummary = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export const products: ProductSummary[] = [
  { slug: 'architectural-profiles', name: 'Architectural Profiles', image: '/products/architectural-profiles.png', description: 'Rubber sealing profiles for glazing, curtain walls, facades and building-envelope interfaces.' },
  { slug: 'automotive-profiles', name: 'Automotive Profiles', image: '/products/automotive-profiles.png', description: 'Extruded profiles for vehicle doors, body openings, glazing interfaces and closure systems.' },
  { slug: 'bus-body-profiles', name: 'Bus Body Profiles', image: '/products/bus-body-profiles.png', description: 'Sealing and trim profiles for coach bodies, windows, doors and commercial-vehicle interfaces.' },
  { slug: 'railway-profiles', name: 'Railway Profiles', image: '/products/railway-profiles.png', description: 'Profile systems for rolling-stock doors, windows, panels and mass-transit sealing interfaces.' },
  { slug: 'container-seals', name: 'Container Seals', image: '/products/container-seals.png', description: 'Continuous sealing profiles for cargo-container doors and logistics applications.' },
  { slug: 'co-extruded-profiles', name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Multi-function profiles combining different sections or material behaviours in one extrusion.' },
  { slug: 'edge-protectors', name: 'Edge Protectors', image: '/products/edge-protectors.png', description: 'Protective profiles for exposed sheet-metal edges, trim interfaces and finished assemblies.' },
  { slug: 'electrical-panel-profiles', name: 'Electrical Panel Profiles', image: '/products/electrical-panel-profiles.png', description: 'Sealing profiles for electrical cabinets, panels, enclosures and equipment housings.' },
  { slug: 'expansion-joints', name: 'Expansion Joints', image: '/products/expansion-joints.png', description: 'Flexible profiles designed to accommodate movement across structural and civil interfaces.' },
  { slug: 'flocked-glass-run-channel', name: 'Flocked Glass Run Channel', image: '/products/flocked-glass-run-channel.png', description: 'Low-friction channels for guiding, supporting and sealing moving glass.' },
  { slug: 'miscellaneous-profiles', name: 'Miscellaneous Profiles', image: '/products/miscellaneous-profiles.png', description: 'Special-purpose extrusions developed around non-standard sealing, cushioning and protection needs.' },
  { slug: 'molded-corners', name: 'Molded Corners', image: '/products/molded-corners.png', description: 'Moulded corner and transition pieces for continuous profile assemblies and complex geometry.' },
  { slug: 'pipe-clamping-gaskets', name: 'Pipe Clamping Gaskets', image: '/products/pipe-clamping-gaskets.png', description: 'Rubber gasket components used between pipework and supporting clamp systems.' },
  { slug: 'silicone-rubber-profiles', name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png', description: 'Silicone extrusions for applications where the section design requires a silicone profile solution.' },
  { slug: 'sponge-rubber-profiles', name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible sponge profiles for cushioning, gap filling and low-closing-force sealing interfaces.' },
  { slug: 'sponge-solid-strips-pipes-cords', name: 'Sponge Solid Strips, Pipes & Cords', image: '/products/sponge-solid-strips-pipes-cords.jpg', description: 'Simple-section strips, cords and tubular forms for sealing, spacing, cushioning and fabrication.' },
  { slug: 'windows-rubber-profiles', name: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.png', description: 'Rubber profiles for fixed and movable window-glass sealing across vehicle and fabricated-window systems.' },
];

export const automotiveProfileDetail = {
  slug: 'automotive-profiles',
  name: 'Automotive Profiles',
  eyebrow: 'Automotive Profiles',
  heroTitle: 'Sealing Geometry.',
  heroMuted: 'Built Around Vehicle Interfaces.',
  heroText: 'Extruded rubber profiles for vehicle doors, body openings, glazing zones and closure interfaces where geometry, retention and repeatable compression work together.',
  image: '/products/automotive-profiles.png',
  applications: [
    ['Door Apertures', 'Profiles used around vehicle door openings to manage compression, water paths and closure interfaces.'],
    ['Body-Mounted Seals', 'Extrusions retained on formed flanges or body sections where installed fit and retention are critical.'],
    ['Glazing Interfaces', 'Profiles that support glass sealing, edge control and adjoining trim or frame systems.'],
    ['Trim & Closure Interfaces', 'Protective and sealing sections used where body panels, trim parts and closures meet.'],
  ],
  engineering: [
    ['Section Geometry', 'Bulb size, wall thickness, lips and retaining features are selected around the mating interface.'],
    ['Compression Behaviour', 'The installed section needs to compress predictably while retaining its sealing function through repeated use.'],
    ['Fit & Retention', 'Profile geometry should suit the flange, channel or carrier used to locate the seal in the assembly.'],
    ['Surface Contact', 'Contact faces can require controlled friction, smooth movement or protective interaction with adjacent surfaces.'],
  ],
  industries: [
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Roadways', href: '/industries/roadways' },
  ],
};
