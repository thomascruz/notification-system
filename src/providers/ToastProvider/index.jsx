import { createContext, useContext, useState } from 'react';
import { uuid } from '../../helpers';

const ToastContext = createContext();

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
          url: "https://google.com"
        },
        {
          type: "ACTION",
          text: "Undo changes",
          action: () => {
            alert("Undone");
          }
        },
        {
          type: "DISMISS",
          text: "Ignore"
        }
      ],
      options: {
        expireTimeout: 5000
      }
    },
    {
      id: 1,
      createdAt: new Date(),
      type: "INFO",
      title: "Profile saved successfully",
      message: "Your changes are live.",
      actions: [
        {
          type: "LINK",
          text: "View profile",
          url: "https://google.com"
        },
        {
          type: "ACTION",
          text: "Undo changes",
          action: () => {
            alert("Undone");
          }
        },
        {
          type: "DISMISS",
          text: "Ignore"
        }
      ],
      options: {
        expireTimeout: 5000
      }
    },
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
          url: "https://google.com"
        },
        {
          type: "ACTION",
          text: "Undo changes",
          action: () => {
            alert("Undone");
          }
        },
        {
          type: "DISMISS",
          text: "Ignore"
        }
      ],
      options: {
        expireTimeout: 5000
      }
    }
  ]);

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

  const data = {toasts, createToast, onToastAction};

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
