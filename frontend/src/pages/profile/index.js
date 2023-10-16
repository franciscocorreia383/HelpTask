import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../environment/api";

function Profile() {
  const navigate = useNavigate();
  let id = "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    handleGetUserProfile();
  }, []);

  async function handleGetUserProfile() {
    try {
      const response = await api.get("/users");
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setWhatsapp(response.data.whatsapp);
      id = response.data.id;
    } catch (error) {
      alert(error);
    }
  }

  async function handleUpdateUser(e) {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      whatsapp: whatsapp,
    };

    try {
      api.put("/profile", data);
      alert("Salvo")
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <div>
        <span>Logo</span>
      </div>
      <div>
        <form onSubmit={handleUpdateUser}>
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
              <span>Telefone</span>
            </label>
            <input
              type="text"
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
              type="text"
              id="whatsapp"
              name="whatsapp"
              placeholder="Digite seu whatsapp"
              onChange={(event) => setWhatsapp(event.target.value)}
              value={whatsapp}
            />
          </div>
          <div>
            <button type="submit">Alterar Informações</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
