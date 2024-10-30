import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'
import './Login.css';

let urlUsuarios = 'http://localhost:3000/usuarios';

const Login = () => {
    const [usuarios, setUsuarios] = useState([]); // Array para los usuarios recibidos del backend
    const [usuarioInput, setUsuarioInput] = useState(''); // Valor ingresado en el input de usuario
    const [contraseñaInput, setContraseñaInput] = useState(''); // Valor ingresado en el input de contraseña
    const [correoInput, setCorreoInput] = useState(''); // Valor ingresado en el input de correo
    let redireccion = useNavigate();

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
            let timerInterval;
Swal.fire({
  title: "esta a punto a punto de ser redireccionado",
  html: "esta ventana se cerrara en <b><b> milisegundos",
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
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
            redireccion('/');
            
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
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
                    <input 
                        onChange={(e) => setUsuarioInput(e.target.value)}
                        value={usuarioInput}
                        id="usuario" 
                        type="text" 
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        onChange={(e) => setContraseñaInput(e.target.value)}
                        value={contraseñaInput}
                        id="password" 
                        type="password" 
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="correo">Correo</label>
                    <input 
                        onChange={(e) => setCorreoInput(e.target.value)}
                        value={correoInput}
                        id="correo" 
                        type="email" 
                    />
                </div>
                <br />
                <button onClick={signIn} className="button" type="button">Iniciar sesión</button>
                <Link to="/register">¿No tiene cuenta?</Link>
            </section>
        </form>
    );
};

export default Login;

