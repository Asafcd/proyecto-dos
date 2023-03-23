import React, {useEffect, useReducer} from "react";

interface AuthState {
    validating: Boolean,
    token: string |null,
    name: string,
    userName: string
}

interface LoginPayload {
    userName: string,
    name:string
}

type AuthAction =
| { type: 'logout' }
| { type: 'login', payload: LoginPayload }

const initialState: AuthState = {
    validating: true,
    token: null,
    name: '',
    userName:''
}

const authReducer = (state: AuthState, action: AuthAction) => {
    switch(action.type){
        case 'logout':
            return{
                ...initialState,
                validating: false
            }
        case 'login':
            const {name, userName} = action.payload
            return{
                name,
                userName,
                validating:false,
                token: 'ABC123'
            }
        default:
            return state;
    }
}

function ReducerTest(){
    const [{name, token, validating, userName}, dispatch] = useReducer(authReducer, initialState)

    const login = () =>{
        const payload ={
            name:'Asaf',
            userName:"eisaf",
        }
        dispatch({type: 'login', payload})
    }
    const logout = () => dispatch({type: 'logout'})
    useEffect(()=>{
        //setTimeout(logout 3000)
        setTimeout(login, 3000)
          
    },[])
    return(
        <div>
            
            <br/>
            {validating && <h1> Validating...</h1>}
            {!validating && !token && <h1> User Logout!</h1>}
            {!validating && token && <h1> Welcome user {name} </h1>}
        </div>
    )
}

export default ReducerTest