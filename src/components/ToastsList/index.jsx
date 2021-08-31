import { useEffect, useState } from 'react';
import Toast from '../Toast';

import './style.scss';

const ToastsList = ({ toasts, onAction }) => {

  const [closingStates, setClosingStates] = useState([]);

  useEffect(() => {

  }, []);
  
  const onToastAction = (id, action) => {

    if (action === "DISMISS") {
      setClosingStates([...closingStates, id]);

      setTimeout(() => {
        onAction(id, action);
      }, 1000);
    }

  }

  return (
    <div className="toasts-list">

        {
          toasts.map((item, index) => (
            <div className={`toast-wrapper ${closingStates.includes(item.id) ? 'closing' : ''}`}>
              <Toast
                key={index}
                id={item.id}
                type={item.type}
                title={item.title}
                message={item.message}
                actions={item.actions}
                onAction={onToastAction}
              />
            </div>
          ))
        }

    </div>
  );
}

export default ToastsList;
