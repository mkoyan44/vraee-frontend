export interface PricingTier {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: string[];
    popular?: boolean;
    category: '3D CAD Modeling' | '3D Rendering & Animation' | 'Animation & Video' | 'Professional Services';
    turnaroundTime: string;
    revisions?: string;
    includes?: string[];
    notes?: string[];
    isManufacturingReady?: boolean;
    serviceType?: string; // For ProjectCreationModal
    serviceDetail?: string; // For ProjectCreationModal
}

export const pricingTiers: PricingTier[] = [
    // 3D CAD Modeling
    {
        id: 'cad-basic',
        name: 'Essential CAD Modeling',
        price: 'Starting at $20',
        description: 'Basic plain bands, simple pendants. Essential geometric forms with standard stone settings. Ideal for straightforward designs requiring precise CAD modeling with manufacturing-ready specifications.',
        category: '3D CAD Modeling',
        turnaroundTime: '3–5 business days',
        revisions: '2 free revisions included',
        isManufacturingReady: true,
        features: [
            'CAD-optimized jewelry modeling',
            'Ring, pendant, and bracelet designs',
            'Standard gemstone placement',
            'STL, 3DM export formats',
            'Manufacturing-ready specifications'
        ],
        notes: [
            'Perfect for essential geometric designs',
            '50% deposit required',
            'Additional revisions: $75/hour'
        ],
        serviceType: '3D CAD Modeling',
        serviceDetail: 'Modeling from Scratch (Sketch/Reference)'
    },
    {
        id: 'cad-standard',
        name: 'Advanced CAD Modeling',
        price: 'Starting at $80',
        description: 'Standard engagement rings, halo settings. Complex geometric configurations with multi-stone arrangements and detailed shank modifications. Requires advanced problem-solving and technical precision for manufacturing optimization.',
        category: '3D CAD Modeling',
        turnaroundTime: '4–7 business days',
        revisions: '2 free revisions included',
        popular: true,
        isManufacturingReady: true,
        features: [
            'Advanced CAD jewelry modeling',
            'Complex ring and pendant designs',
            'Multi-stone arrangements',
            'Detailed shank modifications',
            'Technical manufacturing specs',
            'Multiple format exports',
            'Manufacturing feasibility review'
        ],
        notes: [
            'Most engagement and designer pieces',
            '50% deposit required',
            'Additional revisions: $75/hour'
        ],
        serviceType: '3D CAD Modeling',
        serviceDetail: 'Modeling from Scratch (Sketch/Reference)'
    },
    {
        id: 'cad-premium',
        name: 'Premium Sculpting & CAD',
        price: 'Starting at $200',
        description: 'Complex organic forms, high-detail custom pieces. Highly intricate, organic, or free-form designs requiring advanced sculpting techniques. Complex pave arrangements and photo-realistic surface detailing optimized for production.',
        category: '3D CAD Modeling',
        turnaroundTime: '7–14 business days',
        revisions: '2 free revisions included',
        isManufacturingReady: true,
        features: [
            'Advanced digital sculpting',
            'Organic, free-form designs',
            'High-detail filigree work',
            'Complex pave arrangements',
            'Photo-realistic surface detailing',
            'Multiple export formats',
            'Manufacturing optimization'
        ],
        notes: [
            'For high-end, unique designs',
            '50% deposit required',
            'Additional revisions: $75/hour',
            'Specialized sculpting expertise'
        ],
        serviceType: '3D CAD Modeling',
        serviceDetail: 'Modeling from Scratch (Sketch/Reference)'
    },

    // 3D Rendering & Animation - Packages
    {
        id: 'render-ecom-starter',
        name: 'E-com Starter Pack',
        price: '$70',
        description: '3 professional product views optimized for e-commerce platforms. High-resolution white background renders with standard material setup for immediate catalog integration.',
        category: '3D Rendering & Animation',
        turnaroundTime: '2–4 business days',
        revisions: '1 free revision included',
        features: [
            '3 high-resolution product views',
            '4K resolution images (2000x2000px)',
            'White/clean backgrounds',
            'Standard jewelry materials',
            'Professional lighting',
            'High-resolution PNG/JPEG',
            'Commercial usage rights'
        ],
        notes: [
            'Perfect for product listings',
            'Watermark-free delivery',
            'Consistent style across views'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'Still Shots (White Background, 3 Views)'
    },
    {
        id: 'render-ecom-pro',
        name: 'E-com Professional Pack',
        price: '$350',
        description: '5 comprehensive product views with lifestyle backgrounds. Enhanced material simulation and advanced lighting for premium e-commerce presentation.',
        category: '3D Rendering & Animation',
        turnaroundTime: '3–5 business days',
        revisions: '2 free revisions included',
        popular: true,
        features: [
            '5 professional product views',
            '6K+ ultra-high resolution',
            'Lifestyle background options',
            'Complex metal materials',
            'Gemstone dispersion effects',
            'Advanced lighting setups',
            'Professional post-processing',
            'Commercial usage rights'
        ],
        notes: [
            'For premium product catalogs',
            'Multiple composition options',
            'Advanced material shaders'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'Lifestyle Packshot (Complex Scene, 5 Views)'
    },
    {
        id: 'render-bulk',
        name: 'Bulk Rendering Package',
        price: 'Custom Quote',
        description: 'Volume pricing for collections of 10+ images. Consistent lighting and materials across all views for cohesive brand presentation.',
        category: '3D Rendering & Animation',
        turnaroundTime: '5–10 business days',
        revisions: '3 free revisions for collection',
        features: [
            'Same model, multiple angles',
            'Consistent lighting & materials',
            'Bulk discount pricing',
            'Multiple format exports',
            'Commercial usage rights',
            'Organized delivery packages'
        ],
        notes: [
            'Best value for collections',
            'Consistent style throughout',
            'Volume discount applied'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'Still Shots (White Background, 3 Views)'
    },

    // Animation & Video
    {
        id: 'anim-360',
        name: '360° Product Rotation',
        price: '$70–$120',
        description: 'Smooth 360° rotation on white/simple background. Professional turntable animation optimized for e-commerce product pages and digital marketing. 5-10 second loop.',
        category: 'Animation & Video',
        turnaroundTime: '3–5 business days',
        revisions: '1 free revision included',
        features: [
            '300° smooth rotation',
            'Clean backgrounds',
            'HD video export (1080p)',
            'Multiple rotation speeds',
            'MP4 format optimized',
            'Commercial usage rights',
            'Social media ready'
        ],
        includes: [
            '5–10 second duration'
        ],
        notes: [
            'E-commerce essential',
            'Fast turnaround',
            'SEO-friendly video format'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: '360° Turntable Animation (10-15 sec)'
    },
    {
        id: 'anim-cinematic',
        name: 'Cinematic Jewelry Showcase',
        price: '$300–$550',
        description: 'Dynamic camera movements with focus on gemstone details and metal reflections. Premium marketing content with slow-motion sparkle effects and professional transitions.',
        category: 'Animation & Video',
        turnaroundTime: '5–8 business days',
        revisions: '2 free revisions included',
        features: [
            'Dynamic camera movements',
            'Focus on gemstone details',
            'Slow-motion sparkle effects',
            'Professional transitions',
            '4K video export',
            'Custom music integration',
            'Background environments',
            'Commercial usage rights'
        ],
        includes: [
            '15–30 second duration'
        ],
        notes: [
            'Premium marketing content',
            'Storytelling approach',
            'Attention-grabbing effects'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'On-Body Video Animation'
    },
    {
        id: 'anim-collection',
        name: 'Full Collection Video',
        price: 'Custom Quote',
        description: 'Comprehensive animation of multiple pieces with complex transitions and storytelling elements. Designed for brand presentations and comprehensive marketing campaigns.',
        category: 'Animation & Video',
        turnaroundTime: '10–14 business days',
        revisions: '3 free revisions included',
        features: [
            'Multiple jewelry pieces',
            'Complex transition effects',
            'Brand storytelling',
            'Professional voiceover prep',
            '4K video production',
            'Background music integration',
            'Custom branding elements',
            'Complete usage rights'
        ],
        includes: [
            '30+ seconds duration'
        ],
        notes: [
            'Brand presentation videos',
            'Comprehensive marketing content',
            'Complex production requirements'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'On-Body Video Animation'
    },

    // Professional Services
    {
        id: 'consulting-hourly',
        name: 'Hourly Consulting Rate',
        price: '$75–$120 per hour',
        description: 'Professional consultation, design reviews, extensive revisions, and specialized problem-solving outside standard project scope.',
        category: 'Professional Services',
        turnaroundTime: 'As needed',
        features: [
            'Expert design consultation',
            'Technical problem-solving',
            'Material & process advice',
            'Manufacturing guidance',
            'Design review services',
            'Specialized revisions',
            'Industry best practices',
            'Professional recommendations'
        ],
        notes: [
            'For work outside fixed projects',
            'Billed in 15-minute increments',
            'Prepaid for extensive work'
        ]
    },
    {
        id: 'retainer-monthly',
        name: 'Monthly Retainer',
        price: '$2,000–$5,000 monthly',
        description: 'Priority service for brands requiring guaranteed monthly deliverables. Includes dedicated communication and expedited turnaround times.',
        category: 'Professional Services',
        turnaroundTime: 'Priority scheduling',
        features: [
            'Dedicated project manager',
            'Guaranteed monthly deliverables',
            'Priority scheduling',
            'Direct communication channel',
            'Discounted hourly rates',
            'Expedited turnaround',
            'Long-term partnership terms',
            'Custom service agreements'
        ],
        includes: [
            'Guaranteed response within 2 hours',
            'Monthly strategy calls',
            'Priority support',
            'Volume discounts'
        ]
    }
];

