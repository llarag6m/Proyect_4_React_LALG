export const mandatoryInputsPass = {

    required:{  
        value: true, 
        message: "Campo requerido",
    }, 

    pattern:{
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        message: "La contraseña no cumple con el formato de contraseña",
    },
}
