import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlenderGalleryCard from '@/components/ui/blender-gallery-card';
import WorkExamples from '@/components/work-examples';

const MagicsPage: React.FC = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link
                    href="/programs-we-use"
                    className="btn-simple"
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
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(var(--color-primary), 0.2) 0%, rgba(var(--color-secondary), 0.2) 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem'
                    }}>
                        ⚙️
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'rgb(var(--color-title))',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Materialise Magics in Our Pipeline
                    </h1>
                    <div className="rte" style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgb(var(--color-text))',
                        maxWidth: '600px'
                    }}>
                        <p>Materialise Magics is our specialized software for 3D printing preparation and manufacturing optimization. It enables us to prepare production-ready geometry, optimize models for casting and 3D printing, and ensure 100% casting success with technical precision for jewelry manufacturing.</p>
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
                        emoji="🏭"
                        title="3D Printing Preparation"
                        description="Optimize STL files for 3D printing with automatic mesh repair, support generation, and build platform optimization for jewelry manufacturing."
                        category="Manufacturing"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🔧"
                        title="Mesh Repair & Optimization"
                        description="Automated detection and repair of non-manifold edges, holes, and surface defects to ensure manufacturing-ready geometry for casting."
                        category="Quality Control"
                        categoryColor="rgb(var(--color-secondary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-primary), 0.1) 100%"
                        iconColor="rgba(var(--color-secondary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="💎"
                        title="Jewelry Casting Optimization"
                        description="Specialized tools for jewelry-specific casting preparation including sprue placement, venting, and shrinkage compensation calculations."
                        category="Casting"
                        categoryColor="rgb(var(--color-accent))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-accent), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="📐"
                        title="Production-Ready Geometry"
                        description="Ensure manufacturing-ready files with proper wall thickness, support structures, and material-specific optimization for successful production."
                        category="Engineering"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-primary), 0.15) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/pricing" className="btn-simple" style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '500'
                    }}>
                        Start Your Manufacturing Project
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
                                    Manufacturing Templates
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Pre-configured Magics project templates with optimized settings for jewelry casting, 3D printing, and manufacturing workflows.
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
                                    🔧
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Casting Workflows
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Step-by-step guides for jewelry casting preparation, sprue placement optimization, and shrinkage compensation techniques.
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
                                Download Workflows
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
                                    Quality Control Scripts
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Automated scripts for mesh validation, wall thickness checking, and manufacturing readiness verification.
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
                                    Manufacturing Guides
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Comprehensive documentation covering 3D printing preparation, casting optimization, and best practices for jewelry manufacturing.
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
                        Need custom manufacturing workflows or have questions about our Magics process?
                    </p>
                    <Link href="/contact" className="btn-simple" style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '500'
                    }}>
                        Contact Our Team
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MagicsPage;

