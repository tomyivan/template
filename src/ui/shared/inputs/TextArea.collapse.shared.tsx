import { UseFormRegister, FieldValues, RegisterOptions }  from "react-hook-form";
interface TextAreaProps<T extends FieldValues> {
    placeholder?: string;
    label?: string;
    rows?: number;  
    variant?: 'inp-outline' | 'inp-filled' | 'inp-normal';
    disabled?: boolean;
    register?: UseFormRegister<T>;
    name: keyof T;
    options?: RegisterOptions<T[keyof T]>;
    errors?: {
        isValid: boolean;
        message?: string;
    };
    className?: string;
    onChange?: (e: HTMLTextAreaElement) => void;
}
export const TextArea=< T extends FieldValues >  ({
    placeholder,
    rows = 4,
    label,
    variant = 'inp-normal',
    disabled = false,
    register,
    name,
    options,
    errors,
    className,
    onChange
}: TextAreaProps< T >) => {
    return (
        <div className="w-full">
            {
                label && (
                    <label className={`block  text-gray-700 font-semibold mb-2 ${errors?.isValid && 'text-red-500'}`} htmlFor={String(name)}>    
                        {label}
                    </label>
                )
            }
            <textarea 
                rows={rows}
                className={`${variant} !h-auto ${ disabled && 'cursor-not-allowed bg-gray-200 opacity-40'} ${ errors?.isValid && '!border-red-500'} w-full ${ className }`}
                placeholder={placeholder}
                disabled = {disabled}
                id={String(name)}
                {...(register ? register(name as any, options as any) : {})}
                autoComplete="off"                
                onChange={ onChange && ((e) => onChange(e.target as HTMLTextAreaElement))}
            />       
            {errors?.isValid && <small className="text-red-600 font-semibold">{ errors?.message === ''? `Este campo es requerido` : errors?.message}</small>}
        </div>
    )
}