import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, serviceSlugs } from '@/lib/services';
import {
  getFullServiceContent,
  getFullServiceMeta,
} from '@/lib/service-page-content';
import FullServicePage from '@/components/full-service-page/full-service-page';
import styles from '@/assets/styles/client/components/service-detail.module.scss';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullMeta = getFullServiceMeta(slug);
  if (fullMeta) {
    return {
      title: fullMeta.title,
      description: fullMeta.description,
      alternates: { canonical: `/services/${slug}` },
    };
  }
  const service = services[slug];
  if (!service) return { title: 'Service Not Found' };
  const description =
    service.lead ?? service.description.replace(/<[^>]*>/g, '').slice(0, 160);
  return {
    title: `${service.title} | Jewelry 3D Services`,
    description: description.slice(0, 160),
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const fullContent = getFullServiceContent(slug);

  if (fullContent) {
    return <FullServicePage content={fullContent} />;
  }

  const service = services[slug];
  if (!service) {
    notFound();
  }

  return (
    <article className={styles.service_detail}>
      <div className={styles.inner}>
        <Link href="/services" className={styles.back_link}>
          ← Back to Services
        </Link>

        <header className={styles.hero}>
          <span className={styles.section_label}>Service</span>
          <h1 className={styles.title}>{service.title}</h1>
          {service.lead && (
            <p className={styles.lead}>{service.lead}</p>
          )}
          {service.image && (
            <div className={styles.image_wrap}>
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 64rem"
                priority
              />
            </div>
          )}
        </header>

        <div className={styles.content_card}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </div>

        <div className={styles.cta_block}>
          <Link href="/contact" className={styles.cta_primary}>
            Get a quote
          </Link>
          <Link href="/services" className={styles.cta_secondary}>
            View all services
          </Link>
        </div>
      </div>
    </article>
  );
}
