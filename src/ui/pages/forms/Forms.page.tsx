import { Form } from "../../components"
import { Input, InputSelect2 } from "../../shared"
import { SubmitHandler, useForm } from "react-hook-form"
import { DataSelect, FormTest, FormTestDefault, FormTestSelect } from "../../../domain"
import { useEffect, useState } from "react"
export const FormPage = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormTest>()
    const { register:register2, reset, handleSubmit:handleSubmit2, control: control2, formState: { errors: errors2 } } = useForm<FormTestDefault>()
    const { register:register3, reset: reset3, setValue, handleSubmit:handleSubmit3, control: control3, formState: { errors: errors3 } } = useForm<FormTestSelect>()
    const [ dataCategory32, setDataCategory32 ] = useState<DataSelect[]>([
        {id: 1, name: "PRUEBA 1"},
        {id: 2, name: "PRUEBA 2"},
        {id: 3, name: "PRUEBA 3"},
        {id: 4, name: "PRUEBA 4"},
        {id: 5, name: "PRUEBA 5"},
    ])
    const onSubmit: SubmitHandler<FormTest> = async (data) => {
        return true
    }
    const onSubmit2: SubmitHandler<FormTestDefault> = async (data) => {
        console.log(data)
    }
    const handleChange = (data: DataSelect) => {        
        setValue("category32", null as any)
        setDataCategory32([
            { id: 6, name: "PRUEBA 6" },
            { id: 7, name: "PRUEBA 7" },
            { id: 8, name: "PRUEBA 8" },
            { id: 9, name: "PRUEBA 9" },
            { id: 10, name: "PRUEBA 10" }
        ])
    }
    const onSubmit3: SubmitHandler<FormTestSelect> = async (data) => {
        console.log(data)
    }
    useEffect(() => {
        reset({
            name2: 'Nombre 2',
            email2: 'Email 2',
            password2: 'Password 2',
            category2: { id: 1, name: 'Option 1' },
        })
    },[])
    return (
        <>
            <div className="flex flex-row gap-4 px-2">
                <div className="w-1/2 shadow-xl p-4 rounded-lg border border-gray-500">
                    <Form 
                        onSubmit={handleSubmit(onSubmit)}
                        labelSend="Enviar"
                        onCancel={() => {
                            console.log('cancel')
                        }}
                        title="Formulario 1"
                    >
                        <div className="form-row">
                            <Input 
                                label="Nombre"
                                placeholder="Placeholder"   
                                variant="inp-filled"                    
                                register={register}
                                name="name"
                                errors={{
                                    isValid: Boolean(errors.name)
                                }}
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
                                errors={{
                                    isValid: Boolean(errors.email)
                                }}
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
                                errors={{
                                    isValid: Boolean(errors.password)
                                }}
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
                                errors={{
                                    isValid: Boolean(errors.category)
                                }}
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
                <div className="w-1/2 shadow-xl p-4 rounded-lg border border-gray-500">
                    <Form 
                        onSubmit={handleSubmit2(onSubmit2)}
                        labelSend="Enviar"
                        onCancel={() => {
                            console.log('cancel')
                        }}
                        title="Formulario Default"
                    >
                        <div className="form-row">
                            <Input 
                                label="Nombre"
                                placeholder="Placeholder"   
                                variant="inp-filled"                    
                                register={register2}
                                name="name2"
                                errors={{
                                    isValid: Boolean(errors2.name2)
                                }}
                                options={{
                                    required: 'Campo requerido',
                                }}
                            />
                            <Input 
                                label="Correo"
                                placeholder="Placeholder"   
                                variant="inp-filled"                    
                                register={register2}
                                name="email2"
                                errors={{
                                    isValid: Boolean(errors2.email2)
                                }}
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
                                register={register2}
                                name="password2"
                                errors={{
                                    isValid: Boolean(errors2.password2)
                                }}
                                type="password"
                                options={{
                                    required: 'Campo requerido',                       
                                }}
                            />
                            <InputSelect2
                                label="Label"
                                placeholder="Placeholder"   
                                variant="inp-filled"                                          
                                name="category2"
                                errors={{
                                    isValid: Boolean(errors2.category2)
                                }}
                                control={control2}
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
            <div className="flex flex-row gap-4 px-2">
                <div className="w-1/2 shadow-xl p-4 rounded-lg border border-gray-500">
                    <Form 
                        onSubmit={handleSubmit3(onSubmit3)}
                        labelSend="Enviar"
                        onCancel={() => {
                            console.log('cancel')
                        }}
                        title="Formulario Default"
                    >
                        <div className="form-row">
                            <Input 
                                label="Nombre"
                                placeholder="Placeholder"   
                                variant="inp-filled"                    
                                register={register3}
                                name="name3"
                                errors={{
                                    isValid: Boolean(errors3.name3)
                                }}
                                options={{
                                    required: 'Campo requerido',
                                }}
                            />
                            <Input 
                                label="Correo"
                                placeholder="Placeholder"   
                                variant="inp-filled"                    
                                register={register3}
                                name="email3"
                                errors={{
                                    isValid: Boolean(errors3.email3)
                                }}
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
                                register={register3}
                                name="password3"
                                errors={{
                                    isValid: Boolean(errors3.password3)
                                }}
                                type="password"
                                options={{
                                    required: 'Campo requerido',                       
                                }}
                            />
                            <InputSelect2
                                label="Label"
                                placeholder="Placeholder"   
                                variant="inp-filled"                                          
                                name="category3"
                                errors={{
                                    isValid: Boolean(errors3.category3)
                                }}
                                control={control3}
                                data={
                                    [
                                        { id: 1, name: 'Option 1' },
                                        { id: 2, name: 'Option 2' },
                                        { id: 3, name: 'Option 3' },
                                    ]
                                }
                                options={{
                                    required: 'Campo requerido',    
                                    onChange: (e) => handleChange(e.target.value)                   
                                }}
                            />                    
                        </div>
                        <div className="w-full">
                        <InputSelect2
                                label="Label"
                                placeholder="Placeholder"   
                                variant="inp-filled"                                          
                                name="category32"
                                control={control3}
                                data={dataCategory32} 
                            />  
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}