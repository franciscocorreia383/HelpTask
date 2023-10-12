import { useState } from "react";
import api from "../../environment/api";

function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function handleCreateUser(event) {
    if (password != confirmPassword) {
      throw new Error("As senhas não conferem!");
    }

    const body = {
        name:name,
        userName:userName,
        email:email,
        password:password,
        phone:phone,
        whatsapp:whatsapp
    };

    try {
        
    } catch (error) {
        alert("Erro")
    }

  }

  return (
    <div id="container">
      <span>Logo</span>
      <form onSubmit={handleCreateUser}>
        <div>
          <label>
            <span>Nome</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>
            <span>Nome de Usuário</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite seu nome de usuário"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />
        </div>
        <div>
          <label>
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
        <div>
          <label>
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
          <label>
            <span>Confirmar Senha</span>
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirme sua senha"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />
        </div>
        <div>
          <label>
            <span>Telefone</span>
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Digite seu telefone"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </div>
        <div>
          <label>
            <span>Whatsapp</span>
          </label>
          <input
            type="number"
            id="whatsapp"
            name="whatsapp"
            placeholder="Digite seu whatsapp"
            onChange={(event) => setWhatsapp(event.target.value)}
            value={whatsapp}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
