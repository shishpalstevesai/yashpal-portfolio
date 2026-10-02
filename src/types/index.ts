export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  url: string;
  category: ProjectCategory;
  featured?: boolean;
  themeType?: 'Shopify Plus' | 'Shopify';
  accentHue?: string; // Subtle brand tint for neutral preview
}

export type ProjectCategory =
  | 'All'
  | 'Fashion'
  | 'Beauty'
  | 'Jewellery'
  | 'Home & Lifestyle'
  | 'Food / Wellness'
  | 'Gardening'
  | 'Technology'
  | 'Other E-commerce';

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Intermediate';
  group: 'SHOPIFY & E-COMMERCE' | 'FRONTEND DEVELOPMENT';
  highlight?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
