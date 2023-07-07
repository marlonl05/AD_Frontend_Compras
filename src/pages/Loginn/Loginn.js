import React from "react";
import "./StyLoginn.css";


function Loginn() {
    return (
        <div className="divtodo1 grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="divtodo2 flex-col items-center justify-center bg-gray-100 rounded-tl-lg rounded-bl-lg p-4">
                <div className="divimagen">
                    <img src="/logo.png" alt="Compras Ventas" width="100" height="100" />
                </div>
                <div className="divtitulo flex-col items-center gap-8">
                    <h1 className="textitulo font-bold text-gray-900">Bienvenido</h1>

                </div>
                <div className="divparra">
                    <p className="textoparra relative text-gray-500 bg-gray-100 before:max-w-[50px] md:before:max-w-[120px] 
                    before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%]
                     after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] 
                     after:-right-[60px] md:after:-right-[140px]">
                        ________________ Ingrese sus credenciales __________________
                    </p>
                </div>
                <div className="divtodo3 mb-8">
                    <form>
                        <div className="divtextoe">
                            <input
                                type="email"
                                className="textoe py-2 px-4 rounded-lg outline-none"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div className="divtextop justify-center mb-6">
                            <input
                                type="password"
                                className="textop max-w-md py-2 px-4 rounded-lg outline-none"
                                placeholder="Password"
                            />
                        </div>

                        <div className="divboton max-w-md mx-auto">
                            <button
                                type="submit"
                                className="boton bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors">
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