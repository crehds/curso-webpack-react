import { useTranslation } from "react-i18next";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";

export const Form = ({ handleEmail, setIsOpen }) => {
  const { t } = useTranslation();

  function translateLabel(string) {
    return t(`portfolio.pages.contact.form.${string}.label`)
  }

  function translatePlaceholder(string) {
    return t(`portfolio.pages.contact.form.${string}.placeholder`)
  }

  function onSubmit(e) {
    e.preventDefault();

    const form = e.target;
    setIsOpen(true);
    handleEmail(form);
  }

  return (
    <form
      action=''
      onSubmit={onSubmit}
      id='contact-form'>
      <Input
        label={translateLabel('name')}
        name='name'
        type='text'
        placeholder={translatePlaceholder('name')}
        required={true}
      />
      <Input
        label={translateLabel('e-mail')}
        name='e-mail'
        type='email'
        placeholder={translatePlaceholder('e-mail')}
        required={true}
      />
      <Input
        label={translateLabel('phone')}
        name='phone'
        type='tel'
        placeholder={translatePlaceholder('phone')}
        required={true}
      />
      <TextArea
        label={translateLabel('message')}
        name='message'
        placeholder={translatePlaceholder('message')}
      />
      <div>
        <button type='submit'>{t('portfolio.pages.contact.form.button')}</button>
      </div>
    </form>
  )
}
