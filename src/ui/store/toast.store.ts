// stores/toastStore.ts
import { create } from 'zustand';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
type Position = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  position?: Position
}

interface ToastStore {
  toasts: Toast[];
  addToast: (message: string, options?: { type?: ToastType; duration?: number, position?:Position }) => string;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message, options = {}) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = { id, message, type: options.type || 'default', duration: options.duration, position: options.position || 'bottom-right' };
    
    set((state) => ({ toasts: [...state.toasts, toast] }));
    
    // if (options.duration !== 0) {
    //   setTimeout(() => {
    //     useToastStore.getState().removeToast(id);
    //   }, options.duration || 3000);
    // }
    
    return id;
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
  },
}));