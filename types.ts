import type { ReactElement } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  // Fix: Cannot find namespace 'JSX'. Use ReactElement instead.
  icon: ReactElement;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category: 'PCSHSPL' | 'SAMSEN' | 'CHULA';
  image?: string;
}