export const Label = (props) => {
  const { name, children } = props;
  return (
    <div>
      <label>
        {name}
        {children}
      </label>
    </div>
  )
}
