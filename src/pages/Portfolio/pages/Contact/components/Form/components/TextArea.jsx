import { Label } from "./Label";

export const TextArea = (props) => {
  const {
    name, label, translator
  } = props;

  const placeholder = translator(name, 'placeholder')
  const labelName = translator(label, 'label')

  return (
    <Label name={labelName}>
      <textarea
        name={name}
        id=''
        cols='30'
        rows='8'
        placeholder={placeholder}
      />
    </Label>
  )
}
