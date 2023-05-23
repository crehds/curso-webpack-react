import { useTranslation } from 'react-i18next';
import './styles.css';

export const UserData = (props) => {
  const { t } = useTranslation();

  return (
    <div className='userdata--container'>
      <p className='userdata--profession'>{t('main-role')}</p>
      <p className='userdata--name'>{`${props.name}`}</p>
      <ul>
        <li>{props.email ? props.email : 'carlos15erh@gmail.com'}</li>
        <li>{props.country}</li>
        <li>{props.phone}</li>
      </ul>
    </div>
  );
};
