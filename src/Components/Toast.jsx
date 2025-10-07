import { useEffect, useState } from "react";

export default function Toast({ id, message, type, duration, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          onClose(id);
          return 0;
        }
        return prev - 100 / (duration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [id, duration, onClose]);

  return (
    <div className={`toast ${type}`} role="alert" aria-live="assertive">
      <div className="toast-message">
        {message}
        <span className="close-btn" onClick={() => onClose(id)}>
          ×
        </span>
      </div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
