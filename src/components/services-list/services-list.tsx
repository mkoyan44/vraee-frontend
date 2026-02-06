import React from 'react';
import styles from "@/assets/styles/client/components/services-list.module.scss";
import Image from "next/image";
import ServicesListItem from "@/components/services-list/services-list-item";

const ServicesList: React.FC = ()=> {
    const items = [
        {
            image: '/services-item.png',
            description: '<p>Get your jewelry ideas converted into stunning digital sculptures in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sculpting design services to give life to your designs that are still sparking in your mind.</p>',
            icon: '<svg width="58" height="41" viewBox="0 0 58 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4867 39.5479L0.019043 0.0151367H56.9553L28.4867 39.5479Z" fill="#0E0E0E"/></svg>',
            title: 'Sculpting',
            link: '/services/sculpting',
        },
        {
            image: '/services-item.png',
            description: '<p>Our expertise in communication design and branding is enhanced by the specifics of working on digital projects. We seamlessly integrate brands into the digital space tofulfill business objectives.</p>',
            icon: '<svg width="58" height="82" viewBox="0 0 58 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49405 41.0682C4.43845 37.7588 1.67657 33.5424 0.557669 28.9522C-0.56123 24.3619 0.0131002 19.6041 2.20803 15.2802C4.40297 10.9563 8.11992 7.26059 12.8889 4.66045C17.6578 2.06031 23.2646 0.672485 29.0001 0.672485C34.7357 0.672485 40.3424 2.06031 45.1114 4.66045C49.8803 7.26059 53.5973 10.9563 55.7922 15.2802C57.9872 19.6041 58.5615 24.3619 57.4426 28.9522C56.3237 33.5424 53.5618 37.7588 49.5062 41.0682L29.0001 24.3364L8.49405 41.0682Z" fill="#0E0E0E"/><path d="M8.49405 40.3676C4.43845 43.677 1.67657 47.8934 0.557669 52.4836C-0.56123 57.0739 0.0131002 61.8317 2.20803 66.1556C4.40297 70.4795 8.11992 74.1752 12.8889 76.7754C17.6578 79.3755 23.2646 80.7633 29.0001 80.7633C34.7357 80.7633 40.3424 79.3755 45.1114 76.7754C49.8803 74.1752 53.5973 70.4795 55.7922 66.1556C57.9872 61.8317 58.5615 57.0739 57.4426 52.4836C56.3237 47.8934 53.5618 43.677 49.5062 40.3676L29.0001 57.1003L8.49405 40.3676Z" fill="#0E0E0E"/></svg>',
            title: 'Modeling',
            link: '/services/modeling',
        },
        {
            image: '/services-item.png',
            description: '<p>At the presale stage, we form key technical requirements and project milestones at each stage of its development, define the technology stack, design the higher-level architecture and outline the technical solution. Depending on the performance requirements, maintainability, planned future changes and scalability of the project, wecan offer both off-the-shelf solutions and custom development.</p><p>Our development approach relies on object-oriented programming and SOLID principles. This helps to achieve high modularity, code reusability and ease of maintenance.</p>',
            icon: '<svg width="58" height="97" viewBox="0 0 58 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 48.2207C45.0151 48.2207 57.998 37.5779 57.998 24.4493C57.998 11.3207 45.0151 0.677856 29 0.677856C12.9848 0.677856 0.00195312 11.3207 0.00195312 24.4493C0.00195312 37.5779 12.9848 48.2207 29 48.2207Z" fill="#0E0E0E"/><path d="M29 95.7636C45.0151 95.7636 57.998 85.1207 57.998 71.9921C57.998 58.8635 45.0151 48.2207 29 48.2207C12.9848 48.2207 0.00195312 58.8635 0.00195312 71.9921C0.00195312 85.1207 12.9848 95.7636 29 95.7636Z" fill="#0E0E0E"/></svg>',
            title: 'Rendering',
            link: '/services/rendering',
        },
        {
            image: '/services-item.png',
            description: '<p>We continue to improve the product according to the client\'s goals. We allocate the team that launched the project, work on time schedules, and at the end of the month provide a report with a decomposition of hours spent.</p>',
            icon: '<svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.72 0.765381L57.4321 24.1358L28.72 47.5054L0.00683594 24.1358L28.72 0.765381Z" fill="#0E0E0E"/></svg>',
            title: 'Animation',
            link: '/services/animation',
        },
        {
            image: '/services-item.png',
            description: '<p>Our expertise in communication design and branding is enhanced by the specifics of working on digital projects. We seamlessly integrate brands into the digital space to fulfill business objectives.</p>',
            icon: '<svg width="58" height="82" viewBox="0 0 58 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49405 41.0684C4.43845 37.759 1.67657 33.5425 0.557669 28.9523C-0.56123 24.3621 0.0131002 19.6042 2.20803 15.2803C4.40297 10.9564 8.11992 7.26071 12.8889 4.66057C17.6578 2.06043 23.2646 0.672607 29.0001 0.672607C34.7357 0.672607 40.3424 2.06043 45.1114 4.66057C49.8803 7.26071 53.5973 10.9564 55.7922 15.2803C57.9872 19.6042 58.5615 24.3621 57.4426 28.9523C56.3237 33.5425 53.5618 37.759 49.5062 41.0684L29.0001 24.3365L8.49405 41.0684Z" fill="#0E0E0E"/><path d="M8.49405 40.3677C4.43845 43.6771 1.67657 47.8935 0.557669 52.4837C-0.56123 57.074 0.0131002 61.8319 2.20803 66.1558C4.40297 70.4796 8.11992 74.1753 12.8889 76.7755C17.6578 79.3756 23.2646 80.7634 29.0001 80.7634C34.7357 80.7634 40.3424 79.3756 45.1114 76.7755C49.8803 74.1753 53.5973 70.4796 55.7922 66.1558C57.9872 61.8319 58.5615 57.074 57.4426 52.4837C56.3237 47.8935 53.5618 43.6771 49.5062 40.3677L29.0001 57.1004L8.49405 40.3677Z" fill="#0E0E0E"/></svg>',
            title: '3D Jewelry Design',
            link: '/services/3d-jewelry-design',
        },
        {
            image: '/services-item.png',
            description: '<p>At the presale stage, we form key technical requirements and project milestones at each stage of its development, define the technology stack, design the higher-level architecture and outline the technical solution. Depending on the performance requirements, maintainability, planned future changes and scalability of the project, we can offer both off-the-shelf solutions and custom development.</p>',
            icon: '<svg width="58" height="97" viewBox="0 0 58 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 48.2208C45.0151 48.2208 57.998 37.578 57.998 24.4494C57.998 11.3208 45.0151 0.677979 29 0.677979C12.9848 0.677979 0.00195312 11.3208 0.00195312 24.4494C0.00195312 37.578 12.9848 48.2208 29 48.2208Z" fill="#0E0E0E"/><path d="M29 95.7638C45.0151 95.7638 57.998 85.121 57.998 71.9924C57.998 58.8638 45.0151 48.2209 29 48.2209C12.9848 48.2209 0.00195312 58.8638 0.00195312 71.9924C0.00195312 85.121 12.9848 95.7638 29 95.7638Z" fill="#0E0E0E"/></svg>',
            title: 'Jewelry CAD Design',
            link: '/services/jewelry-cad-design',
        },
    ];
    return (
        <section className={styles.services_list}>
            <div className="container">
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
