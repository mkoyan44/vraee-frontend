'use client';

import React from 'react';
import {
  Activity,
  LayoutDashboard,
  PenTool,
  Box,
  Image as ImageIcon,
  Play,
  FileText,
} from 'lucide-react';
import styles from '@/assets/styles/client/components/hero-diagram.module.scss';

const COLORS = {
  glassFill: 'rgba(255, 255, 255, 0.94)',
  glassBorder: 'rgba(180, 174, 200, 0.4)',
  glassBorderHover: 'rgba(99, 102, 241, 0.5)',
  centerFill: 'rgba(255, 255, 255, 0.98)',
  centerBorder: 'rgba(140, 132, 180, 0.45)',
  text: '#1A1625',
  textMuted: '#5C5870',
  icon: '#5C5870',
  iconStrong: '#4A4656',
} as const;

// Refined icon palette (cohesive violet → indigo → teal)
const ICON_COLORS = [
  '#6D28D9', // violet
  '#7C3AED', // purple
  '#6366F1', // indigo
  '#4F46E5', // blue-indigo
  '#0EA5E9', // sky
  '#0891B2', // cyan
  '#0D9488', // teal
  '#059669', // emerald
  '#047857', // green
];

const NODE_BOX = { w: 24, h: 30, iconSize: 12, iconCenterY: -3, labelY: 8, subY: 12 };

// Vraee-App center: app URL (set NEXT_PUBLIC_APP_URL e.g. http://localhost:3001) or /login
const VRAEE_APP_HREF = process.env.NEXT_PUBLIC_APP_URL || '/login';

const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 38;
const STEP = 360 / 7;

type NodeItem = {
  label: string;
  sub: string;
  icon: React.ComponentType<{ stroke?: string; strokeWidth?: number; size?: number }>;
  angle: number;
  isService: boolean;
  href: string;
};

const ALL_NODES: NodeItem[] = [
  { label: 'Live Tracking', sub: 'Status updates', icon: Activity, angle: -90, isService: false, href: '/how-it-works' },
  { label: 'Sculpting', sub: 'Digital sculpting', icon: PenTool, angle: -90 + STEP, isService: true, href: '/services/sculpting' },
  { label: 'Modeling', sub: '3D CAD modeling', icon: Box, angle: -90 + STEP * 2, isService: true, href: '/services/modeling' },
  { label: 'Rendering', sub: 'E-commerce visuals', icon: ImageIcon, angle: -90 + STEP * 3, isService: true, href: '/services/rendering' },
  { label: 'Animation', sub: 'Motion & video', icon: Play, angle: -90 + STEP * 4, isService: true, href: '/services/animation' },
  { label: 'Dashboard', sub: 'Analytics', icon: LayoutDashboard, angle: -90 + STEP * 5, isService: false, href: '/services' },
  { label: 'CAD Design', sub: 'Engineering CAD', icon: FileText, angle: -90 + STEP * 6, isService: true, href: '/services/cad-design' },
];

function getPosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER_X + RADIUS * Math.cos(rad),
    y: CENTER_Y + RADIUS * Math.sin(rad),
  };
}


interface HeroDiagramViewProps {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export function HeroDiagramView({ hoveredIndex, setHoveredIndex }: HeroDiagramViewProps) {
  const defs = React.createElement(
    'defs',
    null,
    React.createElement('linearGradient', { id: 'cardFill', x1: '0%', y1: '0%', x2: '0%', y2: '100%' }, React.createElement('stop', { offset: '0%', stopColor: 'rgba(255,255,255,0.98)' }), React.createElement('stop', { offset: '100%', stopColor: 'rgba(250,249,253,0.92)' })),
    React.createElement('linearGradient', { id: 'centerCardFill', x1: '0%', y1: '0%', x2: '0%', y2: '100%' }, React.createElement('stop', { offset: '0%', stopColor: 'rgba(255,255,255,1)' }), React.createElement('stop', { offset: '100%', stopColor: 'rgba(252,251,254,0.98)' })),
    React.createElement('linearGradient', { id: 'centerTitleGrad', x1: '0%', y1: '0%', x2: '100%', y2: '0%' }, React.createElement('stop', { offset: '0%', stopColor: '#4C3F6B' }), React.createElement('stop', { offset: '100%', stopColor: '#6366F1' })),
    React.createElement('radialGradient', { id: 'hubGlow', cx: '50%', cy: '50%', r: '50%' }, React.createElement('stop', { offset: '0%', stopColor: 'rgba(99,102,241,0.08)' }), React.createElement('stop', { offset: '70%', stopColor: 'rgba(99,102,241,0.03)' }), React.createElement('stop', { offset: '100%', stopColor: 'rgba(99,102,241,0)' })),
    React.createElement('filter', {
      id: 'controlCenterShadow',
      x: '-50%',
      y: '-50%',
      width: '200%',
      height: '200%',
    }, React.createElement('feDropShadow', {
      dx: '0',
      dy: '2',
      stdDeviation: '2',
      floodColor: '#6366F1',
      floodOpacity: '0.08',
    })),
    React.createElement('filter', {
      id: 'controlCenterGlow',
      x: '-50%',
      y: '-50%',
      width: '200%',
      height: '200%',
    },     React.createElement('feGaussianBlur', { stdDeviation: '0.5', result: 'blur' }), React.createElement('feMerge', null, React.createElement('feMergeNode', { in: 'blur' }), React.createElement('feMergeNode', { in: 'SourceGraphic' })))
  );

  const linkBeams = ALL_NODES.map((node, i) => {
    const pos = getPosition(node.angle);
    const dx = pos.x - CENTER_X;
    const dy = pos.y - CENTER_Y;
    const endX = CENTER_X + dx * 0.42;
    const endY = CENTER_Y + dy * 0.42;
    return React.createElement('line', {
      key: `beam-${i}`,
      x1: CENTER_X,
      y1: CENTER_Y,
      x2: endX,
      y2: endY,
      stroke: 'rgba(99,102,241,0.28)',
      strokeWidth: 0.3,
      strokeLinecap: 'round',
    });
  });

  const centerGroup = React.createElement(
    'g',
    { className: styles.center },
    React.createElement('ellipse', { cx: CENTER_X, cy: CENTER_Y, rx: 28, ry: 24, fill: 'url(#hubGlow)' }),
    ...linkBeams,
    React.createElement(
      'a',
      {
        href: VRAEE_APP_HREF,
        className: styles.centerLink,
        'aria-label': 'Open Vraee App',
        ...(VRAEE_APP_HREF.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      },
      React.createElement('rect', {
      x: CENTER_X - 18,
      y: CENTER_Y - 14,
      width: 36,
      height: 28,
      rx: 10,
      fill: 'url(#centerCardFill)',
      stroke: COLORS.centerBorder,
      strokeWidth: 0.45,
      filter: 'url(#controlCenterShadow)',
      className: styles.centerRect,
    }),
      React.createElement('line', { x1: CENTER_X - 10, y1: CENTER_Y - 7, x2: CENTER_X + 10, y2: CENTER_Y - 7, stroke: 'url(#centerTitleGrad)', strokeWidth: 0.5, strokeLinecap: 'round' }),
      React.createElement('text', { x: CENTER_X, y: CENTER_Y + 2.2, textAnchor: 'middle', fill: 'url(#centerTitleGrad)', fontSize: 5.2, fontWeight: 700, className: styles.centerTitle }, React.createElement('tspan', { fontWeight: 700 }, 'Vraee'), React.createElement('tspan', { fontWeight: 600, opacity: 0.9 }, '-App')),
      React.createElement('text', { x: CENTER_X, y: CENTER_Y + 6.8, textAnchor: 'middle', fill: COLORS.textMuted, fontSize: 2.2, fontWeight: 500, className: styles.centerSubtitle }, 'Command center')
    )
  );

  const satelliteGroups = ALL_NODES.map((node, i) => {
    const pos = getPosition(node.angle);
    const Icon = node.icon;
    const isHovered = hoveredIndex === i;
    const iconColor = ICON_COLORS[i % ICON_COLORS.length];
    const satelliteContent = React.createElement('g', { className: styles.satellite },
      React.createElement('rect', {
        x: -NODE_BOX.w / 2,
        y: -NODE_BOX.h / 2,
        width: NODE_BOX.w,
        height: NODE_BOX.h,
        rx: 8,
        fill: 'url(#cardFill)',
        stroke: isHovered ? COLORS.glassBorderHover : COLORS.glassBorder,
        strokeWidth: 0.4,
        filter: 'url(#controlCenterGlow)',
        className: styles.satelliteRect,
      }),
      React.createElement('g', { transform: `translate(${-NODE_BOX.iconSize / 2}, ${NODE_BOX.iconCenterY - NODE_BOX.iconSize / 2})`, style: { pointerEvents: 'none' } }, React.createElement(Icon, { stroke: iconColor, strokeWidth: 0.7, size: NODE_BOX.iconSize })),
      React.createElement('text', { x: 0, y: NODE_BOX.labelY, textAnchor: 'middle', fill: COLORS.text, fontSize: 2.6, fontWeight: 600, className: styles.satelliteLabel }, node.label),
      React.createElement('text', { x: 0, y: NODE_BOX.subY, textAnchor: 'middle', fill: COLORS.textMuted, fontSize: 2, fontWeight: 500, className: styles.satelliteSub }, node.sub)
    );
    return React.createElement(
      'g',
      {
        key: node.label + i,
        transform: `translate(${pos.x}, ${pos.y})`,
        onMouseEnter: () => setHoveredIndex(i),
        onMouseLeave: () => setHoveredIndex(null),
      },
      React.createElement(
        'a',
        {
          href: node.href,
          className: styles.satelliteLink,
          'aria-label': `Go to ${node.label}`,
        },
        satelliteContent
      )
    );
  });

  return React.createElement(
    'svg',
    {
      className: styles.diagramSvg,
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'xMidYMid meet',
      width: '100%',
      height: '100%',
    },
    defs,
    centerGroup,
    ...satelliteGroups
  );
}
