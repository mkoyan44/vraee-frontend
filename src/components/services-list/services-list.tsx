import React from 'react';
import styles from "@/assets/styles/client/components/services-list.module.scss";
import Image from "next/image";
import ServicesListItem from "@/components/services-list/services-list-item";

const ServicesList: React.FC = ()=> {
    const items = [
        {
            image: '/services-item.png',
            description: '<p>Transform your jewelry concepts into stunning digital sculptures with our expert 3D sculpting services. Our skilled artists bring your ideas to life using industry-leading software like ZBrush, creating intricate, production-ready models that capture every detail of your vision.</p><ul><li>Concept development from sketches or references</li><li>High-detail sculpting with realistic textures</li><li>Multiple iterations and revisions included</li><li>Compatible with all major 3D printing services</li></ul>',
            icon: '<svg width="58" height="41" viewBox="0 0 58 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4867 39.5479L0.019043 0.0151367H56.9553L28.4867 39.5479Z" fill="#0E0E0E"/></svg>',
            title: '3D Sculpting',
            link: '/services/sculpting',
            price: 'From $299',
            duration: '3-7 days',
            serviceType: '3D CAD Modeling',
            serviceDetail: 'Modeling from Scratch (Sketch/Reference)'
        },
        {
            image: '/services-item.png',
            description: '<p>Professional 3D modeling services for jewelry and product visualization. We create precise, technical models optimized for rendering, manufacturing, or e-commerce presentation using Rhino, Matrix, and Cinema 4D.</p><ul><li>CAD-accurate technical modeling</li><li>Topology optimization for clean geometry</li><li>UV mapping and texture preparation</li><li>Multi-format export (OBJ, STL, FBX, etc.)</li></ul>',
            icon: '<svg width="58" height="82" viewBox="0 0 58 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49405 41.0682C4.43845 37.7588 1.67657 33.5424 0.557669 28.9522C-0.56123 24.3619 0.0131002 19.6041 2.20803 15.2802C4.40297 10.9563 8.11992 7.26059 12.8889 4.66045C17.6578 2.06031 23.2646 0.672485 29.0001 0.672485C34.7357 0.672485 40.3424 2.06031 45.1114 4.66045C49.8803 7.26059 53.5973 10.9563 55.7922 15.2802C57.9872 19.6041 58.5615 24.3619 57.4426 28.9522C56.3237 33.5424 53.5618 37.7588 49.5062 41.0682L29.0001 24.3364L8.49405 41.0682Z" fill="#0E0E0E"/><path d="M8.49405 40.3676C4.43845 43.677 1.67657 47.8934 0.557669 52.4836C-0.56123 57.0739 0.0131002 61.8317 2.20803 66.1556C4.40297 70.4795 8.11992 74.1752 12.8889 76.7754C17.6578 79.3755 23.2646 80.7633 29.0001 80.7633C34.7357 80.7633 40.3424 79.3755 45.1114 76.7754C49.8803 74.1752 53.5973 70.4795 55.7922 66.1556C57.9872 61.8317 58.5615 57.0739 57.4426 52.4836C56.3237 47.8934 53.5618 43.677 49.5062 40.3676L29.0001 57.1003L8.49405 40.3676Z" fill="#0E0E0E"/></svg>',
            title: '3D Modeling',
            link: '/services/modeling',
            price: 'From $199',
            duration: '2-5 days',
            serviceType: '3D CAD Modeling',
            serviceDetail: 'CAD Correction/Optimization'
        },
        {
            image: '/services-item.png',
            description: '<p>Photorealistic rendering services that bring your 3D models to life. Using advanced rendering engines and professional lighting setups, we create stunning visualizations perfect for marketing, presentations, and e-commerce.</p><ul><li>Photorealistic material and lighting setup</li><li>Multiple camera angles and compositions</li><li>High-resolution output (up to 8K)</li><li>Post-processing and color correction</li></ul>',
            icon: '<svg width="58" height="97" viewBox="0 0 58 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 48.2207C45.0151 48.2207 57.998 37.5779 57.998 24.4493C57.998 11.3207 45.0151 0.677856 29 0.677856C12.9848 0.677856 0.00195312 11.3207 0.00195312 24.4493C0.00195312 37.5779 12.9848 48.2207 29 48.2207Z" fill="#0E0E0E"/><path d="M29 95.7636C45.0151 95.7636 57.998 85.1207 57.998 71.9921C57.998 58.8635 45.0151 48.2207 29 48.2207C12.9848 48.2207 0.00195312 58.8635 0.00195312 71.9921C0.00195312 85.1207 12.9848 95.7636 29 95.7636Z" fill="#0E0E0E"/></svg>',
            title: '3D Rendering',
            link: '/services/rendering',
            price: 'From $149',
            duration: '1-3 days',
            serviceType: '3D Rendering & Animation',
            serviceDetail: 'Still Shots (White Background, 3 Views)'
        },
        {
            image: '/services-item.png',
            description: '<p>Dynamic 3D animations that showcase your jewelry from every angle. Perfect for product videos, social media content, and marketing campaigns. We create smooth turntable animations and custom motion graphics.</p><ul><li>360° turntable animations</li><li>Custom camera movements and transitions</li><li>Product showcase videos</li><li>Social media optimized formats</li></ul>',
            icon: '<svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.72 0.765381L57.4321 24.1358L28.72 47.5054L0.00683594 24.1358L28.72 0.765381Z" fill="#0E0E0E"/></svg>',
            title: '3D Animation',
            link: '/services/animation',
            price: 'From $399',
            duration: '5-10 days',
            serviceType: '3D Rendering & Animation',
            serviceDetail: '360° Turntable Animation (10-15 sec)'
        },
        {
            image: '/services-item.png',
            description: '<p>Complete jewelry design services from concept to completion. Our design team creates original pieces that combine aesthetics, functionality, and market trends. Perfect for new collections or custom pieces.</p><ul><li>Original concept development</li><li>Design refinement and prototyping</li><li>Technical specifications for manufacturing</li><li>Brand style guide integration</li></ul>',
            icon: '<svg width="58" height="82" viewBox="0 0 58 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49405 41.0684C4.43845 37.759 1.67657 33.5425 0.557669 28.9523C-0.56123 24.3621 0.0131002 19.6042 2.20803 15.2803C4.40297 10.9564 8.11992 7.26071 12.8889 4.66057C17.6578 2.06043 23.2646 0.672607 29.0001 0.672607C34.7357 0.672607 40.3424 2.06043 45.1114 4.66057C49.8803 7.26071 53.5973 10.9564 55.7922 15.2803C57.9872 19.6042 58.5615 24.3621 57.4426 28.9523C56.3237 33.5425 53.5618 37.759 49.5062 41.0684L29.0001 24.3365L8.49405 41.0684Z" fill="#0E0E0E"/><path d="M8.49405 40.3677C4.43845 43.6771 1.67657 47.8935 0.557669 52.4837C-0.56123 57.074 0.0131002 61.8319 2.20803 66.1558C4.40297 70.4796 8.11992 74.1753 12.8889 76.7755C17.6578 79.3756 23.2646 80.7634 29.0001 80.7634C34.7357 80.7634 40.3424 79.3756 45.1114 76.7755C49.8803 74.1753 53.5973 70.4796 55.7922 66.1558C57.9872 61.8319 58.5615 57.074 57.4426 52.4837C56.3237 47.8935 53.5618 43.6771 49.5062 40.3677L29.0001 57.1004L8.49405 40.3677Z" fill="#0E0E0E"/></svg>',
            title: 'Jewelry Design',
            link: '/services/jewelry-design',
            price: 'From $599',
            duration: '7-14 days',
            serviceType: '3D CAD Modeling',
            serviceDetail: 'Modeling from Scratch (Sketch/Reference)'
        },
        {
            image: '/services-item.png',
            description: '<p>Precision CAD design services for jewelry manufacturing. We create detailed technical drawings, specifications, and manufacturing-ready files that ensure perfect production results.</p><ul><li>Detailed technical drawings</li><li>Manufacturing specifications</li><li>Material and weight calculations</li><li>Quality control documentation</li></ul>',
            icon: '<svg width="58" height="97" viewBox="0 0 58 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 48.2208C45.0151 48.2208 57.998 37.578 57.998 24.4494C57.998 11.3208 45.0151 0.677979 29 0.677979C12.9848 0.677979 0.00195312 11.3208 0.00195312 24.4494C0.00195312 37.578 12.9848 48.2208 29 48.2208Z" fill="#0E0E0E"/><path d="M29 95.7638C45.0151 95.7638 57.998 85.121 57.998 71.9924C57.998 58.8638 45.0151 48.2209 29 48.2209C12.9848 48.2209 0.00195312 58.8638 0.00195312 71.9924C0.00195312 85.121 12.9848 95.7638 29 95.7638Z" fill="#0E0E0E"/></svg>',
            title: 'CAD Design',
            link: '/services/cad-design',
            price: 'From $249',
            duration: '3-7 days',
            serviceType: '3D CAD Modeling',
            serviceDetail: 'CAD Correction/Optimization'
        },
    ];
    return (
        <section id="services-list" className={styles.services_list}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Our Comprehensive 3D Services</h2>
                    <p>From concept to creation, we offer end-to-end 3D services tailored to bring your jewelry designs to life with precision and artistry.</p>
                </div>
                <div className={styles.wrapper}>
                    {
                        items.map((item,index)=>{
                            return (
                                <ServicesListItem {...item} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ServicesList;
