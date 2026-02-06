import React from 'react';
import Link from 'next/link';
import styles from "@/assets/styles/client/components/text-with-media.module.scss";
import Image from "next/image";

interface TextWithMediaProps {
    scheme?: string,
    has_background?: boolean,
    serviceSlug?: string,
}

const TextWithMedia: React.FC<TextWithMediaProps> = ({scheme = 'scheme-light-1', has_background = true, serviceSlug }) => {
    // Default content
    let title = "Programs We Use";
    let description = "<p>In our work, we utilize a range of professional programs that ensure high quality and efficiency in completing tasks. Thanks to these tools, we can guarantee precision, convenience, and a high level of project execution.</p>";
    let linkHref = "/programs-we-use";
    let linkLabel = "Learn more";

    // Custom content for modeling/CAD
    if (serviceSlug === 'modeling' || serviceSlug === 'cad-design') {
        title = "Industry-Standard CAD Software";
        description = "<p>We utilize the world's leading jewelry design and engineering software to ensure every piece is manufacturing-ready and visually stunning. Our CAD specialists are certified in MatrixGold, Rhino 7, and Materialise Magics, delivering production-ready geometry with unparalleled engineering accuracy.</p><p>These professional tools enable us to create precise stone setting tolerances, shrinkage compensation, and technical CAD structures that meet the highest industry standards for jewelry manufacturing.</p>";
        linkHref = "/programs-we-use#cad-engineering";
        linkLabel = "Explore Our Technology Stack";
    }

    // Custom content for rendering
    if (serviceSlug === 'rendering') {
        title = "High-End Visualization Software";
        description = "<p>We use industry-leading rendering software like Cinema 4D, After Effects, and Blender to create photorealistic jewelry visuals. Our rendering specialists leverage advanced materials simulation, physically accurate lighting, and professional camera techniques to produce marketplace-ready images.</p>";
        linkHref = "/programs-we-use#high-end-visualization";
        linkLabel = "View Our Rendering Tools";
    }

    // Custom content for animation
    if (serviceSlug === 'animation') {
        title = "Professional Animation Software";
        description = "<p>We use industry-leading animation software like Cinema 4D, After Effects, and Blender to create cinematic jewelry animations. Our animation specialists leverage advanced motion graphics, dynamic lighting, and professional post-production techniques to produce captivating videos that showcase your jewelry.</p>";
        linkHref = "/programs-we-use#high-end-visualization";
        linkLabel = "Explore Our Animation Tools";
    }

    // Custom content for 3d-design
    if (serviceSlug === '3d-design') {
        title = "Digital Sculpting & Design Software";
        description = "<p>Our creative designers use ZBrush and Blender to create organic, lifelike forms that capture the essence of your jewelry vision. These industry-standard tools enable us to push the boundaries of shape exploration, create innovative designs, and deliver stunning visual presentations that showcase your concepts.</p>";
        linkHref = "/programs-we-use#digital-sculpting";
        linkLabel = "Explore Our Design Tools";
    }

    // Custom content for sketching/sculpting
    if (serviceSlug === 'sketching') {
        title = "Digital Sculpting Software";
        description = "<p>Our digital sculptors use ZBrush and Blender to create organic, lifelike forms that capture the essence of your jewelry vision. These industry-standard tools enable us to create detailed 3D models with precise anatomy and flow.</p>";
        linkHref = "/client/programs-we-use";
        linkLabel = "Learn About Our Tools";
    }

    return (
        <section className={`${styles.text_with_media} ${scheme} ${has_background ? 'background' : ''}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>{title}</h2>
                        <div className="rte mb-2" dangerouslySetInnerHTML={{__html: description}} />
                        <Link href={linkHref} className="btn-simple">{linkLabel}</Link>
                    </div>
                    <div className={styles.media}>
                        <Image src={'/text-with-media.png'} width='1121' height='434' alt={''}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TextWithMedia;