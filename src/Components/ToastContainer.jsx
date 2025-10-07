import { useRef, useState } from "react";
import Toast from "./Toast";

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});
  const MAX_TOASTS = 3;

  const typeDurations = {
    success: 3000,
    info: 5000,
    warning: 7000,
    error: 10000,
  };

  const handleClose = (id) => {
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAdd = (message, type) => {
    const id = Date.now();
    const duration = typeDurations[type] || 5000;

    setToasts((prev) => {
      const newToasts = [...prev, { id, message, type, duration }];
      if (newToasts.length > MAX_TOASTS) newToasts.shift();
      return newToasts;
    });
    timersRef.current[id] = setTimeout(() => handleClose(id), duration);
  };

  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type, duration }) => (
          <Toast
            key={id}
            id={id}
            message={message}
            type={type}
            duration={duration}
            onClose={handleClose}
          />
        ))}
      </div>

      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>Success</button>
        <button onClick={() => handleAdd("Info", "info")}>Info</button>
        <button onClick={() => handleAdd("Warning", "warning")}>Warning</button>
        <button onClick={() => handleAdd("Error", "error")}>Error</button>
      </div>
    </div>
  );
}
