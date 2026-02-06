"use client"
import React, { useEffect } from 'react';
import {useBreakpoint} from "@/hooks/useBreakpoint";
import {useHasMounted} from '@/hooks/useHasMounted';
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import styles from "@/assets/styles/client/components/media-grid.module.scss";
import { Fancybox } from "@fancyapps/ui";
import Icon from "@/components/icon/icon";
const MediaGrid: React.FC = () => {
    const media = [
        {
            id: 1,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/1.mp4',
            flex: 50,
            flex_mobile: 100,
        },
        {
            id: 2,
            type: 'image',
            image: '/portfolio/2.png',
            flex: 25,
            flex_mobile: 50,
        },
        {
            id: 3,
            type: 'image',
            image: '/portfolio/3.png',
            flex: 25,
            flex_mobile: 50,
        },
        {
            id: 4,
            type: 'image',
            image: '/portfolio/4.png',
            flex: 50,
            flex_mobile: 100,
        },
        {
            id: 5,
            type: 'video',
            image: '/portfolio/5.png',
            video: '/portfolio/1.mp4',
            flex: 50,
            flex_mobile: 100,
        },
    ];

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);

    const gap = 1;
    const { isTablet} = useBreakpoint();
    const hasMounted = useHasMounted();
    return (
        <section className={styles.media_grid}>
            <div className="container">
                <div className={styles.wrapper} style={{gap: `${gap}rem`}}>
                    {
                        media.map(item=>{
                            let flex = isTablet && hasMounted ? item.flex_mobile : item.flex;
                            let space = gap - gap * flex / 100;
                            return (
                                <div key={item.id} className={`${styles.grid_item}`} style={{flex: `0 0 calc(${flex}% - ${space}rem)`}}>
                                    {item.type === 'image' ? (
                                        <a href={item.image} data-fancybox="gallery" className={styles.item_wrapper} aria-label={`View image ${item.id} in gallery`}>
                                            <Image
                                                src={item.image}
                                                alt={`Jewelry portfolio image ${item.id}`}
                                                width={400}
                                                height={300}
                                            />
                                        </a>
                                    ) : (
                                        <>
                                        <a
                                            href={item.video}
                                            data-fancybox="gallery"
                                            className={styles.item_wrapper}
                                            aria-label={`View video ${item.id} in gallery`}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={`Video thumbnail ${item.id}`}
                                                width={400}
                                                height={300}
                                            />
                                        </a>
                                            <a href={item.video} className={`play_button`} aria-label={`Play video ${item.id}`}>
                                                <Icon icon={'play'} />
                                            </a>
                                        </>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default MediaGrid;