/**
 * Full service page content for the modeling-style layout.
 * Used by FullServicePage and by [slug] when content exists for a slug.
 */

export type ValueProp = { icon: string; title: string; text: string };
export type ProcessStep = { title: string; text: string };
export type ServiceBreakdownItem = { title: string; desc: string; specs: string };
export type SoftwareItem = { name: string; desc: string };
export type FaqItem = { q: string; a: string };
export type CtaLink = { text: string; href: string };

export type FullServiceContent = {
  meta: { title: string; description: string };
  hero: { title: string; subheadline: string; desc: string; ctaText: string };
  value: { heading: string; desc: string; items: ValueProp[] };
  process: { heading: string; desc: string; steps: ProcessStep[] };
  services: { heading: string; desc: string; items: ServiceBreakdownItem[] };
  software: {
    heading: string;
    desc: string;
    items: SoftwareItem[];
    linkHref?: string;
    linkText?: string;
  };
  faq: { title: string; items: FaqItem[] };
  trust: { heading: string; signals: string[] };
  cta: { heading: string; sub: string; primaryText: string; secondary: CtaLink[] };
};

const content: Record<string, FullServiceContent> = {
  modeling: {
    meta: {
      title: 'Precision 3D CAD Modeling for Jewelry | Manufacturing-Ready Files',
      description:
        'Production-ready jewelry CAD with exact stone setting tolerances and shrinkage compensation. Trusted by manufacturers, retailers, and independent designers.',
    },
    hero: {
      title: 'Precision 3D CAD Modeling for Jewelry',
      subheadline:
        'Manufacturing-ready files with exact stone setting tolerances and shrinkage compensation—so your castings and settings fit the first time.',
      desc: 'We build production-ready 3D models for manufacturers, retailers, and independent designers. Every curve, prong, and setting is engineered for your process, with deliverables in the formats your shop uses. Get a fixed quote and a clear timeline.',
      ctaText: 'Get a fixed quote',
    },
    value: {
      heading: 'Why manufacturers and designers work with us',
      desc: 'We focus on the details that reduce rework and speed up your production.',
      items: [
        { icon: 'target', title: 'Exact stone setting tolerances', text: 'Eliminate casting rejects and hand-fitting. Our CAD models use manufacturing-grade tolerances so settings fit stones and findings the first time.' },
        { icon: 'shield', title: 'Shrinkage compensation built in', text: 'We apply metal-specific shrinkage factors so cast pieces match your design dimensions. No surprise size drift or rework.' },
        { icon: 'clock', title: 'Predictable turnaround', text: 'Clear milestones and delivery dates. Get production-ready files when you need them, without last-minute surprises.' },
        { icon: 'filecheck', title: 'Production-ready deliverables', text: 'Receive files in the formats your shop uses: .3dm, STL, OBJ, and more. Ready for casting, milling, or additive manufacturing.' },
      ],
    },
    process: {
      heading: 'From brief to production-ready files',
      desc: 'A clear, technical process so you know what to expect at each step.',
      steps: [
        { title: 'Consultation & brief', text: 'We review your sketches, tech packs, or reference images and confirm metal type, stone sizes, and any special requirements. You get a fixed scope and quote.' },
        { title: 'Parametric CAD modeling', text: 'Our specialists build your piece in MatrixGold or Rhino 7 with correct prong counts, seat angles, and structural integrity. Models are fully editable for future iterations.' },
        { title: 'Stone setting verification', text: 'We validate every setting for fit and clearance. Stone dimensions and tolerances are checked against your specs so castings are setting-ready.' },
        { title: 'Shrinkage compensation & prep', text: 'Metal-specific shrinkage is applied. Files are cleaned and prepared for your chosen process (lost wax, direct print, or CNC) and sent for your review.' },
        { title: 'Delivery & handoff', text: 'You receive production-ready files in your requested formats, plus a summary sheet. Revisions are available during the approval window.' },
      ],
    },
    services: {
      heading: 'Core services and deliverables',
      desc: 'Technical scope and what you receive for each service type.',
      items: [
        { title: 'Ring & band CAD modeling', desc: 'Full 3D models for solitaires, bands, and multi-stone rings with anatomically correct shanks and sizing.', specs: 'Deliverables: .3dm, STL, OBJ. Shrinkage applied. Stone seats verified.' },
        { title: 'Pendant & necklace components', desc: 'Bails, links, and pendants with correct gauge, clasp compatibility, and weight considerations.', specs: 'Deliverables: .3dm, STL. Optional chain specs and assembly notes.' },
        { title: 'Earring & finding CAD', desc: 'Posts, backs, and decorative elements with proper threading or friction fit and durability in mind.', specs: 'Deliverables: .3dm, STL. Post sizes per your standard.' },
        { title: 'Complex settings & custom work', desc: 'Pavé, channel, and specialty settings with verified stone counts and structural integrity.', specs: 'Deliverables: .3dm, STL, OBJ. Full BOM and setting notes.' },
        { title: 'Revision & optimization', desc: 'Updates to existing CAD for sizing, design tweaks, or manufacturing optimization (e.g. wall thickness, sprue placement).', specs: 'Turnaround based on scope. Same quality standards as new models.' },
      ],
    },
    software: {
      heading: 'Software and expertise',
      desc: 'We use industry-standard tools chosen for jewelry manufacturing workflows.',
      items: [
        { name: 'MatrixGold', desc: 'Jewelry-native CAD with strong stone-setting and manufacturing tools. We use it for rings, settings, and parametric families so your designs scale and iterate quickly.' },
        { name: 'Rhino 7', desc: 'Industry-standard NURBS modeling for complex surfaces and technical accuracy. Ideal for one-off pieces and when you need maximum control over geometry.' },
        { name: 'Materialise Magics', desc: 'Used to prepare and optimize files for 3D printing and casting. Ensures clean meshes, proper wall thickness, and support strategy for additive workflows.' },
      ],
      linkHref: '/programs-we-use#cad-engineering',
      linkText: 'View our full programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What file formats do you deliver?', a: 'We typically deliver .3dm (Rhino), STL, and OBJ. Other formats (e.g. STEP, FBX) can be provided on request. All files are production-ready and cleaned for your process.' },
        { q: 'How do you handle shrinkage compensation?', a: 'We apply metal-specific shrinkage factors (e.g. for gold, silver, platinum) so the printed or milled model scales correctly. Factors are confirmed with you before final delivery.' },
        { q: 'Can you work from hand sketches or photos?', a: 'Yes. We work from sketches, technical drawings, reference photos, or existing pieces. Clear dimensions and stone sizes help us hit your expectations faster.' },
        { q: 'What is your typical turnaround time?', a: 'Simple bands or solitaires often ship within 3–5 business days. Complex settings or multi-stone pieces may take 1–2 weeks. We quote a specific timeline at project start.' },
        { q: 'Do you offer revisions?', a: 'Yes. We include a defined number of revision rounds in the quote. Additional rounds can be added. Revisions are limited to the approved scope to keep timelines predictable.' },
        { q: 'Are your models suitable for 3D printing and casting?', a: 'Yes. Our output is built for lost-wax casting, direct metal printing, or milling. We can optimize for your specific equipment and material if you share requirements.' },
        { q: 'Do you provide stone setting specifications?', a: 'Yes. We document stone sizes, counts, and setting types in the delivery package. This helps your bench team or outsourced setters work efficiently.' },
        { q: 'Who owns the CAD files after delivery?', a: 'You receive full rights to use, modify, and manufacture from the delivered files. We do not retain ownership of your design IP.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Trusted by 470+ jewelry manufacturers and designers',
        'Production-ready files for casting, milling, and 3D printing',
        'Stone setting tolerances and shrinkage compensation included',
        'Fixed quotes and clear delivery timelines',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready for production-ready CAD?',
      sub: 'Share your project and get a fixed quote with a clear delivery timeline. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  sculpting: {
    meta: {
      title: 'Jewelry Digital Sculpting | Organic 3D Forms for Manufacturing',
      description:
        'Professional jewelry sculpting with ZBrush and Blender. Production-ready digital sculptures and organic forms for manufacturers and designers.',
    },
    hero: {
      title: 'Jewelry Digital Sculpting',
      subheadline:
        'From concept to production-ready digital sculpture. Organic 3D forms that capture every curve and detail of your vision.',
      desc: 'We turn sketches and references into high-fidelity digital sculptures with the clarity and precision manufacturers need. Using ZBrush and Blender, we build organic, lifelike forms—curves, textures, and fine detail—delivered production-ready for prototyping and casting.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why choose our sculpting service',
      desc: 'We combine artistic control with manufacturing readiness.',
      items: [
        { icon: 'palette', title: 'Organic forms CAD can\'t match', text: 'Sculpted curves, flowing surfaces, and natural detail that parametric CAD struggles to achieve. Ideal for figurative work, bas-reliefs, and organic jewelry.' },
        { icon: 'filecheck', title: 'Production-ready output', text: 'Clean, watertight meshes suitable for casting and 3D printing. We deliver in the formats your foundry or printer expects.' },
        { icon: 'clock', title: 'Clear timelines', text: 'From first preview to final file, you get milestones and a fixed delivery date. No endless revision loops.' },
        { icon: 'shield', title: 'Iteration without rework', text: 'Preview at key stages and give feedback. Changes are baked into the sculpture so you get one coherent final asset.' },
      ],
    },
    process: {
      heading: 'From brief to final sculpture',
      desc: 'A straightforward path from your reference to a manufacturable file.',
      steps: [
        { title: 'Brief & references', text: 'You share sketches, photos, or existing pieces. We confirm style, scale, and any technical constraints (e.g. wall thickness, undercuts).' },
        { title: 'Block-out & approval', text: 'We build the main forms and proportions. You review and approve direction before we add detail.' },
        { title: 'Detail sculpting', text: 'Surface detail, texture, and refinement in ZBrush or Blender. We keep topology and density suitable for your production method.' },
        { title: 'Retopology & cleanup', text: 'Where needed, we optimize mesh density and ensure watertight, manifold geometry for casting or printing.' },
        { title: 'Delivery', text: 'You receive final files (e.g. OBJ, STL) plus a short spec note. Revisions are available within the agreed scope.' },
      ],
    },
    services: {
      heading: 'What we sculpt',
      desc: 'Types of work and what you can expect.',
      items: [
        { title: 'Rings and bands (organic)', desc: 'Flowing shanks, nature-inspired details, and sculptural bands that go beyond standard CAD.', specs: 'OBJ/STL, scale and metal noted. Suitable for lost wax or direct print.' },
        { title: 'Pendants and lockets', desc: 'Figurative or decorative pendants with fine surface detail and correct proportions.', specs: 'OBJ/STL. Wall thickness and bail options confirmed.' },
        { title: 'Charms and small forms', desc: 'Detailed charms, buttons, and small sculptural elements for collections.', specs: 'OBJ/STL. Batch-ready naming and sizing on request.' },
        { title: 'Bas-relief and decorative panels', desc: 'Relief work for cufflinks, boxes, or inlay. Clean edges and consistent depth.', specs: 'OBJ/STL. Depth and border specs included.' },
        { title: 'Revisions and variants', desc: 'Size variants, pose or detail tweaks, and optimization for a different production process.', specs: 'Quoted per scope. Same quality as originals.' },
      ],
    },
    software: {
      heading: 'Tools we use',
      desc: 'Industry-standard sculpting software for jewelry-ready results.',
      items: [
        { name: 'ZBrush', desc: 'We use ZBrush for high-detail organic sculpting, texture, and complex forms. Models are decimated and exported for production workflows.' },
        { name: 'Blender', desc: 'Blender handles sculpting, retopology, and cleanup. We use it for pieces that benefit from a unified sculpt-to-export pipeline.' },
      ],
      linkHref: '/programs-we-use#digital-sculpting',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What file formats do you deliver for sculpting?', a: 'We typically deliver OBJ and STL. Other formats can be provided on request. All meshes are checked for watertightness and suitability for your process.' },
        { q: 'Can you work from a hand sketch or photo?', a: 'Yes. We work from sketches, reference photos, or existing pieces. Clear direction on style and size helps us match your vision quickly.' },
        { q: 'How do you ensure the sculpture is suitable for casting?', a: 'We apply appropriate wall thickness, avoid problematic undercuts where possible, and deliver clean, manifold meshes. We can adapt to your foundry or printer requirements if you share them.' },
        { q: 'What is the typical turnaround?', a: 'Simple forms often ship within 5–7 business days. Complex or highly detailed pieces may take 1–2 weeks. We give a specific timeline at project start.' },
        { q: 'Do you do retopology?', a: 'Yes. When your process needs optimized poly count or specific edge flow, we retopologize and deliver a clean mesh while preserving the sculpted look.' },
        { q: 'Can I get multiple size variants?', a: 'Yes. We can produce scaled variants (e.g. ring sizes) or design variants. These are quoted as part of the project or as an add-on.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Production-ready sculpted meshes for casting and 3D printing',
        'ZBrush and Blender expertise for jewelry and small objects',
        'Clear milestones and fixed delivery dates',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready to start your sculpting project?',
      sub: 'Share your concept and we’ll quote scope and timeline. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  rendering: {
    meta: {
      title: 'Photorealistic Jewelry Rendering | E-commerce & Marketing Imagery',
      description:
        '4K jewelry renders with accurate materials and lighting. E-commerce-ready and marketing imagery for brands and retailers.',
    },
    hero: {
      title: 'Photorealistic Jewelry Rendering',
      subheadline:
        'E-commerce-ready imagery with accurate materials and lighting. Renders that look like studio photography and convert.',
      desc: 'We produce photorealistic stills of your jewelry for e-commerce, lookbooks, and ads. Every piece is lit and composed for clarity and appeal, with consistent quality and turnaround you can plan on.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why brands use our rendering',
      desc: 'Consistency, speed, and quality that matches or exceeds photography.',
      items: [
        { icon: 'sparkles', title: 'Photorealistic quality', text: 'Accurate metals, gems, and finishes. Renders that are hard to tell from studio shots and perform on product pages and ads.' },
        { icon: 'filecheck', title: 'E-commerce ready', text: 'Multiple angles, clean backgrounds, and specs that fit your platform. Delivered in the resolutions and formats you need.' },
        { icon: 'clock', title: 'Predictable delivery', text: 'Clear timelines and batch delivery. Scale from single pieces to full collections without surprise delays.' },
        { icon: 'target', title: 'On-brand consistency', text: 'Consistent lighting and style across your catalog so every product looks part of the same brand.' },
      ],
    },
    process: {
      heading: 'From CAD or reference to final images',
      desc: 'A simple pipeline from your assets to delivery-ready imagery.',
      steps: [
        { title: 'Assets & brief', text: 'You provide 3D models (or we work from references). We confirm angles, backgrounds, and any brand guidelines.' },
        { title: 'Materials & lighting', text: 'We assign accurate materials (metal, stones, finishes) and set up lighting that flatters the piece and matches your style.' },
        { title: 'Draft renders', text: 'You receive draft images for approval. We adjust composition, lighting, or details as needed.' },
        { title: 'Final renders', text: 'We produce final images at your required resolution and format (e.g. 4K, PNG, cutout).' },
        { title: 'Delivery', text: 'You receive the full set via download or your preferred handoff. Edits and extra angles can be quoted as add-ons.' },
      ],
    },
    services: {
      heading: 'Rendering services',
      desc: 'What we offer and what you receive.',
      items: [
        { title: 'Product stills (white/neutral)', desc: 'Clean product shots on white or neutral backgrounds, ideal for e-commerce grids and catalogs.', specs: '3–8 angles per piece. PNG/JPG. Resolution as agreed.' },
        { title: 'Lifestyle and context', desc: 'Jewelry in context: on body, on surfaces, or in simple scenes for marketing and social.', specs: 'Composition and mood as briefed. Same quality standards as product stills.' },
        { title: 'Close-up and detail', desc: 'Macro-style detail shots to highlight craftsmanship, stones, or texture.', specs: 'Included in sets or as add-on. Resolution and framing as needed.' },
        { title: 'Batch and collection', desc: 'Full collection or batch rendering with consistent lighting and style across all pieces.', specs: 'Volume pricing. Delivery in batches with a clear schedule.' },
        { title: 'Revisions and extra angles', desc: 'Changes to lighting, background, or composition; additional angles or formats.', specs: 'Quoted per request. Fast turnaround for small tweaks.' },
      ],
    },
    software: {
      heading: 'Software we use',
      desc: 'Industry-standard tools for photorealistic jewelry visualization.',
      items: [
        { name: 'Cinema 4D', desc: 'We use Cinema 4D for lighting, materials, and rendering. Strong for consistent, high-quality product imagery and animation.' },
        { name: 'Blender', desc: 'Blender and Cycles for physically based materials and lighting. Cost-effective and flexible for complex scenes and 4K output.' },
        { name: 'After Effects', desc: 'Used for compositing, grading, and final tweaks so stills and motion work match your brand.' },
      ],
      linkHref: '/programs-we-use#high-end-visualization',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What do I need to provide for rendering?', a: 'Ideally 3D CAD or sculpted models. If you only have references or sketches, we can discuss modeling first or work from reference—we’ll quote accordingly.' },
        { q: 'What resolution and format do you deliver?', a: 'We typically deliver high-res PNG or JPG (e.g. 4K or as specified). Cutouts, specific aspect ratios, and other formats are available on request.' },
        { q: 'How many angles per piece?', a: 'Standard product sets are 3–8 angles. We can add more or fewer depending on your platform and budget.' },
        { q: 'Can you match our existing photography style?', a: 'Yes. Share reference images or guidelines and we’ll match lighting, tone, and composition so new renders sit seamlessly with your catalog.' },
        { q: 'What is the turnaround for a typical set?', a: 'Single pieces often ship within 3–5 business days. Collections and batches are quoted with a schedule. Rush options are available.' },
        { q: 'Do you do retouching or post-production?', a: 'Yes. Basic cleanup, color grading, and cutouts are included. Heavier retouching or compositing can be quoted as an add-on.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Photorealistic jewelry imagery for e-commerce and marketing',
        'Consistent lighting and style across collections',
        'Clear timelines and batch delivery',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready for photorealistic jewelry imagery?',
      sub: 'Share your pieces or collection and we’ll quote scope and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  animation: {
    meta: {
      title: 'Jewelry Animation & Motion | Turntables, Video & Social',
      description:
        'Turntables, sparkle, and cinematic jewelry video for e-commerce, social, and presentations. Professional motion for brands.',
    },
    hero: {
      title: 'Jewelry Animation & Motion',
      subheadline:
        'Turntables, sparkle, and cinematic clips for e-commerce, social, and presentations. Your pieces in motion.',
      desc: 'We create short, polished animations of your jewelry—360° turntables, subtle sparkle, and cinematic clips—for product pages, social feeds, and pitches. Same care with materials and lighting as our stills, delivered in the formats and lengths you need.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why use our animation service',
      desc: 'Motion that showcases your jewelry without distracting from it.',
      items: [
        { icon: 'video', title: 'E-commerce and social ready', text: 'Turntables and short clips sized and formatted for product pages, Instagram, and ads. We deliver files that drop into your workflow.' },
        { icon: 'sparkles', title: 'Accurate materials in motion', text: 'Metal and stone response to light is simulated so sparkle and reflection look natural, not generic.' },
        { icon: 'clock', title: 'Clear delivery schedule', text: 'We quote length, format, and timeline up front. Batch delivery for collections when needed.' },
        { icon: 'filecheck', title: 'Multiple formats', text: 'MP4, GIF, or platform-specific specs. We adapt to your CMS, social channel, or ad requirements.' },
      ],
    },
    process: {
      heading: 'From brief to final video',
      desc: 'A simple path from your assets to delivery-ready motion.',
      steps: [
        { title: 'Brief & assets', text: 'You share 3D models and reference (e.g. style, length, platform). We confirm duration, framing, and format.' },
        { title: 'Motion design', text: 'We block out rotation, camera move, and any sparkle or effect. You approve direction before we render.' },
        { title: 'Draft animation', text: 'You review a draft (may be lower-res). We adjust timing, angle, or lighting as needed.' },
        { title: 'Final render', text: 'We render at full resolution and export in your requested format(s) and specs.' },
        { title: 'Delivery', text: 'You receive final files. Extra lengths or formats can be quoted as add-ons.' },
      ],
    },
    services: {
      heading: 'Animation services',
      desc: 'Types of motion we produce and what you get.',
      items: [
        { title: '360° turntables', desc: 'Smooth rotation on axis so customers see every angle. Standard for product pages and configurators.', specs: 'Duration and resolution as agreed. MP4, GIF, or web-optimized.' },
        { title: 'Sparkle and detail', desc: 'Subtle light animation to highlight stone brilliance and metal reflection.', specs: 'Short loops (e.g. 3–8 sec). Ideal for hero areas and social.' },
        { title: 'Cinematic clips', desc: 'Camera moves and composed shots for lookbooks, reels, and presentations.', specs: 'Length and style as briefed. Music and voiceover not included.' },
        { title: 'Batch and collection', desc: 'Multiple pieces with consistent style and format for catalog or campaign.', specs: 'Volume pricing. Delivery schedule agreed up front.' },
        { title: 'Extra formats and lengths', desc: 'Additional aspect ratios, durations, or formats for different platforms.', specs: 'Quoted per request. Same quality as originals.' },
      ],
    },
    software: {
      heading: 'Software we use',
      desc: 'Tools we use for jewelry motion and rendering.',
      items: [
        { name: 'Cinema 4D', desc: 'We use Cinema 4D for animation, cameras, and rendering. Strong for consistent motion and integration with our still pipeline.' },
        { name: 'Blender', desc: 'Blender for animation and Cycles rendering. Flexible for turntables, effects, and custom setups.' },
        { name: 'After Effects', desc: 'Compositing and post for color, timing, and export to multiple formats (MP4, GIF, etc.).' },
      ],
      linkHref: '/programs-we-use#high-end-visualization',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What do I need to provide for animation?', a: '3D models (CAD or sculpted) are ideal. We can work from references if modeling is included in the project. We’ll confirm length, style, and format in the brief.' },
        { q: 'What length and format do you deliver?', a: 'Typical turntables are 3–10 seconds; sparkle loops 3–8 seconds. We deliver MP4, GIF, or other formats as needed. Resolution and aspect ratio are agreed in the quote.' },
        { q: 'Can you match our brand style?', a: 'Yes. Share reference videos or style notes and we’ll match lighting, pacing, and mood so animations fit your brand.' },
        { q: 'What is the turnaround?', a: 'Single animations often ship within 5–7 business days. Batches and complex shots are quoted with a schedule. Rush options are available.' },
        { q: 'Do you do sound or voiceover?', a: 'We focus on picture. Music and voiceover can be sourced separately or we can point you to simple options for social.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Jewelry motion for e-commerce, social, and presentations',
        'Accurate materials and lighting in motion',
        'Clear timelines and format options',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready for jewelry animation?',
      sub: 'Share your pieces and we’ll quote length, format, and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  '3d-design': {
    meta: {
      title: 'Creative 3D Jewelry Design | Concept to Production-Ready',
      description:
        'Full 3D jewelry design from concept to customer-ready assets. Digital sculpting, CAD development, and manufacturable output.',
    },
    hero: {
      title: 'Creative 3D Jewelry Design',
      subheadline:
        'From concept to customer-ready 3D. We explore shapes, refine details, and deliver designs ready for production.',
      desc: 'We take your ideas from sketch or mood board to production-ready 3D. Our team handles concept development, form exploration, and technical refinement so you get designs that are both striking and manufacturable.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why work with us for design',
      desc: 'We combine creative exploration with technical clarity.',
      items: [
        { icon: 'sparkles', title: 'Concept to 3D', text: 'We develop shapes and details in 3D from the start, so you see the real proportions and flow—not just flat sketches.' },
        { icon: 'layers', title: 'Sculpt and CAD', text: 'Organic sculpting plus parametric CAD where it helps. You get one coherent design that’s ready for production.' },
        { icon: 'clock', title: 'Clear milestones', text: 'Approval points at concept, block-out, and detail. You stay in control of the direction without surprise rework.' },
        { icon: 'filecheck', title: 'Production-ready output', text: 'Final deliverables in the formats your manufacturer or printer needs. We don’t hand off “design only” files that can’t be made.' },
      ],
    },
    process: {
      heading: 'From idea to production-ready design',
      desc: 'Structured so you can steer at each stage.',
      steps: [
        { title: 'Brief & direction', text: 'You share inspiration, sketches, or references. We align on style, constraints, and what “production-ready” means for your process.' },
        { title: 'Concept exploration', text: 'We explore forms in 3D (sculpt or CAD) and present options. You choose direction before we refine.' },
        { title: 'Refinement', text: 'We develop the chosen direction: proportions, detail, and structure. You review and approve before technical lock.' },
        { title: 'Technical preparation', text: 'We optimize for your production route—casting, printing, or milling—and prepare clean files.' },
        { title: 'Delivery', text: 'You receive final 3D files and a short spec. Revisions within scope are included; further iterations can be quoted.' },
      ],
    },
    services: {
      heading: 'Design services',
      desc: 'What we offer and what you receive.',
      items: [
        { title: 'Full design from concept', desc: 'We take a brief or mood and develop one or more 3D design directions to approval, then to production-ready.', specs: 'Deliverables as agreed: OBJ, STL, .3dm, etc. Scope and revisions in quote.' },
        { title: 'Design development from sketch', desc: 'You provide sketches; we translate into 3D, refine proportions and detail, and deliver manufacturable files.', specs: 'Iterations included as per quote. Extra variants quoted separately.' },
        { title: 'Form and proportion studies', desc: 'Exploration of shape and balance without full detail. Useful for range planning and client presentations.', specs: 'Presented as renders or simple 3D. Can be developed to production later.' },
        { title: 'Design optimization', desc: 'We take an existing design and optimize for a different metal, process, or cost target without losing the look.', specs: 'Quoted per project. Same quality standards as new design.' },
        { title: 'Collection and range', desc: 'Multiple pieces designed to work together—matching style, proportion, and production route.', specs: 'Quoted per collection. Batch delivery and consistent quality.' },
      ],
    },
    software: {
      heading: 'Tools we use',
      desc: 'Sculpting and CAD tools chosen for jewelry design and production.',
      items: [
        { name: 'ZBrush', desc: 'We use ZBrush for organic form exploration and detail. Models are prepared for production or handed to CAD for technical refinement.' },
        { name: 'Blender', desc: 'Blender for sculpting, retopology, and visualization. Fits well when the design stays sculpt-led or needs a flexible pipeline.' },
        { name: 'MatrixGold / Rhino', desc: 'When the design needs parametric control or manufacturing precision, we use MatrixGold or Rhino for CAD development and final geometry.' },
      ],
      linkHref: '/programs-we-use',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What do I need to provide to start?', a: 'A brief, sketches, or references are enough. We’ll clarify style, constraints, and deliverables so the quote is accurate.' },
        { q: 'How many design options do I get?', a: 'We typically propose 1–3 directions at concept stage, then refine the chosen one. The number of options and revisions is set in the quote.' },
        { q: 'Will the design be suitable for production?', a: 'Yes. We design with your production route in mind (casting, printing, milling) and deliver files that are ready for that process.' },
        { q: 'What file formats do I receive?', a: 'We deliver in the formats your manufacturer or printer needs—commonly OBJ, STL, or .3dm. This is confirmed in the brief.' },
        { q: 'What is the typical timeline?', a: 'Single designs often move from concept to final in 2–3 weeks, depending on complexity and revision rounds. We give a schedule in the quote.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Concept-to-production 3D jewelry design',
        'Sculpting and CAD in one coherent workflow',
        'Clear milestones and revision scope',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready to develop your jewelry design?',
      sub: 'Share your idea and we’ll quote scope, milestones, and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  'cad-design': {
    meta: {
      title: 'Jewelry CAD Design | Technical Modeling for Manufacturing',
      description:
        'Technical CAD and parametric modeling for jewelry manufacturing. Accurate, revision-friendly, and ready for casting or CNC.',
    },
    hero: {
      title: 'Jewelry CAD Design',
      subheadline:
        'Technical CAD and parametric modeling for manufacturing. Accurate, revision-friendly, and ready for casting or CNC.',
      desc: 'We build jewelry CAD that fits your manufacturing process. Stone settings, shrinkage, and geometry are handled so you get files that cast or machine without surprise rework. Fixed scope and clear delivery.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why manufacturers use our CAD',
      desc: 'Precision and clarity from quote to delivery.',
      items: [
        { icon: 'target', title: 'Manufacturing-focused', text: 'Models are built with your process in mind—casting, CNC, or printing. We avoid geometry that causes trouble downstream.' },
        { icon: 'shield', title: 'Shrinkage and tolerances', text: 'Metal-specific shrinkage and setting tolerances are applied so parts fit and scale correctly.' },
        { icon: 'clock', title: 'Predictable timeline', text: 'We quote scope and delivery up front. Revisions are defined so timelines stay on track.' },
        { icon: 'filecheck', title: 'Editable source files', text: 'You receive native or standard formats (.3dm, STEP, etc.) so your team can adjust if needed.' },
      ],
    },
    process: {
      heading: 'From brief to delivery',
      desc: 'A clear process so you know what to expect.',
      steps: [
        { title: 'Brief & quote', text: 'We review sketches, tech packs, or references and confirm metal, stones, and process. You get a fixed quote and timeline.' },
        { title: 'CAD modeling', text: 'We build the piece in MatrixGold or Rhino with correct settings and structure. You get previews at agreed milestones.' },
        { title: 'Verification', text: 'We check settings, dimensions, and shrinkage. Any issues are fixed before handoff.' },
        { title: 'Prep for production', text: 'Files are cleaned and exported in your requested formats. Summary sheet and specs are included.' },
        { title: 'Delivery & revisions', text: 'You receive files and documentation. Revisions within scope are included; further changes are quoted.' },
      ],
    },
    services: {
      heading: 'CAD services',
      desc: 'What we model and what you receive.',
      items: [
        { title: 'Rings and bands', desc: 'Solitaires, bands, and multi-stone rings with correct shank and setting geometry.', specs: '.3dm, STL, OBJ. Shrinkage and stone specs noted.' },
        { title: 'Pendants and bails', desc: 'Pendants, bails, and links with correct gauge and assembly in mind.', specs: '.3dm, STL. Optional chain and clasp notes.' },
        { title: 'Earrings and findings', desc: 'Posts, backs, and decorative elements with proper fit and durability.', specs: '.3dm, STL. Post sizes per your standard.' },
        { title: 'Complex settings', desc: 'Pavé, channel, and specialty settings with verified stone count and structure.', specs: '.3dm, STL, OBJ. BOM and setting notes.' },
        { title: 'Revisions and variants', desc: 'Sizing, detail changes, or optimization for a different process. Quoted per scope.', specs: 'Same quality as new work. Turnaround as agreed.' },
      ],
    },
    software: {
      heading: 'Software we use',
      desc: 'CAD tools chosen for jewelry and manufacturing.',
      items: [
        { name: 'MatrixGold', desc: 'Jewelry-native CAD for rings, settings, and parametric families. We use it for most jewelry geometry and quick iterations.' },
        { name: 'Rhino 7', desc: 'NURBS-based modeling for complex or one-off geometry. We use it when we need maximum control or compatibility.' },
        { name: 'Materialise Magics', desc: 'Prep and optimization for 3D printing and casting. We use it to ensure clean, printable/castable output.' },
      ],
      linkHref: '/programs-we-use#cad-engineering',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What file formats do you deliver?', a: 'We typically deliver .3dm, STL, and OBJ. STEP and other formats are available on request. All files are production-ready.' },
        { q: 'How do you handle shrinkage?', a: 'We apply metal-specific shrinkage so cast or printed parts match design dimensions. We confirm factors with you before final delivery.' },
        { q: 'Can you work from sketches or photos?', a: 'Yes. We work from sketches, technical drawings, or reference photos. Clear dimensions and stone sizes help us quote and deliver accurately.' },
        { q: 'What is the turnaround?', a: 'Simple pieces often ship in 3–5 business days; complex work in 1–2 weeks. We quote a specific timeline at project start.' },
        { q: 'Do you offer revisions?', a: 'Yes. A defined number of revision rounds are included. Additional rounds can be added. Scope is fixed to keep delivery predictable.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Technical jewelry CAD for casting, CNC, and printing',
        'Stone setting tolerances and shrinkage compensation',
        'Fixed quotes and clear delivery timelines',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready for jewelry CAD?',
      sub: 'Share your project and we’ll quote scope and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  '3d-jewelry-design': {
    meta: {
      title: '3D Jewelry Design | Concept to Production-Ready 3D',
      description:
        'Full 3D jewelry design from idea to production-ready assets. Sketches and concepts turned into accurate, manufacturable designs.',
    },
    hero: {
      title: '3D Jewelry Design',
      subheadline:
        'Full 3D jewelry design from idea to production-ready assets. Sketches and concepts turned into accurate, manufacturable designs.',
      desc: 'We turn your ideas and sketches into 3D jewelry designs that are ready for production. From first concept to final geometry, we handle form, detail, and technical preparation so you get files your manufacturer or printer can use.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why choose our 3D design service',
      desc: 'One workflow from concept to manufacturable file.',
      items: [
        { icon: 'sparkles', title: 'Idea to 3D', text: 'We develop your concept in 3D from the start so you see real proportions and detail, not just flat drawings.' },
        { icon: 'layers', title: 'Design and technical', text: 'Creative form development plus technical preparation. You get one design that looks right and is makeable.' },
        { icon: 'clock', title: 'Staged approvals', text: 'You approve at concept and again before lock. No surprise direction or rework.' },
        { icon: 'filecheck', title: 'Production-ready output', text: 'Final files in the formats your production process needs—whether casting, printing, or milling.' },
      ],
    },
    process: {
      heading: 'From concept to final 3D',
      desc: 'Clear stages so you can steer the design.',
      steps: [
        { title: 'Brief', text: 'You share sketches, references, or a mood. We confirm style, constraints, and deliverables.' },
        { title: 'Concept in 3D', text: 'We translate the idea into 3D and present one or more directions. You choose before we refine.' },
        { title: 'Refinement', text: 'We develop the chosen direction: proportion, detail, and structure. You review and approve.' },
        { title: 'Technical prep', text: 'We optimize for your production route and prepare clean, exportable files.' },
        { title: 'Delivery', text: 'You receive final 3D files and a short spec. Revisions within scope are included.' },
      ],
    },
    services: {
      heading: 'What we design',
      desc: 'Types of 3D jewelry design we offer.',
      items: [
        { title: 'New design from concept', desc: 'We take your brief or sketch and develop a full 3D design to production-ready.', specs: 'Deliverables as agreed. Revisions in quote.' },
        { title: 'Design from sketch', desc: 'You provide drawings; we interpret in 3D, refine, and deliver manufacturable files.', specs: 'OBJ, STL, or .3dm. Scope set in quote.' },
        { title: 'Design variants', desc: 'Size or style variants of an approved design. Quoted per variant or batch.', specs: 'Same quality as originals. Fast turnaround.' },
        { title: 'Optimization', desc: 'We take an existing design and optimize for a different metal, process, or cost.', specs: 'Quoted per project. No loss of design intent.' },
      ],
    },
    software: {
      heading: 'Tools we use',
      desc: 'Sculpting and CAD for jewelry design.',
      items: [
        { name: 'ZBrush', desc: 'Used for organic form and detail. We export clean meshes for production or hand off to CAD for technical refinement.' },
        { name: 'Blender', desc: 'Sculpting, retopology, and visualization. Good fit when the design is sculpt-led or needs a flexible pipeline.' },
        { name: 'MatrixGold / Rhino', desc: 'When the design needs parametric control or manufacturing precision, we use these for final geometry and export.' },
      ],
      linkHref: '/programs-we-use',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What do I need to provide?', a: 'A brief, sketches, or references. We’ll clarify deliverables and production route so the quote is accurate.' },
        { q: 'What file formats do I get?', a: 'We deliver in the formats your manufacturer or printer needs—commonly OBJ, STL, or .3dm. Confirmed in the brief.' },
        { q: 'Is the design suitable for production?', a: 'Yes. We design with your production method in mind and deliver files that are ready for that process.' },
        { q: 'What is the typical timeline?', a: 'Single designs often run 2–3 weeks from concept to final, depending on complexity. We give a schedule in the quote.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Concept-to-production 3D jewelry design',
        'Clear milestones and revision scope',
        'Production-ready file delivery',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready to turn your idea into 3D?',
      sub: 'Share your concept and we’ll quote scope and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },

  'jewelry-cad-design': {
    meta: {
      title: 'Jewelry CAD Design | Technical Modeling for Manufacturing',
      description:
        'CAD modeling tailored to jewelry: precise settings, clean geometry, and files ready for your manufacturing workflow.',
    },
    hero: {
      title: 'Jewelry CAD Design',
      subheadline:
        'CAD modeling tailored to jewelry: precise settings, clean geometry, and files ready for your manufacturing workflow.',
      desc: 'We build jewelry-specific CAD with the right tolerances and geometry for casting, milling, or printing. You get clean, editable files and a clear delivery timeline.',
      ctaText: 'Get a quote',
    },
    value: {
      heading: 'Why work with us for jewelry CAD',
      desc: 'Jewelry-focused geometry and clear process.',
      items: [
        { icon: 'target', title: 'Jewelry-specific', text: 'Settings, prongs, and proportions are built for real stones and metals. No generic or off-scale geometry.' },
        { icon: 'shield', title: 'Tolerances and shrinkage', text: 'We apply correct shrinkage and setting tolerances so cast or printed parts fit and perform.' },
        { icon: 'clock', title: 'Clear delivery', text: 'Fixed scope and timeline. Revisions are defined so you know what’s included.' },
        { icon: 'filecheck', title: 'Ready for your process', text: 'Files are prepared for your chosen route—lost wax, direct print, or CNC—in the formats you use.' },
      ],
    },
    process: {
      heading: 'From brief to delivery',
      desc: 'A straightforward path to production-ready CAD.',
      steps: [
        { title: 'Brief & quote', text: 'We review your sketches, references, or tech pack and confirm metal, stones, and process. You get a fixed quote.' },
        { title: 'CAD build', text: 'We model in MatrixGold or Rhino with correct settings and structure. You see previews at agreed stages.' },
        { title: 'Check and prep', text: 'We verify settings and dimensions, apply shrinkage, and export in your formats.' },
        { title: 'Delivery', text: 'You receive files and a short spec. Revisions within scope are included.' },
      ],
    },
    services: {
      heading: 'Jewelry CAD services',
      desc: 'What we model and deliver.',
      items: [
        { title: 'Rings and bands', desc: 'Solitaires, bands, and multi-stone rings. Correct shank and setting geometry.', specs: '.3dm, STL, OBJ. Shrinkage and stone notes.' },
        { title: 'Pendants and components', desc: 'Pendants, bails, and links. Gauge and assembly considered.', specs: '.3dm, STL. Optional assembly notes.' },
        { title: 'Earrings and findings', desc: 'Posts, backs, and decorative elements. Fit and durability in mind.', specs: '.3dm, STL. Post sizes as specified.' },
        { title: 'Settings and custom', desc: 'Pavé, channel, and specialty settings. Verified stone count and structure.', specs: '.3dm, STL, OBJ. BOM and setting notes.' },
      ],
    },
    software: {
      heading: 'Software we use',
      desc: 'CAD tools for jewelry manufacturing.',
      items: [
        { name: 'MatrixGold', desc: 'Jewelry-native CAD for rings, settings, and parametric work. We use it for most jewelry geometry.' },
        { name: 'Rhino 7', desc: 'NURBS modeling for complex or one-off geometry and maximum control.' },
        { name: 'Materialise Magics', desc: 'Prep and optimization for 3D printing and casting workflows.' },
      ],
      linkHref: '/programs-we-use#cad-engineering',
      linkText: 'View our programs stack →',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'What formats do you deliver?', a: 'We typically deliver .3dm, STL, and OBJ. Other formats on request. All files are production-ready.' },
        { q: 'How do you handle shrinkage?', a: 'We apply metal-specific shrinkage and confirm factors with you before final delivery.' },
        { q: 'Can you work from sketches?', a: 'Yes. We work from sketches, tech packs, or photos. Clear dimensions and stone sizes help us quote and deliver accurately.' },
        { q: 'What is the turnaround?', a: 'Simple pieces in 3–5 business days; complex in 1–2 weeks. We quote a specific timeline.' },
      ],
    },
    trust: {
      heading: 'Trust and quality',
      signals: [
        'Jewelry CAD for casting, printing, and CNC',
        'Precise settings and shrinkage compensation',
        'Fixed quotes and clear timelines',
        'Confidentiality and IP protection on every project',
      ],
    },
    cta: {
      heading: 'Ready for jewelry CAD?',
      sub: 'Share your project and we’ll quote scope and delivery. No obligation.',
      primaryText: 'Get a quote',
      secondary: [
        { text: 'See pricing', href: '/pricing' },
        { text: 'All services', href: '/services' },
      ],
    },
  },
};

export const fullServiceSlugs = Object.keys(content) as string[];

export function getFullServiceContent(slug: string): FullServiceContent | null {
  return content[slug] ?? null;
}

export function getFullServiceMeta(slug: string): FullServiceContent['meta'] | null {
  const c = content[slug];
  return c ? c.meta : null;
}
