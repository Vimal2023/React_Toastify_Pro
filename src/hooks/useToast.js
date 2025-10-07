import { useContext, createContext, useState, useRef } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});
  const MAX_TOASTS = 3;

  const typeDurations = {
    success: 3000,
    info: 5000,
    warning: 7000,
    error: 10000,
  };

  const addToast = (message, type) => {
    const id = Date.now();
    const duration = typeDurations[type] || 5000;
    setToasts((prev) => {
      const newToasts = [...prev, { id, message, type, duration }];
      if (newToasts.length > MAX_TOASTS) newToasts.shift();
      return newToasts;
    });

    timersRef.current[id] = setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
