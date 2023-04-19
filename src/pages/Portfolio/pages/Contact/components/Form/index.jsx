import { useTranslation } from "react-i18next";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";

export const Form = ({ handleEmail, setIsOpen }) => {
  const { t } = useTranslation();

  function transtaleLabel(string) {
    return t(`portfolio.pages.contact.form.${string}.label`)
  }

  function translatePlaceholder(string) {
    return t(`portfolio.pages.contact.form.${string}.placeholder`)
  }

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
      <Input
        label={transtaleLabel('name')}
        name='name'
        type='text'
        placeholder={translatePlaceholder('name')}
      />
      <Input
        label={transtaleLabel('e-mail')}
        name='e-mail'
        type='email'
        placeholder={translatePlaceholder('e-mail')}
      />
      <Input
        label={transtaleLabel('phone')}
        name='phone'
        type='tel'
        placeholder={translatePlaceholder('phone')}
      />
      <TextArea
        label={transtaleLabel('message')}
        name='message'
        placeholder={translatePlaceholder('message')}
      />
      <div>
        <button type='submit'>{t('portfolio.pages.contact.form.button')}</button>
      </div>
    </form>
  )
}
