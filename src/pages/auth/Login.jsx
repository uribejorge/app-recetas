import { useState } from "react";
import './Login.css';
let urlUsuarios = 'http://localhost:3000/usuarios'

const Login = () => {
    const [usuario, setUsuario] = useState('')/* strimg */
    const [Contraseña, setContraseña] = useState('')/* strimg */
    const [Correo, setCorreo] = useState('')/* strimg */
    const [usuarios, setUsuarios] = useState([])/*  arreglo vasido*/

    function getUsuarios () {
        fetch('http://localhost:3000/usuarios')
        .then(Response => Response.json)
    }

    console.log(usuario)
    function signIn() {
        if (usuario == 'jorge' && Contraseña == '123456') {
            alert('inicio de sesion correcto')
            .then(json => console.log(json))
        }

        getUsuarios()

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