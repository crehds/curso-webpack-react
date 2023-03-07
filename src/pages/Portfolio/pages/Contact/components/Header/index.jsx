import { useTranslation } from "react-i18next"

export function Header() {
  const { t } = useTranslation();
  return (
    <>
      <div className='contact--title'>
        <h2>{t('portfolio.pages.contact.header.title')}</h2>
      </div>
      <div className='contact--wp'>
        <p>
          {t('portfolio.pages.contact.header.wp')}
          <a
            href='https://wa.me/51960265942'
            target='_blank'>
            <i className='icon-whatsapp'></i>
          </a>
          {t('portfolio.pages.contact.header.gmail')}
          <i className='icon-gmail'></i>
        </p>
      </div>
    </>
  )
}

