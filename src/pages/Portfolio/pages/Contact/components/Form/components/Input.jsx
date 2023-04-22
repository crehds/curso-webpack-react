import { Label } from "./Label";

export const Input = (props) => {
  const {
    type, name, label, placeholder
  } = props;

  return (
    <Label name={label} >
      <input
        type={type}
        placeholder={placeholder}
        name={`form_${name}`} />
    </Label>
  )
}
