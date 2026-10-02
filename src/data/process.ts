import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand the design',
    description:
      'Review Figma or PSD files thoroughly, cataloging typography, grid behaviors, interactive micro-states, and design intent before writing any code.',
  },
  {
    step: '02',
    title: 'Build the Shopify experience',
    description:
      'Architect modular Shopify themes using clean Liquid structures, custom sections, and standard schema settings for frictionless merchant editing.',
  },
  {
    step: '03',
    title: 'Make it responsive',
    description:
      'Engineer fluid layouts that adapt naturally across all viewports, ensuring flawless touch interactions, rapid loading, and zero layout shift.',
  },
  {
    step: '04',
    title: 'Test and refine',
    description:
      'Validate cross-browser rendering, cart actions, checkout flows, and edge cases to ensure storefront stability and performance.',
  },
  {
    step: '05',
    title: 'Fix and maintain',
    description:
      'Rapidly identify and resolve bugs, CSS conflicts, script issues, and theme quirks to keep existing storefronts operating smoothly.',
  },
  {
    step: '06',
    title: 'Launch / migrate carefully',
    description:
      'Execute store migrations and live deployments with disciplined pre-launch checks, redirect preservation, and minimal downtime.',
  },
];
