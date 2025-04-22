import { DataSelect } from "../input/input";

export interface FormTest {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    category: DataSelect
}
export interface FormTestDefault {
    id2: number;
    name2: string;
    email2: string;
    password2: string;
    confirmPassword2: string;
    category2: DataSelect
}
export interface FormTestSelect {
    id3: number;
    name3: string;
    email3: string;
    password3: string;
    confirmPassword3: string;
    category3: DataSelect
    category32: DataSelect
}