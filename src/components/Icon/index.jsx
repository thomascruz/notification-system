import './style.scss';

const Icon = ({ icon, color, size }) => {

  return (
    <i
      className={`icon ${icon} ${color} ${size}`}
    />
  );
}

export default Icon;
