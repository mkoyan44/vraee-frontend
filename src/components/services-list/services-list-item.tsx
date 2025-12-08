"use client"
import React,{useState} from 'react';
import styles from "@/assets/styles/client/components/services-list.module.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icon/icon";

interface ServicesListItemProps {
    image?: string,
    description?: string | TrustedHTML,
    icon?: string | TrustedHTML,
    title: string,
    link: string,
}
const ServicesListItem: React.FC<ServicesListItemProps> = ({icon,image,title,description,link})=> {
    const [active, setActive] = useState(false);
    return (
        <div className={`${styles.item} ${active ? styles.active : ''}`}>
            {icon && <div className={styles.icon} dangerouslySetInnerHTML={{__html: icon}}/>}
            {image &&
            <div className={styles.image_wrapper}>
                <Image className={styles.image} src={image} alt={''} width={'482'} height={'482'} />
            </div>
            }
            <div className={styles.content}>
                <h3 className="h5">{title}</h3>
                {description && <div className="rte" dangerouslySetInnerHTML={{__html: description}}/>}
                <Link href={link} className="btn-simple">Learn more</Link>
            </div>
            <button className={`${styles.btn} scheme-light`} onClick={function (){
                setActive(!active)
            }}>
                <span className={styles.btn_icon}>
                    <Icon icon={'plus'}/>
                </span>
            </button>
        </div>
    );
}

export default ServicesListItem;