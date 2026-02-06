import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlenderGalleryCard from '@/components/ui/blender-gallery-card';
import WorkExamples from '@/components/work-examples';

const MatrixPage: React.FC = () => {
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
                        src="/software/matrix.svg"
                        alt="Matrix"
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
                        MatrixGold for Jewelry CAD Design
                    </h1>
                    <div className="rte" style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgb(var(--color-text))',
                        maxWidth: '600px'
                    }}>
                        <p>We specialize in using MatrixGold for jewelry CAD design and technical modeling. MatrixGold is the industry-leading jewelry-specific CAD software that enables us to create manufacturing-ready jewelry files with perfect stone setting tolerances, shrinkage compensation, and structural integrity. Our CAD specialists leverage MatrixGold's specialized jewelry tools, parametric modeling, and production-ready workflows to deliver jewelry CAD files that meet the highest industry standards.</p>
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
                        title="Jewelry Stone Setting"
                        description="Specialized jewelry stone setting tools with perfect tolerances, automatic prong generation, and precision gemstone placement. MatrixGold's industry-leading stone setting capabilities ensure manufacturing-ready jewelry CAD files."
                        category="Stone Setting"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="⚙️"
                        title="Jewelry Manufacturing Tools"
                        description="Production-ready jewelry CAD tools with shrinkage compensation, structural integrity checks, and manufacturing optimization. Specialized jewelry workflows for casting, milling, and jewelry production."
                        category="Manufacturing"
                        categoryColor="rgb(var(--color-secondary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-secondary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="📐"
                        title="Jewelry Parametric Modeling"
                        description="Parametric jewelry modeling with specialized jewelry tools, pattern generation, and automated jewelry design workflows. MatrixGold's jewelry-specific features enable rapid jewelry design development."
                        category="Modeling"
                        categoryColor="rgb(var(--color-accent))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-accent), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="✨"
                        title="Production-Ready Files"
                        description="Manufacturing-ready jewelry CAD files with perfect tolerances, technical accuracy, and industry-standard formats. MatrixGold ensures every jewelry piece meets the highest quality standards for jewelry manufacturing."
                        category="Quality"
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
                                    📋
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Jewelry CAD Templates
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Pre-configured MatrixGold project structures for jewelry CAD with standardized jewelry workflows, stone setting templates, and manufacturing-ready file formats.
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
                                    Jewelry Automation Scripts
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Custom MatrixGold scripts for jewelry batch processing, stone setting automation, file management, and automated jewelry quality checks to streamline jewelry production workflows.
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
                                    background: 'linear-gradient(135deg, rgba(var(--color-accent), 0.1) 0%, rgba(var(--color-primary), 0.1) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem'
                                }}>
                                    📊
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: 'rgb(var(--color-title))',
                                    marginBottom: '0.5rem'
                                }}>
                                    Jewelry Component Library
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Standardized jewelry components and parts library for MatrixGold including prongs, settings, clasps, and jewelry construction elements for modular jewelry design.
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
    Download Widgets
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
                                    User Manuals
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Comprehensive documentation covering Matrix workflows, best practices, and advanced feature usage for team training.
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
    Download Manuals
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
                        Need custom jewelry CAD resources or have questions about our MatrixGold workflow?
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

export default MatrixPage;
