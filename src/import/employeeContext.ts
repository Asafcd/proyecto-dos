import { createContext, ChangeEventHandler } from "react"

export interface EmployeeForm {
    username: string,
    fullname: string,
    description: string,
    position: string,
    role: number
}

export const employeeInitialState: EmployeeForm = {
    username: '',
    fullname: '',
    description: '',
    position: '',
    role: 1
}

export interface EmployeeContextData {
    handleChange: ChangeEventHandler<HTMLInputElement> | null,
    data: EmployeeForm
}



export const EmployeeContext = createContext<EmployeeForm>(employeeInitialState)


