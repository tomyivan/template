import { useToastStore } from '../../ui/store/toast.store';
export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export class ToastApp {
    show(message: string, options?: { type?: ToastType; duration?: number }) {
        return useToastStore.getState().addToast(message, options);
    }
    hide(id: string){
        useToastStore.getState().removeToast(id);
    }
    success(message: string, options?: { duration?: number }){
        return this.show(message, { ...options, type: 'success' });
    }
    error(message: string, options?: { duration?: number }){
        return this.show(message, { ...options, type: 'error' });
    }
    info(message: string, options?: { duration?: number }){
        return this.show(message, { ...options, type: 'info' });
    }
    warning(message: string, options?: { duration?: number }){
        return this.show(message, { ...options, type: 'warning' });
    }
};
