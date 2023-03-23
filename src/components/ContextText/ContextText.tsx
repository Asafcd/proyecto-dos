// @ts-nocheck
import React, { useEffect, useState} from 'react'
import { User, UserContext } from '../../import/userContext.ts'
import ContextText2 from './ContextText2.tsx'

export function ContextText(){

    const [user, setUser] = useState<User>({
        id: 1234,
        name: 'Asaf',
        age: 31,
        address: '-*******'
    })

    useEffect(() =>{
        setTimeout(() =>setUser({...user, age:35}), 3000)
    }, [user])

    return(
        <UserContext.Provider value={user}>
            <ContextText2/>
        </UserContext.Provider>
        
    )
}

export default ContextText