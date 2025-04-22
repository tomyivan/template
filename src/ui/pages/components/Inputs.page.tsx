import { useForm } from "react-hook-form"
import { InputCollapse, Input, InputSelect, TextArea } from "../../shared"
export const InputsPage = () => {
    const { register, formState: { errors } } = useForm<{name:string}>()
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 


                    name="name"
                />
                <Input 
                    variant="inp-filled"
                    disabled
                   
                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-filled"
                    name="name"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 
                    name="name"
                />
                <Input 
                    variant="inp-filled"
                    disabled
                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-filled"

                    name="name"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 
                    name="name"
                />
                <Input 
                    variant="inp-filled"
                    disabled
                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-filled"
                    name="name"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <Input 
                    variant="inp-outline"

                    name="name"
                />
                <Input 
                    variant="inp-outline"
                    disabled

                    name="name"
                />
                <Input 
                    label="Label"
                    placeholder="Placeholder"
                    variant="inp-outline"

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
                    name="name2"
                />
                <InputSelect 
                    label="Nombres"
                    placeholder="Placeholder"                         
                    name="name1"
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
            <div className="flex flex-row justify-center gap-2">
                                
                <InputSelect
                    label="Nombres"
                    data={[
                        { id: 1, name: 'Option 1' },
                        { id: 2, name: 'Option 2' },
                        { id: 3, name: 'Option 3' },
                    ]}
                    // variant="inp-outline"                                    
                    name="name3"
                />
                <InputSelect 
                    label="Nombres"
                    placeholder="Placeholder"     
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
                    name="name4"
                />
            </div>
            <div className="w-full">
                <TextArea 
                    label="Label"
                    placeholder="Placeholder"
                    rows={4}
                    variant="inp-filled"
                    name="name"
                />
            </div>
        </div>
    )
}