//@ts-nocheck
import {EmployeeContextData} from './employeeContext.ts'

interface LockState {
    locked: Boolean
}
type AuthAction =
| { type: 'lock', payload: LockState }
| { type: 'unlock', payload: LockState }


export const authReducer = (state: Employee, action: AuthAction) => {
    switch(action.type){
        case 'lock':
            const { locked } = action.payload
            console.log(locked)
            return locked
        case 'unlock':
            const unlock = action.payload
            
            return unlock.locked

        default:
            return state;
    }
}
