import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Register.css'
import Swal from 'sweetalert2'
let urlUsuarios = 'http://localhost:3000/usuarios'

const Register = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [usuarios, setUsuarios] = useState('')
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

    function crearUsuario() {
        let nuevoUsuario = {
            user: usuario,
            password,
            name: nombre,
            email: correo,
            hobbies
        }
        fetch(urlUsuarios, {
            method: 'POST',
            body: JSON.stringify(nuevoUsuario)
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    function buscarUsuario() {
        let auth = usuarios.some((item) => item.user == usuario || item.email == correo)
        return auth
    }

    function registrarUsuario() {
        if (buscarUsuario()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario y/o correo ya existe en la base de datos"
            });
        } else {
            crearUsuario()
            let timerInterval;
            Swal.fire({
                title: "Auto close alert!",
                html: "I will close in <b></b> milliseconds.",
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
                    redireccion('/login')
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        }
    }

    return (
        <section className="container">
            <form>
                <input onChange={(e) => { setUsuario(e.target.value) }} placeholder="Usuario" type="text" />
                <input onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" type="text" />
                <input onChange={(e) => { setNombre(e.target.value) }} placeholder="Nombre" type="text" />
                <input onChange={(e) => { setCorreo(e.target.value) }} placeholder="Correo" type="text" />
                <input onChange={(e) => { setHobbies(e.target.value) }} placeholder="Hobbies" type="text" />
                <div>
                    <button onClick={registrarUsuario} type="button">Registrar</button>
                </div>
            </form>
        </section>
    )
}

export default Register