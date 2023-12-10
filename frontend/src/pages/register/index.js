import { useState } from "react";
import "./styles.scss";
import api from "../../environment/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function returnLogin(){
    navigate('/')
  }

  async function handleCreateUser(event) {
    if (password !== confirmPassword) {
      throw new Error("As senhas não conferem!");
    }

    const data = {
        name:name,
        userName:userName,
        email:email,
        password:password,
        phone:phone,
        whatsapp:whatsapp
    };

    try {
        api.post('/register', data)
        returnLogin()
    } catch (error) {
        alert("Erro")
    }

  }

    return (
      <div id="register-container">
        <div className="register-header">
          <span className="register-logo" onClick={returnLogin}>Help Task</span>
        </div>
        <form id="register-form" onSubmit={handleCreateUser}>
          <div className="register-input-group">
            <label htmlFor="register-name">
              <span>Nome</span>
            </label>
            <input
              type="text"
              id="register-name"
              name="name"
              placeholder="Digite seu nome completo"
              required
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-username">
              <span>Nome de Usuário</span>
            </label>
            <input
              type="text"
              id="register-username"
              name="username"
              placeholder="Digite seu nome de usuário"
              required
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-email">
              <span>Email</span>
            </label>
            <input
              type="email"
              id="register-email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-password">
              <span>Senha</span>
            </label>
            <input
              type="password"
              id="register-password"
              name="password"
              placeholder="Digite sua senha"
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-confirm-password">
              <span>Confirmar Senha</span>
            </label>
            <input
              type="password"
              id="register-confirm-password"
              name="confirm_password"
              placeholder="Confirme sua senha"
              required
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-phone">
              <span>Telefone</span>
            </label>
            <input
              type="text"
              id="register-phone"
              name="phone"
              placeholder="Digite seu telefone"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
            />
          </div>
          <div className="register-input-group">
            <label htmlFor="register-whatsapp">
              <span>Whatsapp</span>
            </label>
            <input
              type="text"
              id="register-whatsapp"
              name="whatsapp"
              placeholder="Digite seu whatsapp"
              onChange={(event) => setWhatsapp(event.target.value)}
              value={whatsapp}
            />
          </div>
          <div className="register-button-container">
            <button type="submit" className="register-button">Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
  

export default Register;
