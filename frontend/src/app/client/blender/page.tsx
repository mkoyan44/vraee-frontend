import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/assets/styles/client/components/programs-used.module.scss';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const BlenderPage: React.FC = () => {
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

            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Image
                        src="/software/blender.svg"
                        alt="Blender logo"
                        width={64}
                        height={64}
                    />
                    <div>
                        <h1>Blender Workflow</h1>
                        <div className={styles.program_category}>3D Modeling & Rendering</div>
                    </div>
                </div>

                <div className="rte">
                    <p>Blender is the cornerstone of our 3D production pipeline. As a powerful, open-source 3D creation suite, it enables us to deliver cost-effective, high-quality 3D visualization and rendering services without compromising on professional results.</p>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                <Card
                    className={styles.program_card}
                    style={{
                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <CardHeader>
                        <h2 style={{ color: 'rgb(var(--color-title))' }}>Why We Choose Blender</h2>
                    </CardHeader>
                    <CardContent>
                        <div style={{ color: 'rgb(var(--color-text))' }}>
                            <ul style={{ paddingLeft: '1.5rem' }}>
                                <li><strong>Cost-Effective:</strong> Free and open-source, eliminating licensing costs</li>
                                <li><strong>Complete Pipeline:</strong> Modeling, sculpting, animation, texturing, and rendering in one application</li>
                                <li><strong>Active Community:</strong> Regular updates and extensive plugin ecosystem</li>
                                <li><strong>Professional Quality:</strong> Industry-standard tools used by major studios</li>
                                <li><strong>Cross-Platform:</strong> Works seamlessly across Windows, macOS, and Linux</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={styles.program_card}
                    style={{
                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <CardHeader>
                        <h2 style={{ color: 'rgb(var(--color-title))' }}>Our Blender Services</h2>
                    </CardHeader>
                    <CardContent>
                        <div style={{ color: 'rgb(var(--color-text))' }}>
                            <h3>3D Modeling & Prototyping</h3>
                            <p>We create detailed 3D models for product visualization, architectural elements, and character designs using Blender's comprehensive modeling toolkit.</p>

                            <h3>Realistic Rendering</h3>
                            <p>Our Cycles rendering engine expertise produces photorealistic results for marketing materials, presentations, and technical documentation.</p>

                            <h3>Animation & Motion Graphics</h3>
                            <p>From simple product rotations to complex animated sequences, we leverage Blender's animation tools for dynamic visual content.</p>

                            <h3>Texture Creation & Materials</h3>
                            <p>We develop custom PBR materials and textures that bring your 3D models to life with realistic surface properties.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    className={styles.program_card}
                    style={{
                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <CardHeader>
                        <h2 style={{ color: 'rgb(var(--color-title))' }}>Technical Specifications</h2>
                    </CardHeader>
                    <CardContent>
                        <div style={{ color: 'rgb(var(--color-text))' }}>
                            <ul style={{ paddingLeft: '1.5rem' }}>
                                <li><strong>Rendering Engine:</strong> Cycles (CPU & GPU rendering)</li>
                                <li><strong>Output Formats:</strong> PNG, JPEG, EXR, MP4, and more</li>
                                <li><strong>Export Compatibility:</strong> STL, OBJ, FBX, glTF, USD</li>
                                <li><strong>Integration:</strong> Python scripting for automation</li>
                                <li><strong>Performance:</strong> Multi-threaded rendering with GPU acceleration</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/contact" className="btn-simple">
                        Discuss Your Blender Project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlenderPage;
