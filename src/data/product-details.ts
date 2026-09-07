export type ProductDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  image: string;
  heroTitle: string;
  heroMuted: string;
  heroText: string;
  applications: [string, string][];
  engineering: [string, string][];
  industries: { name: string; href: string }[];
};

export const productDetails: ProductDetail[] = [
  {
    slug: 'architectural-profiles', name: 'Architectural Profiles', eyebrow: 'Architectural Profiles', image: '/products/architectural-profiles.png',
    heroTitle: 'Seal The Envelope.', heroMuted: 'Support Glass, Frames & Facades.',
    heroText: 'Rubber profiles for glazing systems, curtain walls, facade interfaces and framed openings where fit, movement and weather sealing must work together.',
    applications: [
      ['Glazing Systems', 'Profiles used between glass and framing members to support sealing and edge control.'],
      ['Curtain Walls', 'Sections for facade joints and frame interfaces exposed to movement and weather.'],
      ['Doors & Windows', 'Profiles for fixed and operable architectural openings.'],
      ['Expansion Interfaces', 'Flexible sections used where adjoining building elements need controlled movement.'],
    ],
    engineering: [
      ['Glazing Geometry', 'Section shape is selected around glass thickness, frame detail and installed compression.'],
      ['Weather Exposure', 'Material and geometry need to suit repeated exposure to water, UV and temperature change.'],
      ['Joint Movement', 'The profile must accommodate the movement expected across the interface.'],
      ['Retention', 'Grooves, channels and compression features determine how the profile remains seated.'],
    ],
    industries: [{ name: 'Architecture', href: '/industries/architecture' }, { name: 'Infrastructure', href: '/industries/infrastructure' }],
  },
  {
    slug: 'bus-body-profiles', name: 'Bus Body Profiles', eyebrow: 'Bus Body Profiles', image: '/products/bus-body-profiles.png',
    heroTitle: 'Coach Body Sealing.', heroMuted: 'Built Around Doors, Glass & Panels.',
    heroText: 'Rubber sealing and trim profiles for buses, coaches and commercial vehicles across doors, windows, body panels and edge interfaces.',
    applications: [
      ['Door Openings', 'Compression profiles around passenger, luggage and service-door interfaces.'],
      ['Window Systems', 'Profiles supporting fixed and movable glazing in coach bodies.'],
      ['Body Panels', 'Sealing and trim sections where fabricated panels and frames meet.'],
      ['Edge Protection', 'Protective profiles for exposed formed-metal edges and trim zones.'],
    ],
    engineering: [
      ['Repeated Operation', 'Door seals need predictable compression through frequent opening and closing cycles.'],
      ['Body Tolerance', 'Profile geometry should accommodate fabrication and assembly variation.'],
      ['Water Management', 'Lip and contact geometry influence drainage and water paths around openings.'],
      ['Retention Method', 'Carrier, flange and channel details determine installation and hold.'],
    ],
    industries: [{ name: 'Roadways', href: '/industries/roadways' }, { name: 'Automotive', href: '/industries/automotive' }],
  },
  {
    slug: 'railway-profiles', name: 'Railway Profiles', eyebrow: 'Railway Profiles', image: '/products/railway-profiles.png',
    heroTitle: 'Sealing For Rolling Stock.', heroMuted: 'Doors, Windows, Panels & Interfaces.',
    heroText: 'Engineered rubber profiles for rail coaches and mass-transit assemblies including doors, glazing, panel interfaces and equipment zones.',
    applications: [
      ['Passenger Doors', 'Profiles used around moving door interfaces and closure zones.'],
      ['Coach Glazing', 'Window and glazing profiles for fixed or framed glass systems.'],
      ['Panel Interfaces', 'Seals between interior, exterior and equipment-panel assemblies.'],
      ['Equipment Zones', 'Profiles for covers, housings and service-access interfaces.'],
    ],
    engineering: [
      ['Interface Movement', 'Door and panel systems require geometry that tolerates operational movement.'],
      ['Compression Control', 'Sealing force should remain consistent across the installed perimeter.'],
      ['Assembly Tolerance', 'Profile design should account for coach-body and frame variation.'],
      ['Material Selection', 'Compound choice is matched to the operating environment and application requirement.'],
    ],
    industries: [{ name: 'Railways & Mass Transit', href: '/industries/railways' }],
  },
  {
    slug: 'container-seals', name: 'Container Seals', eyebrow: 'Container Seals', image: '/products/container-seals.png',
    heroTitle: 'Close The Door.', heroMuted: 'Protect The Cargo Interface.',
    heroText: 'Continuous rubber sealing profiles for cargo-container doors and logistics equipment where compression, corner continuity and weather sealing are central to the assembly.',
    applications: [
      ['Container Doors', 'Perimeter seals around paired cargo-container door leaves.'],
      ['Vertical Interfaces', 'Profiles along meeting stiles and closure edges.'],
      ['Header & Sill Zones', 'Sealing sections across top and bottom door interfaces.'],
      ['Corner Transitions', 'Continuous assemblies where straight sections meet around the perimeter.'],
    ],
    engineering: [
      ['Compression', 'The bulb or sealing face must engage predictably when the doors are locked.'],
      ['Corner Continuity', 'Transitions need to maintain a continuous perimeter sealing path.'],
      ['Weather Exposure', 'Profiles operate outdoors through rain, dust and temperature variation.'],
      ['Door Alignment', 'Section geometry must tolerate practical door and frame variation.'],
    ],
    industries: [{ name: 'Shipping', href: '/industries/shipping' }],
  },
  {
    slug: 'co-extruded-profiles', name: 'Co-Extruded Profiles', eyebrow: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png',
    heroTitle: 'Multiple Functions.', heroMuted: 'One Continuous Profile.',
    heroText: 'Co-extruded profiles combine different functional sections within one continuous extrusion for assemblies that need retention, sealing, flexibility or surface contact in a single part.',
    applications: [
      ['Carrier + Seal', 'A retaining section combined with a softer sealing element.'],
      ['Grip + Cushion', 'Profiles that hold an edge while providing a compressible contact face.'],
      ['Trim + Weather Seal', 'Sections combining appearance, protection and sealing functions.'],
      ['Complex Interfaces', 'Single-part solutions where separate components would otherwise be required.'],
    ],
    engineering: [
      ['Section Integration', 'Each functional region must work together within one extrusion geometry.'],
      ['Material Compatibility', 'Selected materials need to process and perform together in the same profile.'],
      ['Retention vs Flexibility', 'Rigid and flexible behaviour must be balanced around the installed interface.'],
      ['Manufacturing Consistency', 'The combined section needs repeatable geometry through continuous production.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Roadways', href: '/industries/roadways' }, { name: 'Architecture', href: '/industries/architecture' }],
  },
  {
    slug: 'edge-protectors', name: 'Edge Protectors', eyebrow: 'Edge Protectors', image: '/products/edge-protectors.png',
    heroTitle: 'Protect The Edge.', heroMuted: 'Finish The Interface.',
    heroText: 'Protective rubber profiles for sheet-metal and fabricated edges where grip, cushioning and a controlled finished interface are required.',
    applications: [
      ['Sheet-Metal Edges', 'Profiles fitted over exposed formed-metal edges.'],
      ['Panel Finishing', 'Protective trim around cut or fabricated panel boundaries.'],
      ['Vehicle Interiors', 'Edge protection around trim and body interfaces.'],
      ['Equipment Housings', 'Protective finishing around enclosure and cabinet edges.'],
    ],
    engineering: [
      ['Edge Thickness', 'Internal geometry is selected around the material thickness being covered.'],
      ['Grip', 'The profile should remain seated without excessive installation force.'],
      ['Bend Radius', 'Section flexibility determines how tightly the profile can follow corners and curves.'],
      ['Surface Contact', 'The outer section can provide cushioning or a finished contact face.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Roadways', href: '/industries/roadways' }, { name: 'Power Distribution', href: '/industries/power-distribution' }],
  },
  {
    slug: 'electrical-panel-profiles', name: 'Electrical Panel Profiles', eyebrow: 'Electrical Panel Profiles', image: '/products/electrical-panel-profiles.png',
    heroTitle: 'Seal The Enclosure.', heroMuted: 'Control The Door Interface.',
    heroText: 'Rubber profiles for electrical cabinets, panels and equipment enclosures where the door, frame and sealing line need controlled compression and retention.',
    applications: [
      ['Panel Doors', 'Perimeter seals around hinged electrical enclosure doors.'],
      ['Cabinet Frames', 'Profiles retained on frame lips, channels or formed flanges.'],
      ['Equipment Housings', 'Sealing sections around service covers and access panels.'],
      ['Outdoor Enclosures', 'Profiles for equipment interfaces exposed to dust and weather.'],
    ],
    engineering: [
      ['Closing Force', 'Section size and softness influence how the door closes against the seal.'],
      ['Compression Line', 'Consistent contact is required around corners and along the full perimeter.'],
      ['Retention', 'The installation feature needs to suit the enclosure edge or channel geometry.'],
      ['Exposure', 'Material choice depends on the service environment of the enclosure.'],
    ],
    industries: [{ name: 'Power Distribution', href: '/industries/power-distribution' }, { name: 'Infrastructure', href: '/industries/infrastructure' }],
  },
  {
    slug: 'expansion-joints', name: 'Expansion Joints', eyebrow: 'Expansion Joints', image: '/products/expansion-joints.png',
    heroTitle: 'Allow Movement.', heroMuted: 'Maintain The Joint.',
    heroText: 'Flexible rubber expansion-joint profiles for structural and civil interfaces that need to accommodate movement while maintaining a controlled joint condition.',
    applications: [
      ['Structural Gaps', 'Profiles across intentional movement joints between adjoining elements.'],
      ['Building Interfaces', 'Flexible sections at facade, floor or envelope transitions.'],
      ['Civil Works', 'Joint profiles used across infrastructure and constructed interfaces.'],
      ['Movement Zones', 'Sections where thermal or structural displacement must be accommodated.'],
    ],
    engineering: [
      ['Movement Range', 'Profile geometry should match the opening and expected joint movement.'],
      ['Anchorage', 'The retaining edges need to remain secure while the centre section flexes.'],
      ['Compression & Extension', 'The section needs room to deform without losing its intended function.'],
      ['Exposure', 'Material selection reflects whether the joint is internal, external or weather-exposed.'],
    ],
    industries: [{ name: 'Architecture', href: '/industries/architecture' }, { name: 'Infrastructure', href: '/industries/infrastructure' }],
  },
  {
    slug: 'flocked-glass-run-channel', name: 'Flocked Glass Run Channel', eyebrow: 'Flocked Glass Run Channel', image: '/products/flocked-glass-run-channel.png',
    heroTitle: 'Guide The Glass.', heroMuted: 'Control Friction & Contact.',
    heroText: 'Flocked channels for moving glass systems where the profile must guide, support and seal the glass while maintaining controlled surface interaction.',
    applications: [
      ['Moving Door Glass', 'Channels that guide automotive side glass through vertical movement.'],
      ['Window Frames', 'Profile sections positioned within framed glass-run paths.'],
      ['Glass Support', 'Contact zones that stabilise the glass against vibration and lateral movement.'],
      ['Weather Interface', 'Channel sections that contribute to water and air control around moving glass.'],
    ],
    engineering: [
      ['Friction', 'The flocked contact face reduces direct rubber-to-glass drag.'],
      ['Channel Geometry', 'The section needs to locate the glass while allowing smooth travel.'],
      ['Retention', 'The outer geometry must suit the frame or carrier where the channel is installed.'],
      ['Contact Pressure', 'Enough contact is needed for guidance without excessive operating resistance.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Roadways', href: '/industries/roadways' }],
  },
  {
    slug: 'miscellaneous-profiles', name: 'Miscellaneous Profiles', eyebrow: 'Custom & Miscellaneous Profiles', image: '/products/miscellaneous-profiles.png',
    heroTitle: 'Non-Standard Interface.', heroMuted: 'Purpose-Built Profile.',
    heroText: 'Special-purpose rubber extrusions developed around applications that do not fit a standard product family, from cushioning and protection to sealing and spacing.',
    applications: [
      ['Custom Sealing', 'Application-specific sections built around unique mating geometry.'],
      ['Cushioning', 'Profiles that isolate or soften contact between adjoining parts.'],
      ['Protection', 'Sections that guard surfaces, edges or assembly interfaces.'],
      ['Spacing & Location', 'Simple or complex geometry used to maintain a controlled gap or position.'],
    ],
    engineering: [
      ['Application Geometry', 'The mating interface defines the section rather than a catalogue standard.'],
      ['Function', 'Seal, cushion, protect, retain or locate — the primary function drives the profile concept.'],
      ['Material', 'Compound choice follows environment, flexibility and contact requirements.'],
      ['Manufacturability', 'The final section must be practical for repeatable extrusion or moulding.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Architecture', href: '/industries/architecture' }, { name: 'Infrastructure', href: '/industries/infrastructure' }],
  },
  {
    slug: 'molded-corners', name: 'Molded Corners', eyebrow: 'Molded Corners', image: '/products/molded-corners.png',
    heroTitle: 'Turn The Corner.', heroMuted: 'Keep The Seal Continuous.',
    heroText: 'Moulded corner and transition pieces used to join profile runs around complex geometry while preserving the intended sealing path and installed shape.',
    applications: [
      ['Door Perimeters', 'Corner transitions between straight profile runs around openings.'],
      ['Window Seals', 'Moulded sections connecting horizontal and vertical glazing profiles.'],
      ['Container Assemblies', 'Corner pieces used in continuous door-seal systems.'],
      ['Custom Frames', 'Transitions for rectangular or shaped sealing assemblies.'],
    ],
    engineering: [
      ['Profile Match', 'The moulded section needs to match the adjoining extrusion geometry.'],
      ['Corner Angle', 'The transition is designed around the installed frame or opening.'],
      ['Joint Continuity', 'The assembly should avoid gaps or abrupt changes through the corner.'],
      ['Installed Shape', 'The moulded part holds the profile around geometry that is difficult to form from straight extrusion alone.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Shipping', href: '/industries/shipping' }, { name: 'Architecture', href: '/industries/architecture' }],
  },
  {
    slug: 'pipe-clamping-gaskets', name: 'Pipe Clamping Gaskets', eyebrow: 'Pipe Clamping Gaskets', image: '/products/pipe-clamping-gaskets.png',
    heroTitle: 'Support The Pipe.', heroMuted: 'Separate Clamp From Surface.',
    heroText: 'Rubber gasket components positioned between pipework and supporting clamps to provide a controlled contact layer within pipe-support assemblies.',
    applications: [
      ['Pipe Supports', 'Gasket sections between pipe surfaces and clamp bodies.'],
      ['Service Lines', 'Support interfaces in mechanical and utility installations.'],
      ['Equipment Piping', 'Clamping interfaces around fabricated pipe runs.'],
      ['Infrastructure Services', 'Pipe-support applications across constructed systems.'],
    ],
    engineering: [
      ['Pipe Diameter', 'Gasket geometry is selected around the supported pipe size and clamp arrangement.'],
      ['Clamp Fit', 'The section must sit correctly between the clamp and pipe surface.'],
      ['Compression', 'The gasket provides a compliant contact layer under clamp load.'],
      ['Installation', 'Section geometry should support repeatable placement during assembly.'],
    ],
    industries: [{ name: 'Infrastructure', href: '/industries/infrastructure' }, { name: 'Power Distribution', href: '/industries/power-distribution' }],
  },
  {
    slug: 'silicone-rubber-profiles', name: 'Silicone Rubber Profiles', eyebrow: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png',
    heroTitle: 'Silicone Sections.', heroMuted: 'Engineered Around The Interface.',
    heroText: 'Extruded silicone rubber profiles for applications where the section geometry and service requirement call for a silicone-based profile solution.',
    applications: [
      ['Custom Seals', 'Silicone sections developed around non-standard sealing interfaces.'],
      ['Cabinet & Door Seals', 'Compressible profiles used around access and closure perimeters.'],
      ['Glazing Interfaces', 'Silicone sections used around framed glass and related contact zones.'],
      ['Equipment Interfaces', 'Profiles for covers, housings and fabricated assemblies.'],
    ],
    engineering: [
      ['Section Design', 'Bulbs, lips, channels and simple sections are developed around the mating geometry.'],
      ['Compression', 'The installed shape should provide the required contact without excessive closing force.'],
      ['Retention', 'The profile may be located by channel, flange, groove or other assembly feature.'],
      ['Service Requirement', 'Material selection must match the actual application conditions rather than the product name alone.'],
    ],
    industries: [{ name: 'Power Distribution', href: '/industries/power-distribution' }, { name: 'Architecture', href: '/industries/architecture' }, { name: 'Infrastructure', href: '/industries/infrastructure' }],
  },
  {
    slug: 'sponge-rubber-profiles', name: 'Sponge Rubber Profiles', eyebrow: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png',
    heroTitle: 'Soft Compression.', heroMuted: 'Low-Force Sealing & Cushioning.',
    heroText: 'Compressible sponge rubber profiles for applications that need gap filling, cushioning or sealing with lower closing force than a dense solid section.',
    applications: [
      ['Door & Lid Seals', 'Soft profiles around closures where low compression force is useful.'],
      ['Gap Filling', 'Sections used to fill variable gaps between adjoining parts.'],
      ['Cushioning', 'Profiles that soften contact and reduce hard part-to-part interaction.'],
      ['Panel Interfaces', 'Compressible strips and profiles around covers, housings and fabricated panels.'],
    ],
    engineering: [
      ['Compression', 'Sponge structure allows larger deflection under comparatively low force.'],
      ['Gap Variation', 'Profile size is selected around the working range of the installed gap.'],
      ['Recovery', 'The section should recover after compression as required by the application.'],
      ['Retention', 'Geometry and installation method determine how the sponge profile stays located.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Power Distribution', href: '/industries/power-distribution' }, { name: 'Architecture', href: '/industries/architecture' }],
  },
  {
    slug: 'sponge-solid-strips-pipes-cords', name: 'Sponge Solid Strips, Pipes & Cords', eyebrow: 'Strips, Pipes & Cords', image: '/products/sponge-solid-strips-pipes-cords.jpg',
    heroTitle: 'Simple Sections.', heroMuted: 'Flexible Building Blocks.',
    heroText: 'Strips, cords, tubes and simple-section rubber forms used for sealing, cushioning, spacing and fabrication across a wide range of assemblies.',
    applications: [
      ['Sealing Strips', 'Straight sections for simple compression sealing and gap filling.'],
      ['Cords', 'Round sections used in grooves, joints or fabricated sealing arrangements.'],
      ['Tubular Sections', 'Hollow forms providing compressibility across simple interfaces.'],
      ['Fabricated Gaskets', 'Simple forms cut or joined into application-specific assemblies.'],
    ],
    engineering: [
      ['Section Size', 'Diameter, width and thickness are selected around the available space and compression.'],
      ['Solid vs Sponge', 'Material structure changes firmness, recovery and closing force.'],
      ['Fabrication', 'Simple profiles can be cut, joined or formed into larger assemblies.'],
      ['Installation', 'Grooves, adhesive fixing or compression may be used depending on the interface.'],
    ],
    industries: [{ name: 'Infrastructure', href: '/industries/infrastructure' }, { name: 'Architecture', href: '/industries/architecture' }, { name: 'Power Distribution', href: '/industries/power-distribution' }],
  },
  {
    slug: 'windows-rubber-profiles', name: 'Windows Rubber Profiles', eyebrow: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.png',
    heroTitle: 'Control The Glass Edge.', heroMuted: 'Seal The Window Interface.',
    heroText: 'Rubber profiles for fixed and movable window systems across vehicles and fabricated assemblies where the glass, frame and sealing section must work as one interface.',
    applications: [
      ['Fixed Glazing', 'Profiles positioned between glass and fixed frame openings.'],
      ['Movable Windows', 'Sections supporting or sealing sliding and opening glass systems.'],
      ['Vehicle Windows', 'Window profiles used across automotive, bus and rail body openings.'],
      ['Fabricated Frames', 'Rubber sections around metal or composite framed glazing.'],
    ],
    engineering: [
      ['Glass Thickness', 'The glazing channel and lips must suit the glass section being retained.'],
      ['Frame Geometry', 'Outer profile features are matched to the window frame or body opening.'],
      ['Water Paths', 'Contact geometry influences sealing and drainage around the glass.'],
      ['Installation', 'Profile design should support repeatable assembly without damaging the glass edge.'],
    ],
    industries: [{ name: 'Automotive', href: '/industries/automotive' }, { name: 'Roadways', href: '/industries/roadways' }, { name: 'Railways & Mass Transit', href: '/industries/railways' }, { name: 'Architecture', href: '/industries/architecture' }],
  },
];

export function getProductDetail(slug: string) {
  return productDetails.find((product) => product.slug === slug);
}
