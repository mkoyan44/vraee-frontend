import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlenderGalleryCard from '@/components/ui/blender-gallery-card';
import WorkExamples from '@/components/work-examples';

const RhinoPage: React.FC = () => {
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
                        src="/software/rhino.svg"
                        alt="Rhino"
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
                        Rhino 7 for Jewelry CAD Modeling
                    </h1>
                    <div className="rte" style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgb(var(--color-text))',
                        maxWidth: '600px'
                    }}>
                        <p>We specialize in using Rhino 7 for jewelry CAD modeling and precision engineering. Rhino serves as our primary NURBS-based modeling solution for creating manufacturing-ready jewelry CAD files. Its mathematical accuracy, plugin ecosystem, and curve-based workflow enable us to create complex jewelry forms with perfect stone setting tolerances, shrinkage compensation, and structural integrity while maintaining the highest standards of technical accuracy and surface quality.</p>
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
                        title="Jewelry NURBS Modeling"
                        description="Precision jewelry surface modeling with mathematical accuracy, complex curves, and smooth surface continuity. Perfect stone setting tolerances and shrinkage compensation for manufacturing-ready jewelry CAD files."
                        category="Modeling"
                        categoryColor="rgb(var(--color-primary))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-secondary), 0.1) 100%"
                        iconColor="rgba(var(--color-primary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="⚙️"
                        title="Jewelry Manufacturing Prep"
                        description="Jewelry CAD data preparation with tolerance analysis, stone setting measurements, and manufacturing process optimization. Production-ready files for casting, milling, and jewelry manufacturing."
                        category="Engineering"
                        categoryColor="rgb(var(--color-secondary))"
                        backgroundPrimary="rgba(var(--color-secondary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-secondary), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="🔧"
                        title="Jewelry Design Development"
                        description="Jewelry design workflows with parametric modeling, part assemblies, and prototype development. Complex jewelry forms with structural integrity and manufacturing considerations."
                        category="Design"
                        categoryColor="rgb(var(--color-accent))"
                        backgroundPrimary="rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-accent), 0.1) 100%"
                        iconColor="rgba(var(--color-accent), 0.2)"
                    />

                    <BlenderGalleryCard
                        emoji="📐"
                        title="Technical Accuracy"
                        description="Mathematical precision for jewelry CAD with perfect tolerances, surface quality, and engineering accuracy. NURBS-based modeling ensures manufacturing-ready jewelry files that meet the highest industry standards."
                        category="Precision"
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
                                    📐
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
                                    Standardized Rhino templates for jewelry CAD with layer setups, stone setting measurements, dimension styles, and project organization standards for consistent jewelry workflows.
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
                                    Jewelry Grasshopper Scripts
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Parametric scripts for automated jewelry modeling, pattern generation, stone setting automation, and complex jewelry geometric operations using visual programming.
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
                                    📐
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
                                    Standardized jewelry components and parts library including prongs, settings, clasps, and jewelry construction elements for modular jewelry design.
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
    Download Components
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
                                    Technical Guides
                                </h3>
                                <p style={{
                                    color: 'rgb(var(--color-text))',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    Comprehensive tutorials covering NURBS modeling, Grasshopper workflows, and advanced surface manipulation techniques.
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
                        Need custom jewelry CAD resources or have questions about our Rhino workflow?
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

export default RhinoPage;
