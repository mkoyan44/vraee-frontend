export interface PricingTier {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: string[];
    popular?: boolean;
    category: '3D CAD Modeling' | '3D Rendering & Animation' | 'Professional Services';
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
        price: '$90',
        description: 'Rendering service for one piece of jewelry. Includes 3 color variations, 3 product views, and 3 360° animations. Price is for rendering only. CAD modeling is priced separately.',
        category: '3D Rendering & Animation',
        turnaroundTime: '2–4 business days',
        revisions: '1 free revision included',
        features: [
            '3 color variations',
            '3 product views',
            '3 360° animations',
            'Rendering service only'
        ],
        includes: [
            '3 color variations',
            '3 product views',
            '3 360° animations',
            'Rendering service only'
        ],
        notes: [
            'Price is for one piece of jewelry',
            'Rendering service only (CAD priced separately)',
            'Perfect for product listings',
            'Watermark-free delivery'
        ],
        serviceType: '3D Rendering & Animation',
        serviceDetail: 'Still Shots (White Background, 3 Views)'
    },
    {
        id: 'render-ecom-pro',
        name: 'E-com Professional Pack',
        price: '$150',
        description: 'Rendering service for one piece of jewelry. Includes 4-5 product views with lifestyle backgrounds and custom animation. Price is for rendering only. CAD modeling is priced separately.',
        category: '3D Rendering & Animation',
        turnaroundTime: '3–5 business days',
        revisions: '2-3 free revisions included',
        popular: true,
        features: [
            '4-5 product views',
            'Custom animation',
            'Lifestyle backgrounds',
            'Rendering service only'
        ],
        includes: [
            '4-5 product views',
            'Custom animation',
            'Lifestyle backgrounds',
            'Rendering service only'
        ],
        notes: [
            'Price is for one piece of jewelry',
            'Rendering service only (CAD priced separately)',
            'Perfect for premium product catalogs',
            'Watermark-free delivery'
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

