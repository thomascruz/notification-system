import Toast from '../Toast';

import './style.scss';

const ToastsList = ({ toasts, onAction }) => {
  console.log(toasts);

  return (
    <div className="toasts-list">

        {
          toasts.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
          }).map((item, index) => (
            <div className="toast-wrapper">
              <Toast
                key={index}
                id={item.id}
                type={item.type}
                title={item.title}
                message={item.message}
                actions={item.actions}
                onAction={onAction}
              />
            </div>
          ))
        }

    </div>
  );
}

export default ToastsList;
