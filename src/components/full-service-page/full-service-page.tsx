'use client';

import React from 'react';
import Link from 'next/link';
import {
  Target,
  Shield,
  Clock,
  FileCheck,
  Palette,
  Video,
  Sparkles,
  Layers,
  Wrench,
} from 'lucide-react';
import type { FullServiceContent, ValueProp } from '@/lib/service-page-content';
import ServiceCadFaq from '@/components/service-cad-faq/service-cad-faq';
import styles from '@/assets/styles/client/components/service-cad-page.module.scss';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  shield: Shield,
  clock: Clock,
  filecheck: FileCheck,
  palette: Palette,
  video: Video,
  sparkles: Sparkles,
  layers: Layers,
  wrench: Wrench,
};

const VALUE_ICON_COLORS = [
  '#0d9488', // teal
  '#6366f1', // indigo
  '#2563eb', // blue
  '#7c3aed', // violet
  '#059669', // emerald
  '#d97706', // amber
  '#dc2626', // red
  '#0891b2', // cyan
];

function getIcon(icon: string) {
  return ICON_MAP[icon?.toLowerCase()] ?? FileCheck;
}

interface FullServicePageProps {
  content: FullServiceContent;
}

const FullServicePage: React.FC<FullServicePageProps> = ({ content }) => {
  const {
    hero,
    value,
    process: processSection,
    services,
    software,
    faq,
    trust,
    cta,
  } = content;

  return (
    <div className={styles.cad_page}>
      <div className={styles.inner}>
        <Link href="/services" className={styles.back_link}>
          ← Back to Services
        </Link>

        <header className={styles.hero}>
          <div className={styles.hero_strip} aria-hidden />
          <div className={styles.hero_inner}>
            <span className={styles.section_label}>Service</span>
            <h1 className={styles.hero_title}>{hero.title}</h1>
            <p className={styles.hero_subheadline}>{hero.subheadline}</p>
            <p className={styles.hero_desc}>{hero.desc}</p>
            <Link href="/contact" className={styles.hero_cta}>
              {hero.ctaText}
            </Link>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="value-heading">
          <div className={styles.section_heading}>
            <h2 id="value-heading" className={styles.section_title}>
              {value.heading}
            </h2>
            <p className={styles.section_desc}>{value.desc}</p>
          </div>
          <ul className={styles.value_grid}>
            {value.items.map((item: ValueProp, i: number) => {
              const Icon = getIcon(item.icon);
              const iconColor = VALUE_ICON_COLORS[i % VALUE_ICON_COLORS.length];
              return (
                <li key={i} className={styles.value_card}>
                  <div
                    className={styles.value_icon}
                    style={{
                      color: iconColor,
                      backgroundColor: `${iconColor}18`,
                      borderColor: `${iconColor}35`,
                    }}
                  >
                    <Icon className={styles.value_icon_svg} aria-hidden />
                  </div>
                  <h3 className={styles.value_title}>{item.title}</h3>
                  <p className={styles.value_text}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="process-heading">
          <div className={styles.section_heading}>
            <h2 id="process-heading" className={styles.section_title}>
              {processSection.heading}
            </h2>
            <p className={styles.section_desc}>{processSection.desc}</p>
          </div>
          <ol className={styles.process_list}>
            {processSection.steps.map((step, i) => (
              <li key={i} className={styles.process_step}>
                <span className={styles.process_num} aria-hidden />
                <div className={styles.process_content}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="services-heading">
          <div className={styles.section_heading}>
            <h2 id="services-heading" className={styles.section_title}>
              {services.heading}
            </h2>
            <p className={styles.section_desc}>{services.desc}</p>
          </div>
          <ul className={styles.services_list}>
            {services.items.map((item, i) => (
              <li key={i} className={styles.service_item}>
                <h3 className={styles.service_item_title}>{item.title}</h3>
                <p className={styles.service_item_desc}>{item.desc}</p>
                <p className={styles.service_item_specs}>{item.specs}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="software-heading">
          <div className={styles.section_heading}>
            <h2 id="software-heading" className={styles.section_title}>
              {software.heading}
            </h2>
            <p className={styles.section_desc}>{software.desc}</p>
          </div>
          <div className={styles.software_grid}>
            {software.items.map((item, i) => (
              <div key={i} className={styles.software_card}>
                <h3 className={styles.software_name}>{item.name}</h3>
                <p className={styles.software_desc}>{item.desc}</p>
              </div>
            ))}
          </div>
          {software.linkHref && (
            <Link
              href={software.linkHref}
              className={styles.software_link}
            >
              {software.linkText ?? 'View our programs stack →'}
            </Link>
          )}
        </section>

        <ServiceCadFaq
          title={faq.title}
          faqs={faq.items.map((item, i) => ({
            id: i + 1,
            q: item.q,
            a: item.a,
          }))}
        />

        <section className={styles.section} aria-labelledby="trust-heading">
          <div className={styles.section_heading}>
            <h2 id="trust-heading" className={styles.section_title}>
              {trust.heading}
            </h2>
          </div>
          <div className={styles.trust_wrap}>
            <ul className={styles.trust_list}>
              {trust.signals.map((text, i) => (
                <li key={i} className={styles.trust_item}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta_section}>
          <h2 className={styles.cta_heading}>{cta.heading}</h2>
          <p className={styles.cta_sub}>{cta.sub}</p>
          <div className={styles.cta_buttons}>
            <Link href="/contact" className={styles.cta_primary}>
              {cta.primaryText}
            </Link>
            {cta.secondary.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={styles.cta_secondary}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullServicePage;
