import { createContext, useContext, useState } from 'react';
import { uuid } from '../../helpers';

const ToastContext = createContext();

const ToastProvider = ({ children }) => {

  const [toasts, setToasts] = useState([]);

  const createToast = (type, title, message, actions, options) => {
    const toastId = uuid(),
    tempToast = {
      id: toastId,
      createdAt: new Date(),
      type: type ? type : "DEFAULT",
      title: title,
      message: message,
      actions: actions,
      options: options,
      timeout: setTimeout(() => {
        onToastAction(toastId, "DISMISS");
      }, options && options.timeout ? options.timeout : 5000)
    }

    setToasts([...toasts, tempToast]);
  }

  const setInitialToasts = (aToasts) => {
    setToasts(aToasts);
  }

  const deleteToast = (id) => {
    const filteredToasts = toasts.filter((item) => item.id !== id);

    setToasts(filteredToasts);
  }

  const onToastAction = (id, action, payload) => {
    if (!id) {
      return;
    }

    if (action === "DISMISS") {
      deleteToast(id);
      return;
    }

    if (action) {
      action(payload);
    }
  }

  const data = {toasts, createToast, onToastAction, setInitialToasts};

  return (
    <ToastContext.Provider value={data}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToasts can only be used inside ToastsProvider");
  }
  return context;
};

export default ToastProvider;
