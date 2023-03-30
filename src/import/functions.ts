export const validate = (phone, email) => {
    let phoneErrorMsg = '';
    let emailErrorMsg = '';
  
    if (!phone) {
      phoneErrorMsg = 'El número de teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(phone)) {
      phoneErrorMsg = 'El número de teléfono no es válido';
    }
  
    if (!email) {
      emailErrorMsg = 'La dirección de correo electrónico es obligatoria';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailErrorMsg = 'La dirección de correo electrónico no es válida';
    }
    
    return [phoneErrorMsg, emailErrorMsg]
    
};