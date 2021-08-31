import Toast from '../Toast';

import './style.scss';

const ToastsList = ({ toasts, onAction }) => {
  console.log(toasts);

  return (
    <div className="toasts-list">

        {
          toasts.map((item, index) => (
            <Toast
              key={index}
              id={item.id}
              title={item.title}
              message={item.message}
              actions={item.actions}
              onAction={onAction}
            />
          ))
        }

    </div>
  );
}

export default ToastsList;
