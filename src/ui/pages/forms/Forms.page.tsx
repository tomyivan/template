import { Form } from "../../components"
import { Input, InputSelect2 } from "../../shared"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormTest } from "../../../domain"
export const FormPage = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormTest>()
    const onSubmit: SubmitHandler<FormTest> = async (data) => {
        return true
    }
    return (
        <div className="flex flex-row gap-4 px-2">
            <div className="w-1/2">
                <Form 
                    onSubmit={handleSubmit(onSubmit)}
                    labelSend="Enviar"
                    onCancel={() => {
                        console.log('cancel')
                    }}
                    title="Formulario"
                >
                    <div className="form-row">
                        <Input 
                            label="Nombre"
                            placeholder="Placeholder"   
                            variant="inp-filled"                    
                            register={register}
                            name="name"
                            errors={errors}
                            options={{
                                required: 'Campo requerido',                       
                            }}
                        />
                        <Input 
                            label="Correo"
                            placeholder="Placeholder"   
                            variant="inp-filled"                    
                            register={register}
                            name="email"
                            errors={errors}
                            options={{
                                required: 'Campo requerido',                       
                            }}
                        />
                    
                    </div>
                    <div className="form-row">
                        <Input 
                            label="Label"
                            placeholder="Placeholder"   
                            variant="inp-filled"                    
                            register={register}
                            name="password"
                            errors={errors}
                            type="password"
                            options={{
                                required: 'Campo requerido',                       
                            }}
                        />
                        <InputSelect2
                            label="Label"
                            placeholder="Placeholder"   
                            variant="inp-filled"                                          
                            name="category"
                            errors={errors}
                            control={control}
                            data={
                                [
                                    { id: 1, name: 'Option 1' },
                                    { id: 2, name: 'Option 2' },
                                    { id: 3, name: 'Option 3' },
                                ]
                            }
                            options={{
                                required: 'Campo requerido',                       
                            }}
                        />                    
                    </div>
                </Form>
            </div>
        </div>
    )
}