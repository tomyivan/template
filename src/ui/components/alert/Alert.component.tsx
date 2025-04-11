import { AlertCircle, CheckCircle, InfoIcon, X, XCircle } from "lucide-react";
import { useEffect, useRef } from "react";
// import { useEffect, useRef } from "react";
import gsap from "gsap";
interface AlertProps {
    position?: "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    type?: "success" | "error" | "warning" | "info" | "default";
    message?: string;
    duration?: number;
    onClose?: () => void;   
}

export const Alert:React.FC<AlertProps> = ({
    position ,
    type = "success",
    message = "This is an alert message",
    duration,
    onClose
}) => {
    const alertRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!duration || !alertRef.current || !progressRef.current) return;
        gsap.to(progressRef.current, {
            width: '100%',
            duration: duration / 1000,
            ease: "linear"
        });
        gsap.to(alertRef.current, {
            opacity: 0,
            x: position?.includes('left') ? -20 : position?.includes('right') ? 20 : 0,
            y: position?.includes('top') ? -20 : position?.includes('bottom') ? 20 : 0,
            duration: 0.3,
            delay: duration / 1000,
            onComplete: onClose,
        });
    },[])
    return (
        <>
            <div 
                ref={alertRef}
                className={`${position && 'fixed'} z-30
                ${position === "top" && "top-5 left-1/2 transform -translate-x-1/2"}
                ${position === "bottom" && "bottom-5 left-1/2 transform -translate-x-1/2"}
                ${position === "left" && "top-1/2 left-2 transform -translate-y-1/2"}
                ${position === "right" && "top-1/2 right-2 transform -translate-y-1/2"}
                ${position === "top-left" && "top-5 left-2"}
                ${position === "top-right" && "top-5 right-2"}
                ${position === "bottom-left" && "bottom-5 left-2"}
                ${position === "bottom-right" && "bottom-5 right-2"}
            ${type}`}>
                <div className="flex gap-4 items-center justify-between shadow-md p-2 w-auto min-w-72">
                    <div className="flex gap-2">
                        {
                            type === "success" ? <CheckCircle />
                            : type === "error" ? <XCircle />
                            : type === "warning" ? <AlertCircle />
                            : type === "info" ? <InfoIcon /> : null
                        }
                        {message}
                    </div>
                {onClose && <X onClick={onClose} className="cursor-pointer" />}

                </div>
                { duration && <div ref={progressRef} className="duration-alert w-0 border-2 border-blue-500">
                </div>}
            </div>
        </>
    )
}