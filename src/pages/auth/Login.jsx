import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'
let urlUsuarios = 'http://localhost:3000/usuarios'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [usuarios, setUsuarios] = useState([])
    let redireccion = useNavigate()

    function getUsuarios() {
        fetch(urlUsuarios)
            .then(response => response.json())
            .then(json => setUsuarios(json))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getUsuarios()
    }, [])
    
    console.log(usuarios)
    function signIn() {
        // console.log(findUser())
        if (findUser()) {
            let timerInterval;
            Swal.fire({
                title: "Está a punto de ser redireccionado",
                html: "Esta eventana se cerrará en <b></b> milisegundos.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    redireccion('/')
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario y/o contraseña incorrecto"
            });
        }
    }
    function findUser() {
        let auth = usuarios.some((item) => item.user == usuario && item.password == contrasena)
        return auth
    }
    return (
        <form className="form" action="">
            <section>
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input onChange={(e) => { setUsuario(e.target.value) }} id="usuario" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => { setContrasena(e.target.value) }} id="password" type="text" />
                </div>
                <button onClick={signIn} className="button" type="button">Iniciar Sesión</button>
                <Link to="/register">¿No tiene cuenta?</Link>
            </section>
        </form>
    )
}

export default Login