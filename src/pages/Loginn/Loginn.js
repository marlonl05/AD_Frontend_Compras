

import React from "react";
import { useForm } from "react-hook-form";
import "./StyLoginn.css";


function Loginn() {

    const { register, handleSubmit, formState: {
        errors } } = useForm();

    const onSubmit = (evento) => {
        console.log(evento);
    }

    return (
        <div className="divtodo1 grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="divtodo2 flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
                <div className="divimagen justify-center mb-8">
                    <img src="/logocompras.png" alt="Compras Ventas" width="100" height="100" />
                </div>
                <div className="divtitulo flex-col items-center gap-8">
                    <h1 className="textitulo font-bold text-gray-900">¡Bienvenido!</h1>

                </div>
                <div className="divparra flex-col items-center gap-8">
                    <p className="textoparra">
                        -------- Ingrese sus credenciales ---------
                    </p>
                </div>
                <div className="divtodo3 mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="divtextoe">
                            <input
                                type="email"
                                className="textoe"
                                placeholder="Correo electrónico"
                                //vaidad el campo
                                {...register("usuario", {
                                    required: {
                                        value: true,
                                        message: "El campo es requerido"
                                    }
                                })}
                            />
                            {errors.usuario && <div className="error-message">{errors.usuario.message}</div>}
                        </div>
                        
                        <div className="divtextop">
                            <input
                                type="password"
                                //className="textop"
                                className='textop'
                                placeholder="Contraseña"
                                {...register("contraseña", {
                                    required: {
                                        value: true,
                                        message: "El campo es requerido"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener al menos 8 caracteres"
                                    }
                                })}
                            />
                            {errors.contraseña && <div className="error-message">{errors.contraseña.message}</div>}
                        </div>
                        
                        <div className="divboton max-w-md mx-auto">
                            <button
                                type="submit"
                                className="boton bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"
                                variant="contained"
                                onClick={() => onSubmit()}>
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
                <img
                    src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-739.jpg?w=826&t=st=1661290496~exp=1661291096~hmac=
                    f284a9abf6658fc4278a4d2fc1b2b25c0083f1051b424e23d2885365b89e169c"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Loginn;