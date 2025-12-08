'use client';

import React from 'react';

interface BlenderGalleryCardProps {
    emoji: string;
    title: string;
    description: string;
    category: string;
    categoryColor: string;
    backgroundPrimary: string;
    iconColor: string;
}

const BlenderGalleryCard: React.FC<BlenderGalleryCardProps> = ({
    emoji,
    title,
    description,
    category,
    categoryColor,
    backgroundPrimary,
    iconColor
}) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                border: '1px solid rgb(var(--color-border))',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '300px',
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = 'rgb(var(--color-primary))';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgb(var(--color-border))';
            }}
        >
            <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${backgroundPrimary})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: iconColor,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                }}>
                    {emoji}
                </div>
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: categoryColor,
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                }}>
                    {category}
                </div>
            </div>
            <div style={{ padding: '1.5rem', flex: 1 }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'rgb(var(--color-title))',
                    marginBottom: '0.75rem'
                }}>
                    {title}
                </h3>
                <p style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: 'rgb(var(--color-text))',
                    margin: 0
                }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlenderGalleryCard;
