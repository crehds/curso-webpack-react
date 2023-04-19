import { useTranslation } from "react-i18next";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";

export const Form = ({ handleEmail, setIsOpen }) => {
  const { t } = useTranslation();

  function onSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
    handleEmail();
  }

  function translator(string, property) {
    return t(`portfolio.pages.contact.form.${string}.${property}`)
  }

  return (
    <form
      action=''
      onSubmit={onSubmit}
      id='contact-form'>
      <Input
        label='name'
        name='name'
        type='text'
        translator={translator}
      />
      <Input
        label='e-mail'
        name='e-mail'
        type='email'
        translator={translator}
      />
      <Input
        label='phone'
        name='phone'
        type='tel'
        translator={translator}
      />
      <TextArea
        label='message'
        name='message'
        translator={translator}
      />
      <div>
        <button type='submit'>{t('portfolio.pages.contact.form.button')}</button>
      </div>
    </form>
  )
}
