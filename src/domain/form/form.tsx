import { DataSelect } from "../input/input";

export interface FormTest {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    category: DataSelect
}