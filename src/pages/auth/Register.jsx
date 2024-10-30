import { useEffect, useState } from "react";
import './Register.css'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const urlUsuarios = 'http://localhost:3000/usuarios'; // Define la URL para fetch

const Register = () => {
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar usuarios
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [hobbies, setHobbies] = useState('');
    let redireccion = useNavigate()

    function getUsuarios() {
        fetch(urlUsuarios)
            .then(response => response.json())
            .then(json => setUsuarios(json))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    function crearUsuario() {
        let nuevoUsuario = {
            username,
            password,
            confirmPassword,
            name,
            email,
            phone,
            hobbies
        };

        fetch(urlUsuarios, {
            method: 'POST',
            body: JSON.stringify(nuevoUsuario)

        })
            .then(response => {
                console.log(response)


            })
            .catch(error => console.log(error))



    }

    function buscarUsuarios() {
        return usuarios.some((item) => item.username === username && item.email === email);
    }
    

    function registarUsuario() {
        if (buscarUsuarios()) {
            alert('Usuario y/o correo ya existe en la base de datos');
        } else {
            crearUsuario();
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
        <form>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Usuario"
                type="text"
            />
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Correo electrónico"
                type="email"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Contraseña"
                type="password"
            />
            <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirmar contraseña"
                type="password"
            />
            <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Número de teléfono"
                type="tel"
            />
            <input
                onChange={(e) => setHobbies(e.target.value)}
                value={hobbies}
                placeholder="Hobbies"
                type="text"
            />
            <button type="button" onClick={registarUsuario}>Registrarse</button>
        </form>
    );
};

export default Register;
