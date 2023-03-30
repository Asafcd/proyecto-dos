//@ts-nocheck

import {Employee} from './employeeContext.ts'

export interface LockState {
    locked: Boolean
}
type AuthAction =
| { type: 'lock', payload: Employee }
| { type: 'unlock', payload: Employee }


export const authReducer = (state: LockState, action: AuthAction) => {
    switch(action.type){
        case 'toggle_lock':
            console.log(state)
            return { ...state, isLocked: !state.isLocked };

        default:
            return state;
    }
}
