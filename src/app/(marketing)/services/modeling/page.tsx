import React from 'react';
import type { Metadata } from 'next';
import { getFullServiceContent, getFullServiceMeta } from '@/lib/service-page-content';
import FullServicePage from '@/components/full-service-page/full-service-page';

export async function generateMetadata(): Promise<Metadata> {
  const meta = getFullServiceMeta('modeling');
  if (!meta) return { title: 'Precision 3D CAD Modeling' };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: '/services/modeling' },
  };
}

export default function PrecisionCADModelingPage() {
  const content = getFullServiceContent('modeling');
  if (!content) return null;
  return <FullServicePage content={content} />;
}
