import './styles.css';

export const Card = (props) => {
  const { children, type = 'default' } = props
  return (
    <div className={`Card ${type}`}>
      {children}
    </div>
  );
};
