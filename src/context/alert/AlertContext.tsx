import { ReactNode, createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

interface AlertContextProps {
  alert: {
    msg: string;
    type: string;
  };

  setAlert: (msg: string, type: string) => void;
}

const AlertContext = createContext<AlertContextProps>({
  alert: {
    msg: '',
    type: '',
  },
  setAlert: () => null,
});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    alert: {
      msg: '',
      type: '',
    },
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        alert: { msg, type },
      },
    });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
