import { useHistory } from "react-router-dom";

import Button from '../Button';
import Icon from '../Icon';

import './style.scss';

const Toast = ({ id, type, title, message, actions, onAction }) => {

  let history = useHistory();

  const onToastAction = async (aToastAction) => {

    switch (aToastAction.type) {

      case 'ACTION':
        if (aToastAction.action) {
          await aToastAction.action();
          
          if (!aToastAction.permanent) {
            onAction(id, "DISMISS");
          }
        }
      break;

      case 'PATH':
        if (aToastAction.url) {
          history.push(aToastAction.url);
        }
      break;

      case 'LINK':
        if (aToastAction.url) {
          window.location.href = aToastAction.url;
        }
      break;

      default:
        onAction(id, "DISMISS");

    }

  }

  const getIcon = () => {

    switch (type) {

      case "SUCCESS":
        return "done";

      case "ERROR":
        return "error";

      case "INFO":
        return "info";

      case "WARNING":
        return "warning";

    }

  }

  return (
    <div className={`toast ${type ? type.toLowerCase() : ''}`}>

      <div className="toast-body">
        
        <div className="toast-icon">
          <Icon 
            icon={type ? type.toLowerCase() : 'info'} 
            color={type ? type.toLowerCase() + '-color' : 'info-color'}
            size="big"
          />
        </div>

        <div className="toast-content">
          <h5 className="title">
            {title}
          </h5>

          <p className="message">
            {message}
          </p>
        </div>

        <div className="toast-close">
          <div
            className="icon-wrapper"
            onClick={() => onAction(id, "DISMISS")}
          >
            <Icon 
              icon="close" 
              color="black"
            />
          </div>
        </div>

      </div>

      {
        actions && 
        <div className="toast-actions">

          {
            actions.map((item, index) => (
              <Button 
                key={index}
                type={type ? type.toLowerCase() : ''}
                onAction={() => onToastAction(item)}
                text={item.text}
              />
            ))
          }

        </div> 
      }

    </div>
  );
}

export default Toast;
