import { useContext, useEffect } from 'react';
import { useToasts } from './providers/ToastProvider';

import ToastsList from './components/ToastsList';

import './main.scss';

const dummyToasts = [
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
    id: 2,
    createdAt: new Date(),
    type: "INFO",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam perspiciatis sunt a alias fugiat non illum enim, ea beatae omnis aspernatur maiores itaque molestiae explicabo provident vitae facilis aut?",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam perspiciatis sunt a alias fugiat non illum enim, ea beatae omnis aspernatur maiores itaque molestiae explicabo provident vitae facilis aut?",
    options: {
      expireTimeout: 5000
    }
  },
  {
    id: 3,
    createdAt: new Date(),
    type: "ERROR",
    title: "Message not sent",
    message: "Please check your connection",
    actions: [
      {
        type: "ACTION",
        text: "Try again",
        permanent: true,
        action: () => {
          alert("It didn't work :(");
        }
      },
    ],
    options: {
      expireTimeout: 5000
    }
  },
  {
    id: 4,
    createdAt: new Date(),
    type: "WARNING",
    title: "Your test will end soon",
    message: "Hurry up!",
    options: {
      expireTimeout: 5000
    }
  },
];

function App() {
  const { toasts, onToastAction, createToast, setInitialToasts } = useToasts();

  useEffect(() => {
    setInitialToasts(dummyToasts);
  }, []);

  return (
    <div className="App">

      <ToastsList
        toasts={toasts} 
        onAction={onToastAction}
      />

      <button
        onClick={() => createToast("SUCCESS", "Test toast - " + (Math.floor(Math.random() * 10)), "test")}
      >
        Create toast
      </button>

    </div>
  );
}

export default App;
