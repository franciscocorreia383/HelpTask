import { useState } from "react";

function Register() {
    const [name, setName] = useState()


  return (
    <div id="container">
      <span>Logo</span>
      <form>
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
            <span>Nome</span>
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
            <span>Nome</span>
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
            <span>Nome</span>
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
            <span>Nome</span>
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
            <span>Nome</span>
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
       
      </form>
    </div>
  );
}
