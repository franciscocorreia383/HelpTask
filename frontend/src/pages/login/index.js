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
      alert(error);
    }
  }

  return (
    <div id="container">
      <div id="loginArea">
        <div id="logo">
          <span id="logo">Logo</span>
        </div>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="inputLoginGroup">
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="inputLoginGroup">
            <label htmlFor="password">
              <span>Senha</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div id="options">
            <form>
                <button className="optionsButtons">Cadastre-se</button>
            </form>
            <form >
                <button className="optionsButtons">Esqueci minha senha</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
