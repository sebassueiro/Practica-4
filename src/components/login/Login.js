import React, { useRef, useState } from 'react'
import List from '../list/List';

const Login = ({task}) => {
    const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userRef = useRef(null);
  const userNameHandler = (event) => {
    setUserName(event.target.value);
    if (event.target.value.includes("o") || event.target.value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
      userRef.current.focus();
      userRef.current.style.borderColor = "red";
      userRef.current.style.outline = "none";
    } else {
      userRef.current.focus();
      userRef.current.style.borderColor = "black";
      userRef.current.style.outline = "none";
    }
  };

  const loggedIn = () => {
    setIsLoggedIn(true);
  };

  const signInHandler = () => {
    if (
      userName.length <= 0 ||
      userName.includes("O") ||
      userName.includes("o")
    ) {
      alert("¡Usuario inválido para registrarse!");
    } else {
      alert(`¡Usuario registrado correctamente! ${userName}`);
      loggedIn(isLoggedIn);
    }
  };
  return (
    <div>
      {isLoggedIn === false && (
        <div>
          <label>Ingrese su username: </label>
          <input ref={userRef} type="text" onChange={userNameHandler}></input>
          <button onClick={signInHandler}>Iniciar sesion</button>
          <p>{userName}</p>
        </div>
      )}
      {isLoggedIn === true && <List task={task} />}
    </div>
  )
}

export default Login
