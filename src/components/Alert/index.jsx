import {
  CheckCircleIcon,
  XMarkIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import classNames from '../../utils/classNames';

const Alert = ({ className, type, children, onClose, message, title }) => {
  const icon = {
    success: (
      <CheckCircleIcon
        className="h-5 w-5 text-alert-success"
        aria-hidden="true"
      />
    ),
    info: (
      <InformationCircleIcon
        className="h-5 w-5 text-alert-info"
        aria-hidden="true"
      />
    ),
  };
  const renderContent = () => {
    if (children !== undefined) return children;
    else {
      return (
        <div className="ml-3 text-basic-primary  flex-1 font-poppins">
          {title && <h3 className="text-sm font-medium ">{title}</h3>}
          {message && (
            <div className="mt-2 text-sm ">
              <p>{message}</p>
            </div>
          )}
        </div>
      );
    }
  };
  return (
    <div className={classNames('rounded-md bg-bg-thriary p-4 mt-4', className)}>
      <div className="flex">
        <div className="flex-shrink-0">{icon[type]}</div>
        {renderContent()}
        <div className="ml-3">
          <button onClick={onClose}>
            <XMarkIcon className="w-5 h-5 text-basic-thriary" />
          </button>
        </div>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  className: '',
  message: '',
  title: 'Success',
  onClose: () => null,
};

export default Alert;
