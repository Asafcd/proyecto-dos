import  {createContext} from 'react'

export interface User{
    id: number,
    name: string,
    age: number,
    address: string
}

export const UserContext = createContext<User>({
    id: 1234,
    name: 'xxxxx',
    age: 31,
    address: '-*******'
})
