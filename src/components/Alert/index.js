import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Alert.css';

const Alert = ({ message, action, interval, clear = () => null }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
    elRef.current.classList = `alert ${
      action === 'success' ? 'bg-primary' : 'bg-red-500'
    }`;
  }
  useEffect(() => {
    document.getElementById('alert').appendChild(elRef.current);

    let timeOutId = 0;
    timeOutId = setTimeout(() => {
      elRef.current.classList.add('show_alert');
    }, 200);
    return () => {
      document.getElementById('alert').removeChild(elRef.current);
      clearTimeout(timeOutId);
    };
  }, []);
  useEffect(() => {
    if (elRef.current) {
      let timeOutId = 0;

      timeOutId = setTimeout(() => {
        clear();
      }, interval);
      return () => clearTimeout(timeOutId);
    }
  });

  return createPortal(<p>{message}</p>, elRef.current);
};

export default Alert;
