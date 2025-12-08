"use client"
import React,{useState} from 'react';
import styles from "@/assets/styles/client/components/services-list.module.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icon/icon";
import ProjectCreationModal from "@/components/modal/project-creation-modal";

interface ServicesListItemProps {
    image?: string,
    description?: string | TrustedHTML,
    icon?: string | TrustedHTML,
    title: string,
    link: string,
    price?: string,
    duration?: string,
    serviceType?: string,
    serviceDetail?: string,
}
const ServicesListItem: React.FC<ServicesListItemProps> = ({icon,image,title,description,link,price,duration,serviceType,serviceDetail})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderService = () => {
        setIsModalOpen(true);
    };

    // Map service titles to icons
    const getServiceIcon = (title: string) => {
        if (title.toLowerCase().includes('sculpting')) return 'sculpting';
        if (title.toLowerCase().includes('modeling')) return 'cube';
        if (title.toLowerCase().includes('rendering')) return 'paintbrush';
        if (title.toLowerCase().includes('animation')) return 'animation';
        if (title.toLowerCase().includes('design') && title.toLowerCase().includes('jewelry')) return 'design';
        if (title.toLowerCase().includes('cad')) return 'cad';
        return 'cube'; // default
    };

    // Get color for service type
    const getServiceColor = (title: string) => {
        if (title.toLowerCase().includes('sculpting')) return '#FF6B6B';
        if (title.toLowerCase().includes('modeling')) return '#4ECDC4';
        if (title.toLowerCase().includes('rendering')) return '#45B7D1';
        if (title.toLowerCase().includes('animation')) return '#96CEB4';
        if (title.toLowerCase().includes('design') && title.toLowerCase().includes('jewelry')) return '#FFEAA7';
        if (title.toLowerCase().includes('cad')) return '#DDA0DD';
        return '#8198F8'; // default
    };

    return (
        <>
            <article className={styles.service_card}>
                <div className={styles.card_header}>
                    <div className={styles.service_icon} style={{ backgroundColor: getServiceColor(title) }}>
                        <Icon icon={getServiceIcon(title)} fill="white" />
                    </div>
                    <div className={styles.service_info}>
                        <h3 className={styles.service_title}>{title}</h3>
                        <div className={styles.service_meta}>
                            {price && <span className={styles.price}>{price}</span>}
                            {duration && <span className={styles.duration}>{duration}</span>}
                        </div>
                    </div>
                </div>

                <div className={styles.card_content}>
                    <p className={styles.service_description}>
                        {description && typeof description === 'string'
                            ? description.replace(/<[^>]*>/g, '').substring(0, 120) + '...'
                            : 'Professional 3D visualization service tailored to your needs.'
                        }
                    </p>
                </div>

                <div className={styles.card_actions}>
                    <Link href={link} className="btn-simple">
                        Learn More
                    </Link>
                    <button onClick={handleOrderService} className="btn-primary">
                        Order Service
                    </button>
                </div>
            </article>

            <ProjectCreationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preselectedService={{
                    serviceType: serviceType || '',
                    serviceDetail: serviceDetail || ''
                }}
            />
        </>
    );
}

export default ServicesListItem;
