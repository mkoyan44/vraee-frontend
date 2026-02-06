'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/assets/styles/client/components/hero-diagram.module.scss';
import { HeroDiagramView } from './hero-diagram-view';

export default function HeroDiagram() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return React.createElement(
    motion.div,
    {
      className: styles.diagramWrap,
      'aria-hidden': true,
      initial: false,
      animate: { opacity: 1, scale: 1 },
    },
    React.createElement(
      'div',
      { className: styles.diagramInner },
      React.createElement(HeroDiagramView, {
        hoveredIndex,
        setHoveredIndex,
      })
    )
  );
}
