import React from 'react';

export enum Page {
  HOME = 'HOME',
  TECHNOLOGY = 'TECHNOLOGY',
  SOLUTIONS = 'SOLUTIONS',
  ABOUT = 'ABOUT',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}