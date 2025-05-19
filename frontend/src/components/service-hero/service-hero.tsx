import React from 'react';
import styles from "@/assets/styles/client/components/service-hero.module.scss";
import Image from "next/image";

interface ServiceHeroProps {
    title: string,
    description?: string,
    image?: string,
}
const ServiceHero: React.FC<ServiceHeroProps> = ({title,description = '',image = ''})=> {
    return (
        <>
        <div className={styles.page_bg}></div>
        <section className={styles.service_hero}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={`h2`}>{title}</h1>
                        { description && <div className={styles.desc} dangerouslySetInnerHTML={{__html: description}} /> }
                    </div>
                    { image &&
                        <div className={styles.image}>
                            <Image src={image} alt={title} width={'1060'} height={'700'} />
                        </div>
                    }
                </div>
            </div>
        </section>
        </>
    );
}

export default ServiceHero;