import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlenderGalleryCard from '@/components/ui/blender-gallery-card';
import WorkExamples from '@/components/work-examples';

const AfterEffectsPage: React.FC = () => {
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
                    opacity: '0.05',
                    zIndex: 0
                }}>
                    <Image
                        src="/software/after-effects.svg"
                        alt="After Effects"
                        width={120}
                        height={120}
                        style={{ filter: 'grayscale(100%)' }}
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
                        After Effects for Jewelry Animation Post-Production
                    </h1>
                    <div className="rte" style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgb(var(--color-text))',
                        maxWidth: '600px'
                    }}>
                        <p>We specialize in using After Effects for jewelry animation post-production and video compositing. Our animation specialists utilize After Effects' extensive plugin ecosystem, native 3D capabilities, and seamless integration with Cinema 4D to create compelling jewelry visual narratives. Whether it's enhancing jewelry animations, adding gemstone sparkle effects, or creating professional jewelry video content, After Effects is essential to our jewelry visualization pipeline.</p>
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
                        title="Jewelry Animation Enhancement"
                        description="Advanced jewelry animation post-production with gemstone sparkle effects, motion graphics, and kinetic typography. Professional jewelry video enhancements with expressions and shape layers."
                        category="Animation"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="✨"
                        title="Jewelry Visual Effects"
                        description="Jewelry compositing with motion tracking, particle systems for gemstone sparkle, and professional visual effects. Advanced techniques for enhancing jewelry animations and presentations."
                        category="Compositing"
                        categoryColor="rgb(var(--color-secondary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-secondary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🎬"
                        title="3D Jewelry Integration"
                        description="Native 3D workspaces with camera tracking, lights, and materials for seamless integration of jewelry animations. Professional 3D compositing for jewelry video content."
                        category="3D"
                        categoryColor="rgb(var(--color-accent))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-accent), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🎨"
                        title="Jewelry Color Grading"
                        description="Professional color correction and LUT development for jewelry videos. Advanced Lumetri Color panel and curves for enhancing jewelry presentation and ensuring accurate color representation."
                        category="Color"
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
                                    Jewelry Animation Templates
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Pre-built After Effects compositions for jewelry animations with optimized render settings, gemstone sparkle effects, and common jewelry animation setups.
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
                                    Jewelry Animation Presets
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Custom animation presets for jewelry including turntable rotations, gemstone sparkle effects, fades, scales, and complex jewelry motion paths for quick application.
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
    Download Presets
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
                                    Jewelry Expression Library
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Advanced JavaScript expressions for automated jewelry animations, gemstone sparkle effects, responsive jewelry layouts, and dynamic jewelry video effects.
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
    Download Expressions
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
                                    Comprehensive tutorials covering advanced techniques, plugin workflows, and optimization strategies.
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
                        Need custom jewelry animation resources or have questions about our After Effects workflow?
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

export default AfterEffectsPage;
