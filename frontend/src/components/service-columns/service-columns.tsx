import React from 'react';
import styles from "@/assets/styles/client/components/service-columns.module.scss";

const ServiceColumns: React.FC = ()=> {
    const items = [
        {
            title: 'What We Need from You',
            description: "<p>Get your jewelry ideas converted into stunning digital sculptures in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sculpting design services to give life to your designs that are still sparking in your mind.</p><p>Whether you are a manufacturer or a jewelry retailer, Sarkissian Luxury Studio is your jewelry design studio with the best resources and the most dedicated team of professionals to help you get a fresh jewelry line – starting with sculpting. You just need to express your thoughts on a piece of paper, and leave the rest to us. We’ve some of the best <a href='#'>New York jewelry</a> designers who can create accurate, easy to understand digital sculptures in just 24 hours. </p>",
        },
        {
            title: 'Why Us for Jewelry Digital Sculpting',
            description: "<p>Whether you are a jewelry retailer or a big brand, when you want to introduce a creative line of jewelry, digital sculpting is the first step. It is a way of giving a new life to ideas in your mind. In the beginning, you'll have a rough idea of what your future jewelry will look like. Sculpting is the process of converting those raw ideas into stunning 3D digital sculptures. </p><p>Our team of professionals digitally recreates any idea or concept in the shortest time with the desirable superb results. We not only quickly convert your visions into digital sculptures but also let you express your creative thoughts or even tiny ideas. After understanding your requirements, our designers combine your imaginative input with their knowledge to create a work of art.</p><p>And we do it within 24-hours! </p><p>In addition to quick sculpting, we ensure quality services you can be confident in to help make your dreams, and your clients' dreams, a reality. So, save your time and accelerate your jewelry-making process with professional, reliable jewelry digital sculpting services.  </p>",
        },
    ]
    return (
        <section className={styles.service_columns}>
            <div className="container">
                <div className={styles.wrapper}>
                    {
                        items.map((item,index)=>{
                            return (
                                <div key={index} className={`${styles.item} scheme-light background`}>
                                    <h3 className={`${styles.title} h4`}>{item.title}</h3>
                                    {item.description && <div className={`rte`} dangerouslySetInnerHTML={{__html: item.description }} />}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-right mt-8">
                    <button className={'btn-primary'}>Start A Project</button>
                </div>
            </div>
        </section>
    );
}

export default ServiceColumns;
