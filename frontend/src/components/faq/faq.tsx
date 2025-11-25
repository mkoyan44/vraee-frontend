"use client"
import React, {useRef, useState, useLayoutEffect} from 'react';
import styles from "@/assets/styles/client/components/faq.module.scss";
import gsap from 'gsap';
import Icon from "@/components/icon/icon";

interface FaqItem {
    id: number;
    title: string;
    description: string;
    is_open: boolean;
}

const faqs: FaqItem[] = [
    {
        id: 1,
        title: 'What file formats do you deliver?',
        description: '<p>We deliver production-ready files in all major 3D formats including STL, OBJ, FBX, and GLTF. For jewelry manufacturing, we provide specialized CAD formats compatible with CNC machines, 3D printers, and casting systems. All files include detailed specifications and technical documentation.</p>',
        is_open: true,
    },
    {
        id: 2,
        title: 'How long does a typical jewelry 3D modeling project take?',
        description: '<p>Simple ring or pendant models are completed within 24-48 hours. Complex pieces with intricate settings or multiple gemstones take 3-5 business days. We provide milestone previews and your dedicated CAD specialist keeps you updated throughout the process with real-time progress tracking.</p>',
        is_open: false,
    },
    {
        id: 3,
        title: 'Do you provide custom jewelry design services?',
        description: '<p>Absolutely! Our expert jewelry CAD specialists not only create 3D models from your sketches but also provide creative design consultation. We can develop unique concepts, optimize designs for manufacturing, and suggest improvements. Every project includes professional design advice at no extra cost.</p>',
        is_open: false,
    },
    {
        id: 4,
        title: 'What if I need revisions to my jewelry model?',
        description: '<p>We offer unlimited revisions during the design approval phase. Our collaborative platform allows you to provide detailed feedback directly on the 3D model. Each round of revisions is included in our transparent pricing, and our jewelry experts typically respond within 2 hours.</p>',
        is_open: false,
    },
    {
        id: 5,
        title: 'Do you handle rendering and photorealistic visualization?',
        description: '<p>Yes! We specialize in high-quality e-commerce jewelry photography and photorealistic renderings. Using advanced materials simulation, studio lighting setups, and professional camera angles, we create marketplace-ready images that convert browsers to buyers. Each product comes with 3-8 angle views.</p>',
        is_open: false,
    },
];

const Faq: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const refs = useRef<Map<number, HTMLDivElement | null>>(new Map());

    const toggleFaq = (id: number) => {
        if (openId === id) {
            collapse(id);
            setOpenId(null);
        } else {
            if (openId !== null) collapse(openId);
            expand(id);
            setOpenId(id);
        }
    };

    const expand = (id: number) => {
        const el = refs.current.get(id);
        if (el) {
            // Add active class first
            el.classList.add(styles.active);
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';

            // Then animate
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    const collapse = (id: number) => {
        const el = refs.current.get(id);
        if (el) {
            gsap.to(el, {
                opacity: 0,
                y: -10,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    el.classList.remove(styles.active);
                }
            });
        }
    };

    // No need for initial effect - the component should start with no FAQs open
    // and let users click to expand

    return (
        <section className={styles.faq}>
            <div className="container">
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                <div className={styles.wrapper}>
                    {faqs.map((item) => (
                        <div key={item.id} className={`${styles.item} scheme-light-2 background`}>
                            <h4
                                className={`${styles.item_title} h3 ${openId == item.id ? styles.active : ''}`}
                                onClick={() => toggleFaq(item.id)}
                                style={{cursor: 'pointer'}}
                            >
                                <span>{item.title}</span>
                                <Icon icon="arrow_right"/>
                            </h4>
                            <div
                                ref={(el) => {
                                    refs.current.set(item.id, el)
                                }}
                                className={styles.item_description}
                                dangerouslySetInnerHTML={{__html: item.description}}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
