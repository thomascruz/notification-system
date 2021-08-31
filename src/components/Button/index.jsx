import './style.scss';

const Button = ({ type, text, onAction }) => {

  return (
    <button 
      className={`btn ${type ? type.toLowerCase() : ''}`}
      onClick={onAction ? onAction : false}
    >
      {text}
    </button>
  );
}

export default Button;
