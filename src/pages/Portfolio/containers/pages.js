import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Technologies = lazy(() => import('../pages/Technologies'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const Experience = lazy(() => import('../pages/Experience'));

const PAGES = {
  profile: ({ user }) => <Profile {...user} />,
  technologies: () => <Technologies />,
  projects: () => <Projects />,
  contact: () => <Contact />,
  experience: () => <Experience />,
}

export default PAGES;
