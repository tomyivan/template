import { DataSelect } from "../../../domain";
import { InputSelect } from "./Input.select.shared"
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form"
interface InputSelectProps<T extends FieldValues> {
    control: Control<any>,
    name: keyof T;
    options: RegisterOptions,
    errors: any,
    label: string,
    placeholder?: string,
    isDisabled?:boolean,
    variant?: "inp-outline" | "inp-filled" | "inp-normal";
    data:   DataSelect[];
}
export const InputSelect2 =<T extends FieldValues>({
    control,    
    name,
    options,
    errors,
    label,
    placeholder = "Placeholder",
    isDisabled = false,
    variant,
    data
}: InputSelectProps<T>) => {
    return (
        <div className="flex flex-col  w-full">
            <Controller
                control={control}
                name={name as string}
                render={({ field }) => (
                    <InputSelect                                    
                        {...field}
                        data={ data }
                        label={label}
                        placeholder={placeholder}
                        variant={variant}
                        disabled={isDisabled}
                        isValid={Boolean(errors[name])}                   
                    />
                )}
                rules={options}
            />
            {errors[name] && <small className="text-red-600 font-semibold">{ errors[name]?.message === ''? `Este campo es requerido` : errors[name]?.message}</small>}
        </div>
    )
}