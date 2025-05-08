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
        title: 'Can I choose my meals?',
        description: '<p>Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</p>',
        is_open: true,
    },
    {
        id: 2,
        title: 'When will I receive my order?',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facilis impedit nam voluptatem. Cum dolorem, dolores maxime modi obcaecati repellendus tempore veritatis. A explicabo in labore minus perferendis sint voluptas!</p>',
        is_open: false,
    },
    {
        id: 3,
        title: 'Can I skip a delivery?',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cumque eveniet nam odio quam ratione reiciendis sed soluta tempore. At, itaque, maxime. Accusantium dicta, eum nostrum nulla pariatur recusandae!</p>',
        is_open: false,
    },
    {
        id: 4,
        title: 'Can I add Extras to my delivery?',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus enim fuga labore laborum quae similique tempore, unde? Alias aliquam asperiores autem, eius facilis laborum, molestiae nam perferendis provident reprehenderit voluptate.</p>',
        is_open: false,
    },
];

const Faq: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(1);
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
            el.style.display = 'block';
            const height = el.scrollHeight;
            gsap.fromTo(
                el,
                {height: 0},
                {
                    height: height,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        el.style.height = 'auto';
                    }
                }
            );
        }
    };

    const collapse = (id: number) => {
        const el = refs.current.get(id);
        if (el) {
            gsap.to(el, {
                height: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    el.style.display = "none";
                },
            });
        }
    };

    useLayoutEffect(() => {
        if (openId !== null) {
            const el = refs.current.get(openId);
            if (el) {
                el.style.display = "block";
                el.style.height = "auto";
            }
        }
    }, []);

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
