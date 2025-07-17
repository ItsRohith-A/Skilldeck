// components/ToastNotification.tsx
import React, { useEffect, useState } from 'react';

interface ToastNotificationProps {
  message: string;
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // give time for animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 z-50 transition-transform duration-300 ease-in-out transform ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } bg-red-500 text-white px-4 py-2 rounded shadow-md text-sm`}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
