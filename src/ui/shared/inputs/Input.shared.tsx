import { UseFormRegister, FieldValues, RegisterOptions }  from "react-hook-form";
interface InputProps<T extends FieldValues> {
    placeholder?: string;
    label?: string;
    type?: string;
    variant?: 'inp-outline' | 'inp-filled' | 'inp-normal';
    disabled?: boolean;
    register: UseFormRegister<T>;
    name: keyof T;
    options?: RegisterOptions<T[keyof T]>;
    errors: any    
}
export const Input=< T extends FieldValues >  ({
    placeholder,
    label,
    type = 'text',
    variant = 'inp-normal',
    disabled = false,
    register,
    name,
    options,
    errors    
}: InputProps< T >) => {
    return (
        <div className="w-full">
            {
                label && (
                    <label className={`block text-gray-700 font-semibold mb-2 ${errors[name] && 'text-red-500'}`} htmlFor={String(name)}>
                        {label}
                    </label>
                )
            }
            <input 
                type={type}
                className={`${variant} ${ disabled && 'cursor-not-allowed bg-gray-200 opacity-40'} ${errors[name] && '!border-red-500'} w-full h-[40px]`}
                placeholder={placeholder}
                disabled = {disabled}
                { ...register(name as any, options as any) }
                autoComplete="off"                
            />       
                    {errors[name] && <small className="text-red-600 font-semibold">{ errors[name]?.message === ''? `Este campo es requerido` : errors[name]?.message}</small>}
        </div>
    )
}