import { createContext, useContext, useState } from 'react';

const GlobalAlertContext = createContext();
GlobalAlertContext.displayName = 'GlobalAlertContext';

const initialAlert = {
  message: '',
  status: 'success',
  title: 'Success',
};
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialAlert);
  const removeAlert = () => {
    setAlert(initialAlert);
  };

  const alertValue = {
    alert,
    removeAlert,
    setAlert,
  };
  return (
    <GlobalAlertContext.Provider value={alertValue}>
      {children}
    </GlobalAlertContext.Provider>
  );
};

export const useGlobalAlertConsumer = () => useContext(GlobalAlertContext);

export default GlobalAlertContext;
