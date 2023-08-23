export const mandatoryInputsEmail = {

    required:{  
        value: true, 
        message: "Campo requerido",
    }, 

    pattern:{
        value: /[a-z0-9]+@[a-z]+[a-z]{2,3}/,
        message: "El correo no es valido",
    },
}