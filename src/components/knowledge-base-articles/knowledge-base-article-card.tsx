import React from 'react';
import styles from "@/assets/styles/client/components/knowledge-base-articles.module.scss";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/icon/icon";

interface KnowledgeBaseArticleCardProps {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishDate: string;
    image: string;
    featured: boolean;
}

const KnowledgeBaseArticleCard: React.FC<KnowledgeBaseArticleCardProps> = ({
    title,
    excerpt,
    category,
    readTime,
    publishDate,
    image,
    featured
}) => {
    const getCategoryColor = (category: string) => {
        const colors = {
            modeling: '#FF6B6B',
            rendering: '#4ECDC4',
            materials: '#45B7D1',
            workflow: '#96CEB4',
            software: '#FFEAA7'
        };
        return colors[category as keyof typeof colors] || '#A8A8A8';
    };

    return (
        <article className={`${styles.article_card} ${featured ? styles.featured : ''}`}>
            <div className={styles.article_image}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={250}
                    className={styles.image}
                />
                <div
                    className={styles.category_badge}
                    style={{ backgroundColor: getCategoryColor(category) }}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                {featured && (
                    <div className={styles.featured_badge}>
                        <Icon icon="star" />
                        <span>Featured</span>
                    </div>
                )}
            </div>

            <div className={styles.article_content}>
                <div className={styles.article_meta}>
                    <div className={styles.meta_item}>
                        <Icon icon="clock" />
                        <span>{readTime}</span>
                    </div>
                    <div className={styles.meta_item}>
                        <Icon icon="calendar" />
                        <span>{publishDate}</span>
                    </div>
                </div>

                <h3 className={styles.article_title}>
                    <Link href={`/knowledge-base/article/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                        {title}
                    </Link>
                </h3>

                <p className={styles.article_excerpt}>
                    {excerpt}
                </p>

                <Link
                    href={`/knowledge-base/article/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    className={styles.read_more}
                >
                    Read Article
                    <Icon icon="arrow-right" />
                </Link>
            </div>
        </article>
    );
};

export default KnowledgeBaseArticleCard;
