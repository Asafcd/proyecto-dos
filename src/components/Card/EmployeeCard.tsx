//@ts-nocheck
import React, { useContext, useState, useEffect } from "react";
import {Employee,
  EmployeeContext,
  EmployeeContextData,
} from "../../import/employeeContext.ts";

function EmployeeCard() {
  const { data, locked} = useContext<EmployeeContextData>(EmployeeContext);
  
  const [employeeInfo, setEmployeeInfo] = useState<Employee>(data)

  const [isLocked, setIsLocked] = useState(locked)

  
  const { fullname, dob, position, email, phone, photo } = employeeInfo
  console.log(locked)

  useEffect(() => {
    
    if(!isLocked){
      setEmployeeInfo(data)
    }
    
  },[locked]);

  return (  
    <>
      
        <div className="card">
            <div className='conteiner'>
            <div >
            <h3>Nombre: </h3>
            <p>{fullname}</p>
            <h3>Fecha de nacimiento: </h3>
            <p>{dob}</p>
            <h3>Puesto: </h3>
            <p>{position}</p>
            <h3>E-mail: </h3>
            <p>{email}</p>
            <h3>Número de teléfono</h3>
            <p>{phone}</p>
           
          </div>
          <div className='divCentrar'>
              {photo && (
                <img className="img" src={URL.createObjectURL(photo)} />
              )}
            </div>
            </div>
         
        </div>
      
    </>
  );
}

export default EmployeeCard;
