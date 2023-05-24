import React from 'react';

const Profile = React.lazy(() => import('../pages/Profile'));
const Technologies = React.lazy(() => import('../pages/Technologies'));
const Projects = React.lazy(() => import('../pages/Projects'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Experience = React.lazy(() => import('../pages/Experience'));

import './styles.css';

const pages = {
  profile: ({ user }) => <Profile {...user} />,
  technologies: () => <Technologies />,
  projects: () => <Projects />,
  contact: () => <Contact />,
  experience: () => <Experience />
}

export function handleContent({ page = '', user = {} }) {
  return pages[page]({ user });
}

export function Content(props) {
  const { page, user } = props;
  return (
    <div className='content'>
      {handleContent({ page, user })}
    </div>
  );
}
