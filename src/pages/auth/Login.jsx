import React from "react";
import './Login.css';





const Login = () => {
    return (
        <form className="form" action="">
            <section className="">
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" />
                </div>
                <br />
                <button className="button" type="button" >Iniciar sesión</button>
            </section>
        </form>
    )
}

export default Login