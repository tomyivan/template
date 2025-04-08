import { useState, useRef, useEffect } from "react";
import { DataSelect } from "../../../domain";
import { FieldValues, RegisterOptions, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface InputSelectProps<T extends FieldValues> {
    data: DataSelect[];
    label?: string;
    placeholder?: string;
    variant?: "inp-outline" | "inp-filled" | "inp-normal";
    disabled?: boolean;
    register: UseFormRegister<T>;
    name: keyof T;
    options?: RegisterOptions<T[keyof T]>;
    errors: any;
    setValue: UseFormSetValue<T>;
}

export const InputSelect = <T extends FieldValues>({
    data,
    label,
    placeholder,
    variant = "inp-normal",
    disabled = false,
    register,
    name,
    options,
    errors,
    setValue
}: InputSelectProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredData, setFilteredData] = useState<DataSelect[]>(data);
    const [ selectedItem, setSelectedItem ] = useState<DataSelect | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const dropdownRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del dropdown

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        const newData = data.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        if( !isOpen ) {
            setIsOpen(true);
        }
        setFilteredData(newData);
        setSelectedItem( { id: -1, name: value } )
        setHighlightedIndex(-1);
    };

    const selectItem = (item: DataSelect) => {
        setSelectedItem(item);
        // setText(item.name);
        setIsOpen(false);
        setFilteredData(data);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen || filteredData.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1
            );
        } else if (e.key === "Enter" && highlightedIndex >= 0) {
            e.preventDefault();
            selectItem(filteredData[highlightedIndex]);
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    const handleBlur = () => {
        const valid = filteredData.some((item) => item.name === selectedItem?.name);        
        !valid && setSelectedItem(null);
        setValue(name as any, selectedItem as any);
    };

    return (
        <div ref={dropdownRef} className="relative w-full">
            {label && (
                <label className={`block text-gray-700 font-semibold mb-2 ${errors[name] && 'text-red-500'}`} htmlFor="input">
                    {label}
                </label>
            )}
            <input
                type="text"
                className={`${variant} ${disabled && "cursor-not-allowed bg-gray-200 opacity-40"} w-full ${errors[name] && '!border-red-500'}`}
                placeholder={placeholder}
                disabled={disabled}
                value={selectedItem ? selectedItem.name : ""}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
                {...register(name as any, { ...options as any, 
                    onChange: handleChange ,  
                    onBlur: handleBlur 
                })}
                autoComplete="off"
            />
            {isOpen && filteredData.length > 0 && (
                <ul className="absolute z-10 w-full bg-gray-50 max-h-96 overflow-auto text-gray-700 border border-gray-300 rounded-md shadow-lg">
                    {filteredData.map((item, index) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer p-2 hover:bg-gray-200 ${highlightedIndex === index && "bg-gray-100"}`}
                            onClick={() => selectItem(item)}
                            data-id={item.id}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
            {errors[name] && (
                <small className="text-red-600 font-semibold">
                    {errors[name]?.message || "Este campo es requerido"}
                </small>
            )}
        </div>
    );
};
