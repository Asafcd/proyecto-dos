// @ts-nocheck
import React, {createContext, useContext, useState} from 'react'
import { User, UserContext } from '../../import/userContext.ts'

function ContextText2(){

    const {id, name, age, address} = useContext<User>(UserContext)

    return(
        
            <div className='HelloContainer'>
                <div className='TextContainer'>
                   <p>{id}</p>
                   <p>{name}</p>
                   <p>{age}</p>
                   <p>{address}</p>
                </div>
            </div>
        
        
    )
}
export default ContextText2