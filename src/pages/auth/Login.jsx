import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

let urlUsuarios = 'http://localhost:3000/usuarios';

const Login = () => {
    const [usuarios, setUsuarios] = useState([]); // Array para los usuarios recibidos del backend
    const [usuarioInput, setUsuarioInput] = useState(''); // Valor ingresado en el input de usuario
    const [contraseñaInput, setContraseñaInput] = useState(''); // Valor ingresado en el input de contraseña
    const [correoInput, setCorreoInput] = useState(''); // Valor ingresado en el input de correo
    let redireccion = useNavigate()

    function getUsuarios() {
        fetch(urlUsuarios)
            .then(response => response.json())
            .then(json => setUsuarios(json)) // Guardamos el array de usuarios
            .catch(error => console.log(error)); 
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    console.log(usuarios);

    function signIn() {
        if (findUser()) {
            redireccion('/')
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }

    function findUser() {
        let auth = usuarios.some((item) => item.user === usuarioInput && item.password === contraseñaInput); // Comparamos los valores ingresados con los usuarios del backend
        return auth;
    }

    return (
        <form className="form" action="">
            <section>
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input onChange={(e) => { setUsuarioInput(e.target.value) }}
                        id="usuario" type="text" />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => { setContraseñaInput(e.target.value) }}
                        id="password" type="password" />
                </div>
                <br />
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input onChange={(e) => { setCorreoInput(e.target.value) }}
                        id="correo" type="email" />
                </div>
                <br />
                <button onClick={signIn} className="button" type="button">Iniciar sesión</button>
            </section>
        </form>
    );
};

export default Login;

