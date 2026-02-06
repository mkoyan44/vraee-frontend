export type Service = {
    title: string;
    description: string;
    image: string;
    /** Optional one-line intro for the hero. */
    lead?: string;
};

export const serviceSlugs: string[] = [
    "sculpting", "modeling", "rendering", "animation",
    "3d-design", "cad-design", "3d-jewelry-design", "jewelry-cad-design"
];

export const services: Record<string, Service> = {
    "sculpting" : {
        title: 'Sculpting',
        lead: 'From concept to production-ready digital sculpture. We turn your ideas into precise, organic 3D forms that capture every detail of your vision.',
        description: "<p>We convert your jewelry ideas into high-fidelity digital sculptures with the clarity and precision manufacturers need. Share sketches, references, or a brief—our sculptors handle the rest.</p><p>We use industry-leading tools including <a href='/zbrush'>ZBrush</a> to build organic, lifelike forms: curves, textures, and fine detail in three dimensions. Work is delivered production-ready for prototyping and manufacturing.</p><p><strong>Our process:</strong> Clear briefings, iterative previews, and files that slot straight into your pipeline. No guesswork, no rework.</p><p><strong>Why work with us:</strong> A focused team, transparent timelines, and output that matches both your aesthetic and technical requirements.</p>",
        image: '/services-page.png',
    },
    "modeling" : {
        title: 'Precision 3D CAD Modeling',
        lead: 'Manufacturing-ready 3D files with correct stone settings, shrinkage compensation, and geometry that fits your production process.',
        description: "<p>We transform sketches into production-ready 3D files with perfect stone setting tolerances and shrinkage compensation. Our specialized CAD modeling team ensures every curve, prong, and setting is anatomically precise, creating models trusted by master jewelers worldwide.</p><p>Whether you're a manufacturer or a jewelry retailer, our precision CAD modeling services deliver manufacturing-ready files that meet the highest industry standards. We use industry-leading software like <a href='/programs-we-use#cad-engineering'>MatrixGold</a>, <a href='/programs-we-use#cad-engineering'>Rhino 7</a>, and <a href='/magics'>Materialise Magics</a> to create production-ready geometry with unparalleled engineering accuracy.</p><p><strong>Our CAD Modeling Process:</strong> We create manufacturing-ready 3D files with perfect stone setting tolerances, shrinkage compensation, and structural CAD design that ensures perfect fit and flawless production. Our parametric CAD techniques produce technical CAD structures ready for casting, milling, or any manufacturing process you require.</p><p><strong>Why Choose Our Precision CAD Modeling Services?</strong> Experience the perfect blend of technical precision and manufacturing expertise. Our CAD specialists deliver production-ready files with perfect stone setting tolerances, ensuring every piece meets the highest quality standards for jewelry manufacturing.</p>",
        image:'/services-item.png',
    },
    "rendering" : {
        title: 'Photorealistic Rendering & Visualization',
        lead: 'E-commerce-ready imagery with accurate materials and lighting. Renders that look like studio photography and convert.',
        description: "<p>We specialize in jewelry photorealistic rendering and visualization. Ultra-realistic 4K renders with physically accurate diamond dispersion and metal textures for e-commerce. Our jewelry rendering specialists create marketplace-ready images that convert browsers to buyers using advanced materials simulation, studio lighting setups, and professional camera angles.</p><p>Whether you're launching a new jewelry collection or updating your e-commerce catalog, our specialized jewelry rendering services deliver stunning visuals that showcase your pieces in the best possible light. We use industry-leading software like <a href='/programs-we-use#high-end-visualization'>Cinema 4D</a>, <a href='/programs-we-use#high-end-visualization'>After Effects</a>, and <a href='/programs-we-use#high-end-visualization'>Blender</a> to create jewelry images that are indistinguishable from professional photography.</p><p><strong>Our Jewelry Rendering Process:</strong> We transform your 3D CAD jewelry models into photorealistic images with physically accurate materials, studio-quality lighting, and professional camera work. Each jewelry piece comes with 3-8 angle views, optimized for e-commerce platforms and marketing materials.</p><p><strong>Why Choose Our Jewelry Rendering Services?</strong> Experience the perfect blend of technical expertise and artistic vision, specialized in jewelry visualization. Our rendering specialists understand the unique requirements of jewelry photography and deliver marketplace-ready images that showcase your jewelry with stunning detail, accurate colors, and professional presentation that drives sales.</p>",
        image:'/services-item.png',
    },
    "animation" : {
        title: 'Jewelry Motion & Presentation',
        lead: 'Turntables, sparkle, and cinematic clips for e-commerce, social, and presentations. Your pieces in motion.',
        description: "<p>We specialize in jewelry animation and motion graphics. Showcase your jewelry designs with cinematic quality animations that highlight gemstone sparkle, metal reflections, and the intricate details that make each piece unique. Our jewelry animation specialists create elegant turntable presentations, gemstone sparkle animations, and cinematic showcase videos perfect for websites, presentations, and social media.</p><p>Whether you're launching a new jewelry collection or creating marketing content, our specialized jewelry animation services deliver stunning motion visuals that captivate audiences and drive engagement. We use industry-leading software like <a href='/programs-we-use#high-end-visualization'>Cinema 4D</a>, <a href='/programs-we-use#high-end-visualization'>After Effects</a>, and <a href='/programs-we-use#high-end-visualization'>Blender</a> to create animations that showcase your jewelry with professional cinematography.</p><p><strong>Our Jewelry Animation Process:</strong> We transform your 3D CAD jewelry models into captivating animations with smooth camera movements, dynamic lighting, and professional post-production. Each animation is optimized for your specific use case, whether it's a 360° turntable for e-commerce, an on-body video for social media, or a cinematic showcase for presentations.</p><p><strong>Why Choose Our Jewelry Animation Services?</strong> Experience the perfect blend of technical expertise and artistic vision, specialized in jewelry motion graphics. Our animation specialists understand the unique requirements of showcasing jewelry in motion and deliver videos that highlight your pieces with stunning detail, accurate materials, and professional presentation that engages viewers and drives sales.</p>",
        image:'/services-item.png',
    },
    "3d-jewelry-design" : {
        title: '3D Jewelry Design',
        lead: 'Full 3D jewelry design from idea to production-ready assets. Sketches and concepts turned into accurate, manufacturable designs.',
        description: "<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professionaljewelry sketch designservices to give life to your designs that are still sparking in your mind. </p><p>Whether you are a manufacturer or a jewelry retailer,Sarkissian Luxury Studiois yourjewelry design studiowith the best resources and the most dedicated team of professionals to help you get a fresh jewelry line – starting with sketching. You just need to express your thoughts on a piece of paper, and leave the rest to us. We’ve some of the bestNew York jewelry designerswho can create accurate, easy to understand sketches in just 24 hours.</p>",
        image:'/services-page.png',
    },
    "jewelry-cad-design" : {
        title: 'Jewelry CAD Design',
        lead: 'CAD modeling tailored to jewelry: precise settings, clean geometry, and files ready for your manufacturing workflow.',
        description: "<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professionaljewelry sketch designservices to give life to your designs that are still sparking in your mind. </p><p>Whether you are a manufacturer or a jewelry retailer,Sarkissian Luxury Studiois yourjewelry design studiowith the best resources and the most dedicated team of professionals to help you get a fresh jewelry line – starting with sketching. You just need to express your thoughts on a piece of paper, and leave the rest to us. We’ve some of the bestNew York jewelry designerswho can create accurate, easy to understand sketches in just 24 hours.</p>",
        image:'/services-page.png',
    },
    "3d-design" : {
        title: 'Creative 3D Jewelry Design & Development',
        lead: 'From concept to customer-ready 3D. We explore shapes, refine details, and deliver designs ready for production.',
        description: "<p>We specialize in creative 3D jewelry design that brings your visions to life through digital sculpting and innovative design development. Our creative design team specializes in pushing the boundaries of shape exploration, creating stunning visual customer presentations, and transforming abstract concepts into tangible digital realities.</p><p>Whether you're exploring new design directions, developing a unique jewelry collection, or creating customer-ready visualizations, our specialized 3D design services deliver comprehensive solutions that showcase the full potential of your jewelry concepts. We use industry-leading software like <a href='/zbrush'>ZBrush</a> and <a href='/programs-we-use#digital-sculpting'>Blender</a> to create organic, lifelike forms that capture the essence of your jewelry vision.</p><p><strong>Our Creative 3D Design Process:</strong> We transform your ideas into stunning 3D designs through digital sculpting, shape experimentation, and innovative design development. From initial concept exploration to customer-ready visualizations, we deliver comprehensive 3D jewelry design solutions that are ready for production.</p><p><strong>Why Choose Our Creative 3D Design Services?</strong> Experience the perfect blend of artistic vision and technical expertise, specialized in jewelry design development. Our creative designers understand the unique requirements of jewelry design and deliver stunning 3D models that showcase your concepts with precision, artistry, and professional presentation.</p>",
        image:'/services-item.png',
    },
    "cad-design" : {
        title: 'Jewelry CAD Design',
        lead: 'Technical CAD and parametric modeling for manufacturing. Accurate, revision-friendly, and ready for casting or CNC.',
        description: "<p>We specialize in jewelry CAD design and technical modeling. We transform sketches into production-ready 3D files with perfect stone setting tolerances and shrinkage compensation. Our specialized CAD modeling team ensures every curve, prong, and setting is anatomically precise, creating models trusted by master jewelers worldwide.</p><p>Whether you're a manufacturer or a jewelry retailer, our precision CAD modeling services deliver manufacturing-ready files that meet the highest industry standards. We use industry-leading software like <a href='/programs-we-use#cad-engineering'>MatrixGold</a>, <a href='/programs-we-use#cad-engineering'>Rhino 7</a>, and <a href='/magics'>Materialise Magics</a> to create production-ready geometry with unparalleled engineering accuracy.</p><p><strong>Our Jewelry CAD Design Process:</strong> We create manufacturing-ready 3D files with perfect stone setting tolerances, shrinkage compensation, and structural CAD design that ensures perfect fit and flawless production. Our parametric CAD techniques produce technical CAD structures ready for casting, milling, or any manufacturing process you require.</p><p><strong>Why Choose Our Precision CAD Modeling Services?</strong> Experience the perfect blend of technical precision and manufacturing expertise, specialized in jewelry CAD design. Our CAD specialists deliver production-ready files with perfect stone setting tolerances, ensuring every piece meets the highest quality standards for jewelry manufacturing.</p>",
        image:'/services-item.png',
    },
};
