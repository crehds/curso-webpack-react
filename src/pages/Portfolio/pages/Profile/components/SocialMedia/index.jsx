import { SiLinkedin } from 'react-icons/si'

import './styles.css';

export const SocialMedia = () => {
  return (
    <div className='SocialMedia--container'>
      <a
        href='https://twitter.com/crehds1'
        target='_blank'>
        <i
          className='icon-twitter twitter'
          alt='logo de twitter' />
      </a>
      <a
        href='https://github.com/crehds'
        target='_blank'>
        <i
          className='icon-github github'
          alt='logo de github' />
      </a>
      <a
        href='https://www.linkedin.com/in/carlos-rodriguez-huerta-362ab716a'
        target='_blank'>
        <SiLinkedin
          className='icon-linkedin'
          size={28}
          color='#505050b3' />
      </a>
    </div>
  );
};
