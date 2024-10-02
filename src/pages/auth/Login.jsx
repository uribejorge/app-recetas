import { useState } from "react";
import React from "react";
import './Login.css';


const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [Contraseña, setContraseña] = useState('')
    const [Correo, setCorreo] = useState('')

    console.log(usuario)
    function signIn() {
        if (usuario == 'jorge' && Contraseña == '123456') {
            alert('inicio de sesion correcto')
        }

    }
    return (
        <form className="form" action="">
            <section className="">
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input onChange={(e) => { setUsuario(e.target.value) }}
                        id="usuario" type="text" />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => { setContraseña(e.target.value) }}
                        id="password" type="text" />
                </div>
                <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => { setCorreo(e.target.value) }}
                        id="password" type="text" />
                <br />
                <button onClick={signIn} className="button" type="button" >Iniciar sesión</button>
            </section>
        </form>
    )
}

export default Login