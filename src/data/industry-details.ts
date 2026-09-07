export type IndustryDetail = {
  slug: string;
  eyebrow: string;
  heroTitle: string;
  heroMuted: string;
  heroText: string;
  heroImage: string;
  sectionTitle: string;
  sectionMuted: string;
  intro: string;
  applications: { title: string; text: string }[];
  factors: [string, string][];
  products: { name: string; image: string; description: string }[];
  ctaLabel: string;
};

export const industryDetails: IndustryDetail[] = [
  {
    slug: 'roadways', eyebrow: 'Roadways',
    heroTitle: 'Sealing For Commercial Vehicles.', heroMuted: 'Built For The Road.',
    heroText: 'Rubber profiles for buses, coaches, LCVs and heavy commercial vehicles — engineered around vibration, repeated door movement, weather exposure and long operating cycles.',
    heroImage: 'https://images.pexels.com/photos/32666529/pexels-photo-32666529.jpeg?w=1800&q=90',
    sectionTitle: 'Keep The Cabin Sealed.', sectionMuted: 'Keep The Vehicle Moving.',
    intro: 'Road-going commercial vehicles place sealing systems under continuous vibration, dust, rain, repeated access cycles and varying temperatures. SSI profile families are selected around those operating conditions.',
    applications: [
      { title: 'Bus Door Sealing', text: 'Profiles for passenger doors, emergency exits and access panels where repeatable compression and closure sealing matter.' },
      { title: 'Window & Glazing', text: 'Glazing and channel profiles for fixed and moving glass in buses, coaches and commercial cabins.' },
      { title: 'Body Edge Protection', text: 'Protective profiles for sheet-metal flanges, panel edges and trim interfaces.' },
      { title: 'Compartment Sealing', text: 'Seals for luggage bays, service access panels and equipment compartments exposed to dust and water.' },
    ],
    factors: [
      ['Vibration', 'Retention and profile geometry must remain stable under constant vehicle movement and road shock.'],
      ['Weathering', 'Compound selection accounts for water, ozone, sunlight and temperature cycling.'],
      ['Repeated Cycling', 'Door and panel seals must recover after frequent opening and compression.'],
      ['Ease Of Fitment', 'Profile geometry is designed around production-line assembly and field replacement.'],
    ],
    products: [
      { name: 'Bus Body Profiles', image: '/products/bus-body-profiles.png', description: 'Profiles for bus-body doors, windows, panels and closure interfaces.' },
      { name: 'Automotive Profiles', image: '/products/automotive-profiles.png', description: 'Vehicle sealing profiles for closures, glazing and body interfaces.' },
      { name: 'Edge Protectors', image: '/products/edge-protectors.png', description: 'Protective profiles for exposed sheet-metal edges and trim lines.' },
      { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Multi-material profiles combining retention and sealing functions.' },
      { name: 'Molded Corners', image: '/products/molded-corners.png', description: 'Moulded corner transitions for continuous vehicle sealing assemblies.' },
    ],
    ctaLabel: 'Have A Commercial Vehicle Sealing Requirement?'
  },
  {
    slug: 'architecture', eyebrow: 'Architecture',
    heroTitle: 'Seal The Building Envelope.', heroMuted: 'Protect Every Interface.',
    heroText: 'Architectural rubber profiles for glazing, façades, curtain walls, doors, windows and expansion interfaces — designed around movement, weather resistance and long service life.',
    heroImage: 'https://images.pexels.com/photos/5230076/pexels-photo-5230076.jpeg?w=1800&q=90',
    sectionTitle: 'Control Water And Air.', sectionMuted: 'Allow Structural Movement.',
    intro: 'Building-envelope seals must manage movement while maintaining weather protection. SSI profiles are developed for glazing systems, façade joints, windows, doors and other architectural interfaces.',
    applications: [
      { title: 'Glazing Systems', text: 'Rubber profiles for glass retention, cushioning and perimeter sealing in windows and façade systems.' },
      { title: 'Curtain Walls', text: 'Profiles for façade joints and framing interfaces where weather sealing and controlled movement are required.' },
      { title: 'Doors & Windows', text: 'Compression and glazing profiles for aluminium, steel and other architectural framing systems.' },
      { title: 'Expansion Interfaces', text: 'Flexible sections designed to accommodate movement across joints while maintaining environmental separation.' },
    ],
    factors: [
      ['UV & Ozone', 'Exterior profiles require compounds selected for long-term weather and sunlight exposure.'],
      ['Movement', 'Section design accommodates thermal expansion, deflection and installation tolerances.'],
      ['Water Management', 'Geometry must control ingress and direct water away from critical interfaces.'],
      ['Surface Finish', 'Visible architectural seals require consistent extrusion quality and dimensional control.'],
    ],
    products: [
      { name: 'Architectural Profiles', image: '/products/architectural-profiles.png', description: 'Profiles for windows, façades, glazing and architectural sealing systems.' },
      { name: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.png', description: 'Window and glazing profiles for perimeter sealing and glass retention.' },
      { name: 'Expansion Joints', image: '/products/expansion-joints.png', description: 'Flexible profiles for structural and architectural movement joints.' },
      { name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png', description: 'Temperature-resistant profiles for demanding façade and glazing applications.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible sealing profiles for irregular and low-force interfaces.' },
    ],
    ctaLabel: 'Have An Architectural Sealing Requirement?'
  },
  {
    slug: 'railways', eyebrow: 'Railways & Mass Transit',
    heroTitle: 'Sealing For Rolling Stock.', heroMuted: 'Built For Continuous Service.',
    heroText: 'Engineered rubber profiles for rail coaches, metro cars and mass-transit systems — supporting doors, windows, body interfaces and equipment enclosures under repeated operating cycles.',
    heroImage: 'https://images.pexels.com/photos/27826200/pexels-photo-27826200.jpeg?w=1800&q=90',
    sectionTitle: 'Seal Moving Systems.', sectionMuted: 'Protect Passenger Environments.',
    intro: 'Rail applications combine repeated movement, vibration, passenger safety requirements and long maintenance intervals. Profile design must be consistent, durable and suitable for transport environments.',
    applications: [
      { title: 'Coach Doors', text: 'Compression and edge profiles for passenger doors, gangways and access closures.' },
      { title: 'Windows & Glazing', text: 'Profiles for fixed glazing, window retention and perimeter sealing in rolling stock.' },
      { title: 'Body Interfaces', text: 'Extruded profiles for panel joints, trim interfaces and coach-body sealing.' },
      { title: 'Equipment Enclosures', text: 'Sealing profiles for electrical and mechanical compartments exposed to dust, vibration and moisture.' },
    ],
    factors: [
      ['Vibration', 'Profiles must maintain retention and sealing through continuous dynamic service.'],
      ['Repeated Cycles', 'Door and access seals require reliable recovery over long operating schedules.'],
      ['Environmental Exposure', 'Compounds are selected around temperature, moisture and outdoor exposure.'],
      ['Dimensional Consistency', 'Long profile runs and assembly interfaces depend on controlled extrusion geometry.'],
    ],
    products: [
      { name: 'Railway Profiles', image: '/products/railway-profiles.png', description: 'Profiles for rail doors, windows, coach bodies and transit interfaces.' },
      { name: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.png', description: 'Glazing and perimeter profiles for rolling-stock windows.' },
      { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Multi-function profiles combining structural grip and sealing zones.' },
      { name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png', description: 'Profiles for higher-temperature or demanding transport applications.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible profiles for low-force rail sealing interfaces.' },
    ],
    ctaLabel: 'Have A Rail Or Metro Sealing Requirement?'
  },
  {
    slug: 'shipping', eyebrow: 'Shipping',
    heroTitle: 'Seal Cargo Against The Elements.', heroMuted: 'Built For Marine Exposure.',
    heroText: 'Container and marine sealing profiles for cargo doors, access closures and logistics equipment operating under water, salt, weather and repeated handling.',
    heroImage: 'https://images.pexels.com/photos/9694390/pexels-photo-9694390.jpeg?w=1800&q=90',
    sectionTitle: 'Keep Water Out.', sectionMuted: 'Keep Cargo Protected.',
    intro: 'Shipping and cargo seals must tolerate repeated loading cycles, outdoor storage, water exposure and dimensional variation across large closures. SSI manufactures heavy sealing profiles for these interfaces.',
    applications: [
      { title: 'Container Doors', text: 'Large-section sealing profiles for cargo container doors and perimeter closures.' },
      { title: 'Marine Access Panels', text: 'Compression seals for equipment hatches and service access points.' },
      { title: 'Cargo Equipment', text: 'Profiles for transport and logistics equipment exposed to weather and handling.' },
      { title: 'Edge Protection', text: 'Durable profiles for vulnerable metal edges and closure interfaces.' },
    ],
    factors: [
      ['Water Resistance', 'Profile geometry must maintain compression across long door perimeters.'],
      ['Outdoor Exposure', 'Compounds are chosen for sunlight, ozone, rain and temperature variation.'],
      ['Large Closures', 'Seal sections must accommodate door tolerances and structural movement.'],
      ['Handling Durability', 'Profiles require resistance to repeated cargo operations and mechanical contact.'],
    ],
    products: [
      { name: 'Container Seals', image: '/products/container-seals.png', description: 'Heavy perimeter seals for shipping-container and cargo-door closures.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible profiles for enclosure and access-panel sealing.' },
      { name: 'Sponge Solid Strips', image: '/products/sponge-solid-strips-pipes-cords.jpg', description: 'Strip, cord and sponge sections for secondary sealing requirements.' },
      { name: 'Edge Protectors', image: '/products/edge-protectors.png', description: 'Protective profiles for metal edges and cargo equipment interfaces.' },
      { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Combined grip-and-seal profiles for complex closure geometries.' },
    ],
    ctaLabel: 'Have A Shipping Or Container Sealing Requirement?'
  },
  {
    slug: 'power-distribution', eyebrow: 'Power Distribution',
    heroTitle: 'Protect Critical Enclosures.', heroMuted: 'Control Dust And Moisture.',
    heroText: 'Rubber sealing profiles for switchgear, electrical panels, substations and energy equipment — developed around enclosure geometry, compression and environmental protection.',
    heroImage: 'https://images.pexels.com/photos/7867328/pexels-photo-7867328.jpeg?w=1800&q=90',
    sectionTitle: 'Seal The Enclosure.', sectionMuted: 'Protect The Equipment.',
    intro: 'Electrical enclosures rely on consistent gasket compression to protect internal equipment from dust, moisture and environmental exposure. SSI manufactures profile families for doors, panels and cabinet interfaces.',
    applications: [
      { title: 'Switchgear Cabinets', text: 'Door and panel seals for electrical switchgear and control cabinets.' },
      { title: 'Substation Equipment', text: 'Profiles for outdoor electrical enclosures exposed to weather and dust.' },
      { title: 'Solar & Energy Systems', text: 'Sealing profiles for inverter, control and energy-distribution housings.' },
      { title: 'Industrial Panels', text: 'Gaskets and extruded sections for machine panels and equipment cabinets.' },
    ],
    factors: [
      ['Compression', 'Gasket geometry must maintain a continuous sealing line around doors and covers.'],
      ['Ingress Control', 'Profile selection supports protection against dust, water and contaminants.'],
      ['Retention', 'Clip-on and push-fit geometries must stay located during assembly and service.'],
      ['Outdoor Exposure', 'Material choice accounts for heat, ozone, sunlight and weathering.'],
    ],
    products: [
      { name: 'Electrical Panel Profiles', image: '/products/electrical-panel-profiles.png', description: 'Profiles for switchgear, control cabinets and electrical enclosures.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Low-force compressible seals for panel and cabinet interfaces.' },
      { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Integrated grip-and-seal profiles for formed enclosure edges.' },
      { name: 'Edge Protectors', image: '/products/edge-protectors.png', description: 'Protective profiles for cabinet and sheet-metal edges.' },
      { name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png', description: 'Profiles for higher-temperature electrical and industrial environments.' },
    ],
    ctaLabel: 'Have An Electrical Enclosure Sealing Requirement?'
  },
  {
    slug: 'mining', eyebrow: 'Mining',
    heroTitle: 'Sealing For Harsh Environments.', heroMuted: 'Built Around Heavy Equipment.',
    heroText: 'Heavy-duty rubber profiles for mining and material-handling equipment exposed to dust, vibration, abrasion, impact and severe operating conditions.',
    heroImage: 'https://images.pexels.com/photos/3998410/pexels-photo-3998410.jpeg?w=1800&q=90',
    sectionTitle: 'Control Dust And Vibration.', sectionMuted: 'Protect The Machine.',
    intro: 'Mining equipment operates where sealing systems face aggressive dust, vibration, mechanical contact and irregular service conditions. SSI profiles are selected around durability and installed retention.',
    applications: [
      { title: 'Equipment Cabins', text: 'Door, window and body seals for operator cabins exposed to dust and vibration.' },
      { title: 'Access Panels', text: 'Compression seals for maintenance doors, covers and equipment compartments.' },
      { title: 'Protective Edges', text: 'Heavy protective profiles for exposed steel and fabricated equipment edges.' },
      { title: 'Machine Interfaces', text: 'Custom sections for sealing and cushioning around moving or vibrating assemblies.' },
    ],
    factors: [
      ['Abrasion', 'Profiles may be exposed to repeated contact, grit and mechanical wear.'],
      ['Dust', 'Continuous sealing lines help control fine particulate ingress.'],
      ['Vibration', 'Retention geometry must remain stable on heavy mobile equipment.'],
      ['Serviceability', 'Profiles should be practical to fit, inspect and replace in field conditions.'],
    ],
    products: [
      { name: 'Edge Protectors', image: '/products/edge-protectors.png', description: 'Heavy protective profiles for fabricated metal edges and equipment interfaces.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible sealing profiles for covers, cabins and access panels.' },
      { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png', description: 'Profiles combining rigid retention with flexible sealing zones.' },
      { name: 'Sponge Solid Strips', image: '/products/sponge-solid-strips-pipes-cords.jpg', description: 'Strip and cord sections for cushioning and secondary sealing.' },
      { name: 'Miscellaneous Profiles', image: '/products/miscellaneous-profiles.png', description: 'Custom profile geometries for specialised heavy-equipment applications.' },
    ],
    ctaLabel: 'Have A Mining Equipment Sealing Requirement?'
  },
  {
    slug: 'infrastructure', eyebrow: 'Infrastructure',
    heroTitle: 'Seal Structural Interfaces.', heroMuted: 'Accommodate Movement.',
    heroText: 'Rubber profiles for civil, structural and infrastructure applications where waterproofing, movement accommodation and long-term environmental exposure define performance.',
    heroImage: '/infrastructure.jpeg',
    sectionTitle: 'Manage Movement.', sectionMuted: 'Maintain The Barrier.',
    intro: 'Infrastructure sealing often combines long joint lengths, structural movement and environmental exposure. Profile geometry must remain functional while allowing the surrounding structure to move.',
    applications: [
      { title: 'Expansion Joints', text: 'Flexible profiles for movement joints in structural and civil applications.' },
      { title: 'Waterproof Interfaces', text: 'Rubber sections used to control water ingress across engineered joints and interfaces.' },
      { title: 'Structural Openings', text: 'Profiles for gaps, edges and transitions in fabricated or cast assemblies.' },
      { title: 'Civil Equipment', text: 'Sealing and protective profiles for infrastructure hardware and support systems.' },
    ],
    factors: [
      ['Movement Range', 'Profiles must accommodate joint opening, closing and misalignment.'],
      ['Water Exposure', 'Geometry and material selection support long-term environmental sealing.'],
      ['Large Sections', 'Infrastructure interfaces may require heavier profile geometries and long continuous runs.'],
      ['Installation Tolerance', 'Profile design must work across realistic civil-construction tolerances.'],
    ],
    products: [
      { name: 'Expansion Joints', image: '/products/expansion-joints.png', description: 'Flexible rubber profiles for structural and civil movement joints.' },
      { name: 'Architectural Profiles', image: '/products/architectural-profiles.png', description: 'Profiles for building and structural sealing interfaces.' },
      { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png', description: 'Compressible profiles for irregular infrastructure interfaces.' },
      { name: 'Sponge Solid Strips', image: '/products/sponge-solid-strips-pipes-cords.jpg', description: 'Strip and cord sections for cushioning and secondary sealing.' },
      { name: 'Miscellaneous Profiles', image: '/products/miscellaneous-profiles.png', description: 'Custom extruded sections for specialised civil and structural applications.' },
    ],
    ctaLabel: 'Have An Infrastructure Sealing Requirement?'
  },
];

export function getIndustryDetail(slug: string) {
  return industryDetails.find((industry) => industry.slug === slug);
}
