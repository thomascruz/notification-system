import './style.scss';

const Toast = ({ id, title, message, actions, onAction }) => {
  return (
    <div className="toasts">

        <div className="toast-header">
          <h5 className="title">
            {title}
          </h5>
        </div>

    </div>
  );
}

export default Toast;
