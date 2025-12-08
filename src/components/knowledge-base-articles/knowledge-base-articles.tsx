"use client"
import React, { useState } from 'react';
import styles from "@/assets/styles/client/components/knowledge-base-articles.module.scss";
import KnowledgeBaseArticleCard from "@/components/knowledge-base-articles/knowledge-base-article-card";
import Icon from "@/components/icon/icon";

const KnowledgeBaseArticles: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Articles', icon: 'grid' },
        { id: 'modeling', label: '3D Modeling', icon: 'cube' },
        { id: 'rendering', label: 'Rendering', icon: 'image' },
        { id: 'materials', label: 'Materials & Textures', icon: 'palette' },
        { id: 'workflow', label: 'Workflow & Tips', icon: 'lightbulb' },
        { id: 'software', label: 'Software Tutorials', icon: 'code' },
    ];

    const articles = [
        {
            id: 1,
            title: "Complete Guide to Jewelry Ring Modeling in Rhino",
            excerpt: "Master the art of creating precise ring models with step-by-step instructions for professional jewelry design.",
            category: "modeling",
            readTime: "12 min read",
            publishDate: "Dec 2, 2025",
            image: "/hero-image.png",
            featured: true
        },
        {
            id: 2,
            title: "Advanced ZBrush Sculpting Techniques for Jewelry",
            excerpt: "Learn advanced sculpting methods to create intricate jewelry details and organic forms.",
            category: "modeling",
            readTime: "15 min read",
            publishDate: "Nov 28, 2025",
            image: "/hero-image.png",
            featured: false
        },
        {
            id: 3,
            title: "Photorealistic Jewelry Rendering: Lighting & Materials",
            excerpt: "Discover professional lighting setups and material creation for stunning jewelry visualizations.",
            category: "rendering",
            readTime: "10 min read",
            publishDate: "Nov 25, 2025",
            image: "/hero-image.png",
            featured: true
        },
        {
            id: 4,
            title: "Creating Realistic Metal Materials in 3D",
            excerpt: "Step-by-step guide to creating physically accurate metal materials for jewelry rendering.",
            category: "materials",
            readTime: "8 min read",
            publishDate: "Nov 22, 2025",
            image: "/hero-image.png",
            featured: false
        },
        {
            id: 5,
            title: "Optimizing Your 3D Jewelry Workflow for Faster Results",
            excerpt: "Time-saving techniques and workflow optimizations for efficient jewelry design and rendering.",
            category: "workflow",
            readTime: "6 min read",
            publishDate: "Nov 20, 2025",
            image: "/hero-image.png",
            featured: false
        },
        {
            id: 6,
            title: "Cinema 4D for Jewelry: Complete Beginner Tutorial",
            excerpt: "Start your journey with Cinema 4D for jewelry visualization with this comprehensive beginner guide.",
            category: "software",
            readTime: "20 min read",
            publishDate: "Nov 18, 2025",
            image: "/hero-image.png",
            featured: false
        },
        {
            id: 7,
            title: "Diamond and Gemstone Material Creation Guide",
            excerpt: "Learn to create realistic diamonds, emeralds, rubies, and other precious gem materials.",
            category: "materials",
            readTime: "14 min read",
            publishDate: "Nov 15, 2025",
            image: "/hero-image.png",
            featured: true
        },
        {
            id: 8,
            title: "Professional Jewelry Photography vs 3D Rendering",
            excerpt: "Understanding when to use photography versus 3D rendering for jewelry presentation.",
            category: "workflow",
            readTime: "7 min read",
            publishDate: "Nov 12, 2025",
            image: "/hero-image.png",
            featured: false
        },
        {
            id: 9,
            title: "Matrix Gold Integration with Rhino for Jewelry CAD",
            excerpt: "Seamless workflow between Rhino and Matrix Gold for professional jewelry manufacturing.",
            category: "software",
            readTime: "11 min read",
            publishDate: "Nov 10, 2025",
            image: "/hero-image.png",
            featured: false
        }
    ];

    const filteredArticles = activeCategory === 'all'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    return (
        <section id="articles" className={styles.knowledge_base_articles}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Expert Articles & Tutorials</h2>
                    <p>Discover in-depth guides, tutorials, and best practices from industry professionals</p>
                </div>

                <div className={styles.categories}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`${styles.category_btn} ${activeCategory === category.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <Icon icon={category.icon} />
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.articles_grid}>
                    {filteredArticles.map((article) => (
                        <KnowledgeBaseArticleCard key={article.id} {...article} />
                    ))}
                </div>

                <div className={styles.load_more}>
                    <button className="btn-secondary">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBaseArticles;
