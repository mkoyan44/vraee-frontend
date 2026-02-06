import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlenderGalleryCard from '@/components/ui/blender-gallery-card';
import WorkExamples from '@/components/work-examples';

const BlenderPage: React.FC = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link
                    href="/programs-we-use"
                    className="btn-primary"
                    style={{ marginBottom: '1rem', display: 'inline-block' }}
                >
                    ← Back to Programs We Use
                </Link>
            </div>

            {/* Hero Section */}
            <div className={styles.header} style={{
                background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.05) 0%, rgba(var(--color-secondary), 0.05) 100%)',
                padding: '3rem',
                borderRadius: '12px',
                marginBottom: '3rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '120px',
                    height: '120px',
                    opacity: '0.15',
                    zIndex: 0
                }}>
                    <Image
                        src="/software/blender.svg"
                        alt="Blender"
                        width={120}
                        height={120}
                    />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'rgb(var(--color-title))',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Blender for Jewelry Rendering & Animation
                    </h1>
                    <div className="rte" style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgb(var(--color-text))',
                        maxWidth: '600px'
                    }}>
                        <p>We specialize in using Blender for jewelry photorealistic rendering and animation. Our rendering specialists leverage Blender's powerful Cycles engine, advanced material nodes, and professional lighting setups to create stunning jewelry visuals that are indistinguishable from professional photography. Whether it's 4K renders for e-commerce or cinematic animations for marketing, Blender is a cornerstone of our jewelry visualization pipeline.</p>
                    </div>
                </div>
            </div>

            {/* How We Use It Section */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: 'rgb(var(--color-title))',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    How We Use It
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <BlenderGalleryCard
                        emoji="💎"
                        title="Jewelry Photorealistic Rendering"
                        description="Ultra-realistic 4K renders with physically accurate diamond dispersion and metal textures. Our Cycles engine setup creates jewelry images that are indistinguishable from professional photography, perfect for e-commerce and marketing."
                        category="Rendering"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🎨"
                        title="Advanced Material Creation"
                        description="Node-based material workflows for precious metals (gold, silver, platinum), gemstones (diamonds, sapphires, etc.), and jewelry finishes. PBR materials with physically accurate properties for realistic jewelry visualization."
                        category="Materials"
                        categoryColor="rgb(var(--color-secondary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-primary), 0.1) 100%"
                        iconColor="rgba(var(--color-secondary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🎬"
                        title="Jewelry Animation"
                        description="Cinematic jewelry animations including 360° turntable rotations, gemstone sparkle effects, and on-body video presentations. Professional camera movements and dynamic lighting for captivating jewelry showcases."
                        category="Animation"
                        categoryColor="rgb(var(--color-accent))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-accent), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="✨"
                        title="Studio Lighting & Composition"
                        description="Professional studio lighting setups optimized for jewelry photography. Advanced lighting techniques that highlight gemstone sparkle, metal reflections, and intricate details for marketplace-ready images."
                        category="Lighting"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-primary), 0.15) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/contact" className="btn-primary" style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        display: 'inline-block'
                    }}>
                        Get In Touch
                    </Link>
                </div>
            </div>

            {/* Examples of Our Work Section */}
            <WorkExamples />

            {/* File Download Area */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: 'rgb(var(--color-title))',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    Download Resources
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <Card className="p-6">
                        <CardContent className="p-0">
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}>
                                    📁
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Jewelry Rendering Templates
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Pre-configured Blender scene templates with optimized jewelry lighting rigs, camera setups, and render settings specifically designed for jewelry photography and e-commerce visualization.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                size="lg"
                                disabled
                                style={{
                                    border: '1px solid rgb(var(--color-primary))',
                                    color: 'rgb(var(--color-primary))',
                                    fontWeight: '500'
                                }}
                            >
                                Download Templates
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="p-6">
                        <CardContent className="p-0">
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-primary), 0.1) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}>
                                    🎨
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Jewelry Material Library
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Professional jewelry material presets including precious metals (gold, silver, platinum), gemstones (diamonds, sapphires, etc.), and jewelry finishes with physically accurate properties for realistic rendering.
                                </p>
                            </div>
<Button
    variant="outline"
    size="lg"
    className="w-full"
    disabled
    style={{
        border: '1px solid rgb(var(--color-secondary))',
        color: 'rgb(var(--color-secondary))',
        fontWeight: '500'
    }}
>
    Download Materials
</Button>
                        </CardContent>
                    </Card>

                    <Card className="p-6">
                        <CardContent className="p-0">
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, rgba(var(--color-accent), 0.1) 0%, rgba(var(--color-primary), 0.1) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}>
                                    ⚙️
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Jewelry Workflow Scripts
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Custom Python scripts and add-ons for jewelry workflow automation, batch rendering of multiple angles, gemstone sparkle effects, and specialized jewelry rendering tasks.
                                </p>
                            </div>
<Button
    variant="outline"
    size="lg"
    className="w-full"
    disabled
    style={{
        border: '1px solid rgb(var(--color-accent))',
        color: 'rgb(var(--color-accent))',
        fontWeight: '500'
    }}
>
    Download Scripts
</Button>
                        </CardContent>
                    </Card>

                    <Card className="p-6">
                        <CardContent className="p-0">
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}>
                                    📚
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Learning Guides
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Step-by-step tutorials and documentation covering advanced techniques, best practices, and optimization workflows.
                                </p>
                            </div>
<Button
    variant="outline"
    size="lg"
    className="w-full"
    disabled
    style={{
        border: '1px solid rgb(var(--color-primary))',
        color: 'rgb(var(--color-primary))',
        fontWeight: '500'
    }}
>
    Download Guides
</Button>
                        </CardContent>
                    </Card>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{
                        color: 'rgb(var(--color-text))',
                        fontSize: '0.95rem',
                        marginBottom: '1rem'
                    }}>
                        Need custom jewelry rendering resources or have questions about our Blender workflow?
                    </p>
                    <Link href="/contact" className="btn-primary" style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        display: 'inline-block'
                    }}>
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlenderPage;
