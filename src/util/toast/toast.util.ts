import { useToastStore } from '../../ui/store/toast.store';
export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export class Toast {
    static show(message: string, options?: { type?: ToastType; duration?: number, position?: Position }) {
        return useToastStore.getState().addToast(message, options);
    }
    static hide(id: string){
        useToastStore.getState().removeToast(id);
    }
    static success(message: string, options?: { duration?: number, position?: Position }){
        return this.show(message, { ...options, type: 'success' });
    }
    static error(message: string, options?: { duration?: number, position?: Position }){
        return this.show(message, { ...options, type: 'error' });
    }
    static info(message: string, options?: { duration?: number, position?: Position }){
        return this.show(message, { ...options, type: 'info' });
    }
    static warning(message: string, options?: { duration?: number, position?: Position }){
        return this.show(message, { ...options, type: 'warning' });
    }
};
