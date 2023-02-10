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
        href='https://www.facebook.com/checa.rh'
        target='_blank'>
        <i
          className='icon-facebook facebook'
          alt='logo de instagram' />
      </a>
    </div>
  );
};
