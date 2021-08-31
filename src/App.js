import { useContext } from 'react';
import { useToasts } from './providers/ToastProvider';

import ToastsList from './components/ToastsList';

import './main.scss';

function App() {
  const { toasts, onToastAction, createToast } = useToasts();

  return (
    <div className="App">

      <ToastsList
        toasts={toasts} 
        onAction={onToastAction}
      />

      <button
        onClick={() => createToast("SUCCESS", "test" + new Date(), "test")}
      >
        Create toast
      </button>

    </div>
  );
}

export default App;
