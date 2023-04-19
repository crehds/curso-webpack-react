import { Label } from "./Label";

export const TextArea = (props) => {
  const {
    name, label, placeholder
  } = props;

  return (
    <Label name={label}>
      <textarea
        name={name}
        id=''
        cols='30'
        rows='15'
        placeholder={placeholder}
      />
    </Label>
  )
}
