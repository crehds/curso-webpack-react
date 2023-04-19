import './styles/label.css';

export const Label = (props) => {
  const { name, children } = props;
  return (
    <div className='form-label'>
      <label>
        <p>{name}</p>
        {children}
      </label>
    </div>
  )
}
