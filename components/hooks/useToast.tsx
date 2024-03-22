import React, { useState, ReactNode } from 'react';
import { Notification } from '@mantine/core';

interface ToastState {
  message: string;
  variant: 'success' | 'error' | 'info';
}

// Custom hook for generating toast notifications
const useToast = () => {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = (message: string, variant: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, variant });
  };

  const closeToast = () => {
    setToast(null);
  };

  const Toast = () => {
    if (!toast) return null;

    return (
      <Notification
        onClose={closeToast}
        title={toast.message}
        color={toast.variant === 'success' ? 'green' : toast.variant === 'error' ? 'red' : 'blue'}
      />
    );
  };

  return { showToast, Toast };
};

export default useToast;
