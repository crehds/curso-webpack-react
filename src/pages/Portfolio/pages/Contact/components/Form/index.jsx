import { useTranslation } from "react-i18next";

export const Form = ({ handleEmail, setIsOpen }) => {
  const { t } = useTranslation();

  function onSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
    handleEmail();
  }
  return (
    <form
      action=''
      onSubmit={onSubmit}
      id='contact-form'>
      <div>
        <label htmlFor=''>{t('portfolio.pages.contact.form.name.label')}</label>
        <input
          type='text'
          placeholder={t('portfolio.pages.contact.form.name.placeholder')}
          name='from_name' />
      </div>

      <div>
        <label htmlFor=''>{t('portfolio.pages.contact.form.e-mail.label')}</label>
        <input
          type='email'
          placeholder={t('portfolio.pages.contact.form.e-mail.placeholder')}
          name='from_email'
        />
      </div>

      <div>
        <label htmlFor=''>{t('portfolio.pages.contact.form.phone.label')}</label>
        <input
          type='tel'
          placeholder={t('portfolio.pages.contact.form.phone.placeholder')}
          name='from_phone' />
      </div>

      <div>
        <label htmlFor=''>{t('portfolio.pages.contact.form.message.label')}</label>
        <textarea
          name='message'
          id=''
          cols='30'
          rows='8'
          placeholder={t('portfolio.pages.contact.form.message.placeholder')}
        ></textarea>
      </div>
      <div>
        <button type='submit'>{t('portfolio.pages.contact.form.button')}</button>
      </div>
    </form>
  )
}
