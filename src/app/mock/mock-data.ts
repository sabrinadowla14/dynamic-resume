// src/app/mock/mock-data.ts

import { Experience } from '../models/experience';
import { Profile } from '../models/profile';
import { Project } from '../models/projects';

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: 'Angular Software Developer',
    company_name: 'Sohum Systems(Federal Contract-DOT)',
    job_description:
      'Developed Dynamic UI Components: Built and optimized interactive UI components using Angular 14 & 16, leveraging Reactive Forms, ng-neat/elf. state management, and Tailwind CSS',
    skills:
      'Angular 14 & 16, ng-neat/elf, HTML, Tailwind CSS, RxJS, NX, RESTful web services, Java, Git',
    start_date: 'November 15, 2023',
    end_date: 'March 07, 2025',
  },
  {
    id: 2,
    title: 'Angular Front-End Developer',
    company_name: 'ak-infotech.com (CVS Health Care)',
    job_description:
      'Developed Dynamic UI Components: Built and optimized interactive UI components using Angular 14 leveraging reactive Forms, and CSS for a seamless user experience.',
    skills:
      'Angular Material, HTML5, CSS, Rxjs, NgRx, Java, RESTful web services,HTML5, CSS',
    start_date: 'May 15, 2023',
    end_date: 'August 11, 2023',
  },
  {
    id: 3,
    title: 'UI Angular Developer',
    company_name: 'Infinite Computer Solutions (Casenet-Health Care)',
    job_description:
      'Managed State & Component Communication: Utilized NgRx, Input/Output properties, and Services with dependency injection to manage shared states efficiently across multiple modules',
    skills:
      'HTML5, CSS, Prime NG, and Tailwind CSS, Angular (7.2) and Angular 8, RESTful web services',
    start_date: 'July 2022',
    end_date: 'Jan 2023',
  },
  {
    id: 4,
    title: 'Associate Consultant',
    company_name: 'Wipro',
    job_description:
      'Led the development and maintenance of enterprise-grade web applications using Angular and backend technologies such as C# .NET and Java Spring Boot across two major client assignment',
    skills:
      'NgRx, Azure DevOps, Prime Ng, Java Spring Boot, HTML5, Oracle Database, OAuth2, GitHub Desktop',
    start_date: 'April 2021',
    end_date: 'April 2022',
  },
  {
    id: 5,
    title: 'UI Developer',
    company_name: 'Udacity',
    job_description:
      'Created a website for Full Stack Web Developer ND, using React,  Angular7, Bootstrap 4, HTML5, CSS3, JavaScript and NodeJS',
    skills:
      'React, Angular7, Auth0, Bootstrap 4, HTML5, CSS3, Kubernetes with EKS, AWS cluster, IAM, JavaScript and NodeJS.',
    start_date: 'April 2019',
    end_date: 'April 2021',
  },
  {
    id: 6,
    title: 'Front End Developer',
    company_name: 'Code for Social Good',
    job_description:
      'Contributed to nonprofit and open-source web projects focused on social impact, building modern web applications using Angular and Java Spring Boot within an Agile team setting.',
    skills:
      'Angular2 and 4, HTML5, CSS3, JavaScript, Typescript, Bootstrap, Java Spring Boot, MySQL, Node.js',
    start_date: 'January 2017',
    end_date: 'February 2018',
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Dynamic Resume Website',
    description:
      'An Angular-based resume site with a Node.js and MySQL backend.',
    tech_stack: 'Angular, Node.js, MySQL',
    github_link: 'https://github.com/sabrinadowla14/dynamic-resume',
    live_link: '',
  },
  {
    id: 2,
    title: 'Coffee Shop Project',
    description:
      'Full-stack app to manage orders and products for a coffee shop.',
    tech_stack: 'Angular 7, Flask, PostgreSQL',
    github_link: 'https://github.com/sabrinadowla14/Coffee_Shop_Project',
    live_link: '',
  },
  {
    id: 3,
    title: 'Portfolio',
    description:
      'Scalable web applications using Angular, Java Spring Boot, and modern web technologies.',
    tech_stack: 'Angular, Java Spring Boot, MySql',
    github_link: 'https://github.com/sabrinadowla14/portfolio',
    live_link: '',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Angular.',
    tech_stack: 'Angular, HTML, CSS',
    github_link: 'https://github.com/sabrinadowla14/portfolio',
    live_link: '',
  },
];

export const MOCK_PROFILE: Profile = {
  id: 1,
  name: 'Sabrina',
  address: 'MN, USA',
  github_link: 'https://github.com/sabrinadowla14',
  linkedin_link: 'https://www.linkedin.com/in/sabrinadowla14/',
  portfolio_link: 'https://sprightly-beignet-350d24.netlify.app/',
};
