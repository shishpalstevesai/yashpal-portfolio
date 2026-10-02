import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Jan 2024 – Present',
    role: 'Shopify Developer',
    company: 'ControlF5',
    isCurrent: true,
    responsibilities: [
      'Develop and maintain Shopify and Shopify Plus storefronts, upholding high standards of code quality across projects.',
      'Convert Figma/PSD designs into responsive, pixel-accurate Shopify themes.',
      'Lead store migrations onto Shopify with minimal downtime.',
      'Report and estimate development status regularly, and write feature design specifications for new builds.',
      'Diagnose and fix bugs to keep storefronts running smoothly.',
    ],
  },
  {
    period: 'Jan 2022 – Dec 2023',
    role: 'Shopify Developer',
    company: 'Mandasa Technologies',
    location: 'Mandsaur',
    isCurrent: false,
    responsibilities: [
      'Built and customized Shopify themes from Figma/PSD designs for client storefronts.',
      'Implemented responsive design templates for a consistent experience across devices.',
      'Handled ongoing bug fixing and theme maintenance for multiple client stores.',
    ],
  },
  {
    period: '2021',
    role: 'Freelance Shopify Developer',
    company: 'Self-employed',
    isCurrent: false,
    responsibilities: [
      'Delivered end-to-end Shopify store builds and theme customizations for independent clients.',
      'Translated client designs into functional, responsive storefronts.',
      'Managed timelines and post-launch fixes directly with clients.',
    ],
  },
];
