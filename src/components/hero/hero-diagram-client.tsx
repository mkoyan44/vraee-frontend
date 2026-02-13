'use client';

import dynamic from 'next/dynamic';
import styles from '@/assets/styles/client/components/hero-diagram.module.scss';

const HeroDiagram = dynamic(() => import('./hero-diagram').then((m) => m.default), {
  ssr: false,
  loading: () => (
    <div className={styles.diagramWrap}>
      <div className={styles.diagramInner} />
    </div>
  ),
});

export default function HeroDiagramClient() {
  return <HeroDiagram />;
}
