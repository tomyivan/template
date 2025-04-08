import { useForm } from "react-hook-form"
import { InputCollapse, Input, InputSelect } from "../../shared"
export const InputsPage = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<{name:string}>()
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 
                    register={register}
                    errors={errors}
                    name="name"
                />
                <Input 
                    variant="inp-filled"
                    disabled
                    register={register}
                    errors={errors}
                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-filled"
                    register={register}
                    errors={errors}
                    name="name"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 
                    variant="inp-outline"
                    register={register}
                    errors={errors}
                    name="name"
                />
                <Input 
                    variant="inp-outline"
                    disabled
                    register={register}
                    errors={errors}
                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-outline"
                    register={register}
                    errors={errors}
                    name="name"
                />
            </div>
            <div className="flex flex-row justify-center gap-2">
                                
                <InputCollapse
                    label="Nombres"                                 
                />
                <InputCollapse
                    label="Nombres"
                    variant="inp-outline"
                />
            </div>
            <div className="flex flex-row justify-center gap-2">
                                
                <InputSelect
                    label="Nombres"
                    data={[
                        { id: 1, name: 'Option 1' },
                        { id: 2, name: 'Option 2' },
                        { id: 3, name: 'Option 3' },
                    ]}
                    variant="inp-outline"
                    register={register}
                    errors={errors}
                    name="name"
                />
                <InputSelect 
                    label="Nombres"
                    placeholder="Placeholder"
                    register={register}
                    errors={errors}
                    name="name"
                    data={[
                        { id: 1, name: 'Option 1' },
                        { id: 2, name: 'Option 2' },
                        { id: 3, name: 'Option 3' },
                        { id: 4, name: 'Option 4' },
                        { id: 5, name: 'Option 5' },
                        { id: 6, name: 'Option 6' },
                        { id: 7, name: 'Option 7' },
                        { id: 8, name: 'Option 8' },
                        { id: 9, name: 'Option 9' },
                        { id: 10, name: 'Option 10' },

                    ]}
                    variant="inp-filled"
                />
            </div>
        </div>
    )
}