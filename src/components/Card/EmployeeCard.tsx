//@ts-nocheck
import React, { useContext, useState } from "react";
import {
  EmployeeContext,
  EmployeeContextData,
} from "../../import/employeeContext.ts";

function EmployeeCard() {
  const {
    data: { fullname, dob, position, email, phone, photo },
    locked,
  } = useContext<EmployeeContextData>(EmployeeContext);

  return (
    <>
      {locked == false && (
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
            <h3>Número de teléfono: {phone}</h3>
            <p>{phone}</p>
           
          </div>
          <div className='divCentrar'>
              {photo && (
                <img className="img" src={URL.createObjectURL(photo)} />
              )}
            </div>
            </div>
         
        </div>
      )}
    </>
  );
}

export default EmployeeCard;
