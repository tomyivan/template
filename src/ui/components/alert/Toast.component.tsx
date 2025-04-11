import { useToastStore } from '../../store/toast.store';
import { Alert } from './Alert.component';
export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
    const removeToast = useToastStore((state) => state.removeToast);
    const newSet = new Set(toasts.map((toast) => toast.position));
    return (        
            Array.from(newSet).map((key) => (
                <div key={key} className={`flex flex-col fixed gap-2 
                        ${key === "top" && "top-5 left-1/2 transform -translate-x-1/2"}
                        ${key === "bottom" && "bottom-5 left-1/2 transform -translate-x-1/2"}
                        ${key === "left" && "top-1/2 left-2 transform -translate-y-1/2"}
                        ${key === "right" && "top-1/2 right-2 transform -translate-y-1/2"}
                        ${key === "top-left" && "top-5 left-2"}
                        ${key === "top-right" && "top-5 right-2"}
                        ${key === "bottom-left" && "bottom-5 left-2"}
                        ${key === "bottom-right" && "bottom-5 right-2"} z-50`} >
                    {
                        toasts.filter((toast) => toast.position === key).map((toast) => (
                            <Alert 
                                type={toast.type}
                                message={toast.message}
                                key={toast.id}
                                onClose={() => removeToast(toast.id)}
                                duration={toast.duration || 3000}
                            />
                        ))
                    }
                </div>
            ))
  );
};