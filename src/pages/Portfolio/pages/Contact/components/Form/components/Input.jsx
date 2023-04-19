import { Label } from "./Label";

export const Input = (props) => {
  const {
    type, name, label, translator
  } = props;

  const placeholder = translator(name, 'placeholder');
  const labelName = translator(label, 'label');

  return (
    <Label name={labelName} >
      <input
        type={type}
        placeholder={placeholder}
        name={`form_${name}`} />
    </Label>
  )
}
