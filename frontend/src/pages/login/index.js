import { useState } from "react";
import "./styles.scss";
import api from "../../environment/api";
import { login } from "../../environment/auth";
import { useNavigate  } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    try {

      const response = await api.post("/sessions", body);
      login(response.data.token);
      console.log(response.data);
      navigate('/')

    } catch (error) {
      alert("Email ou Senha invalidos!");
    }
  }

  function handleRegister() {
    navigate('/register')
  }

 // Login Component
  return (
    <div id="login-container">
      <div id="login-area">
        <div className="login-logo">
          <span className="login-logo-text">Help Task</span>
        </div>
        <form id="login-form" onSubmit={handleLogin}>
          <div className="login-input-group">
            <label htmlFor="login-email">
              <span>Email </span>
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="login-password">
              <span>Senha </span>
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              required
              placeholder="Digite sua senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="login-button-container">
            <button type="submit" className="button-orange">Entrar</button>
          </div>
        </form>
        <div id="login-options">
            <form onSubmit={handleRegister}>
                <button className="optionsButtons button-orange">Cadastre-se</button>
            </form>
            <form >
                <button className="optionsButtons forget-password">Esqueci minha senha</button>
            </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
