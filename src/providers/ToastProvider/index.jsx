import { createContext, useState } from 'react';

import ToastsList from '../../components/ToastsList';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {

  const [toasts, setToasts] = useState([
    {
      id: 1,
      createdAt: new Date(),
      type: "SUCCESS",
      title: "Profile saved successfully",
      message: "Your changes are live.",
      actions: [
        {
          type: "LINK",
          text: "View profile",
          url: "https://gooogle.com"
        },
        {
          type: "UNDO",
        }
      ]
    }
  ]);

  const createToast = (type, title, message, actions, options) => {

  }

  const onToastAction = (id, action, payload) => {

  }

  console.log(toasts);

  return (
    <ToastContext.Provider value={{ toasts }}>

      <ToastsList toasts={toasts} onAction={onToastAction}/>

      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
