import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../environment/api";
import "./styles.scss";

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
      <div id="profile-container">
        <div className="profile-header">
          <span className="profile-logo">Logo</span> {/* Replace with actual logo */}
        </div>
        <div className="profile-form-container">
          <form onSubmit={handleUpdateUser}>
            <div className="profile-input-group">
              <label htmlFor="profile-name">
                <span>Nome</span>
              </label>
              <input
                type="text"
                id="profile-name"
                name="name"
                placeholder="Digite seu nome completo"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>
            <div className="profile-input-group">
              <label htmlFor="profile-email">
                <span>Email</span>
              </label>
              <input
                type="email"
                id="profile-email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="profile-input-group">
              <label htmlFor="profile-password">
                <span>Senha</span>
              </label>
              <input
                type="password"
                id="profile-password"
                name="password"
                placeholder="Digite sua senha"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="profile-input-group">
              <label htmlFor="profile-phone">
                <span>Telefone</span>
              </label>
              <input
                type="text"
                id="profile-phone"
                name="phone"
                placeholder="Digite seu telefone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
              />
            </div>
            <div className="profile-input-group">
              <label htmlFor="profile-whatsapp">
                <span>Whatsapp</span>
              </label>
              <input
                type="text"
                id="profile-whatsapp"
                name="whatsapp"
                placeholder="Digite seu whatsapp"
                onChange={(event) => setWhatsapp(event.target.value)}
                value={whatsapp}
              />
            </div>
            <div className="profile-button-container">
              <button type="submit" className="profile-button">Alterar Informações</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  

export default Profile;
