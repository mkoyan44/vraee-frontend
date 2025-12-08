import React from 'react';
import styles from "@/assets/styles/client/components/text-with-media.module.scss";
import Image from "next/image";
interface TextWithMediaProps {
    scheme?: string,
    has_background?: boolean,
}
const TextWithMedia: React.FC<TextWithMediaProps> = ({scheme = 'scheme-light-1', has_background = true })=> {
    return (
        <section className={`${styles.text_with_media} ${scheme} ${has_background ? 'background' : ''}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Programs We Use</h2>
                        <div className="rte mb-2">
                            <p>In our work, we utilize a range of professional programs that ensure high quality and efficiency in completing tasks.Thanks to these tools, we can guarantee precision, convenience, and a high level of project execution.</p>
                        </div>
                        <a href="#" className="btn-simple">Learn more</a>
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