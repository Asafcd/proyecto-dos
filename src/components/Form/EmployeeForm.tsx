//@ts-nocheck
import React, { FormEvent, FormEventHandler, useReducer, useState , useContext} from 'react'
import useForm from '../../hooks/useForm.ts'
import { EmployeeContext, employeeInitialState, Employee, EmployeeContextData } from '../../import/employeeContext.ts'
import { authReducer, LockState } from '../../import/useReducer.ts'
import EmployeeCard from '../Card/EmployeeCard.tsx'
import PositionMenu from './PositionMenu.tsx'

function EmployeeForm() {
    const [data, handleChange] = useForm<Employee>(employeeInitialState)    
    const {fullname, dob, email, phone, photo, position} = data

    const lockedState: LockState = { locked: false };
    const [state, dispatch] = useReducer(authReducer, lockedState)

    const [phoneError, setPhoneError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [isLocked, setIsLocked] = useState<boolean>(false)

    const contextData: EmployeeContextData = { data, handleChange, state} 

    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let phoneErrorMsg = '';
        let emailErrorMsg = '';
        
        if (!phone) {
        phoneErrorMsg = 'El número de teléfono es obligatorio';
        } else if (!/^\d{10}$/.test(phone)) {
        phoneErrorMsg = 'El número de teléfono no es válido';
        }else{ state.isLocked ? setIsLocked(false) : setIsLocked(true);}

        setPhoneError(phoneErrorMsg)

        if (!email) {
        emailErrorMsg = 'La dirección de correo electrónico es obligatoria';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailErrorMsg = 'La dirección de correo electrónico no es válida';
        }else {state.isLocked ? setIsLocked(false) : setIsLocked(true);}

        setEmailError(emailErrorMsg)
        dispatch({type: 'toggle_lock'})
    };

    const lockMessage = isLocked ? "La tarjeta de empleado se ha generado y ya no puede ser editada." : "La tarjeta de empleado está desbloqueada y se puede editar.";
    
    const handleChangeLocked = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isLocked) {
            handleChange(e);
        }
    } 


    return(
            
            <EmployeeContext.Provider value = {contextData}>
            <div className='txt'>
                <p>{lockMessage}</p>
            </div>
            <div className='conteiner'>
                <div>
                <form onSubmit={handleSubmit} className='form'>
                <label> Nombre completo: 
                    <br></br>
                    <input
                        type='text'
                        name='fullname'
                        value={fullname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <label> Fecha de nacimiento: 
                <br></br>
                    <input
                        type='date'
                        name='dob'
                        value={dob}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <PositionMenu/>

                <label>
                    E-mail:
                    <br></br>
                    <input 
                        required='true'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                    /> 
                    <br />
                    <span style={{ color: "red" }}>{emailError}</span>
                    
                </label>
                <br/>
                <label>Telefono:
                <br></br>
                    <input
                        type='tel'
                        name='phone'
                        value={phone}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <span style={{ color: "red" }}>{phoneError}</span>
                    
                    
                </label>
                <br/>
                Foto de perfil
                <br></br>
                <div className='file'>
                <input
                    type='file'
                    accept="image/png, image/gif, image/jpeg"
                    name='photo'
                    
                    
                    onChange={handleChange}
                />
                </div>
               
                <br></br>
                <br></br>
                <button className={state.isLocked ? "btndesbloq" : "btnbloquear"} onClick={handleSubmit}>{state.isLocked ? "Desbloquear" : "Bloquear"}</button>
                
            </form>
                </div>
                <div>
                <EmployeeCard/>
                </div>
            
            </div>
            
            
        </EmployeeContext.Provider>
        
        
    )
}

export default EmployeeForm