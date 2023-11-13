import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginHandler = () => {
    setShowLogin(!showLogin);
  };

  const task = [];

  return (
    <div className="App">
      {showLogin === true && (
        <button type="button" onClick={showLoginHandler}>
          Iniciar sesión
        </button>
      )}
      {showLogin === false && <Login task={task} />}
      {showLogin === false && (
        <button type="button" onClick={showLoginHandler}>
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default App;