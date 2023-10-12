import { useState } from "react";
import api from "../../environment/api";
import { logout} from "../../environment/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState();


  function handleLogout() {
    logout();
    navigate('/login')
  }

  async function handleGetUserAuthenticated() {
    try {
      const response = await api.get("/users");
      setUser(response.data.name);
    } catch (error) {
      navigate('/login')
    }
  }
  
  handleGetUserAuthenticated()
  return (
    <div>
      <h1>Helo {user}</h1>
      <form onSubmit={handleLogout}> 
        <button>Sair</button>
      </form>
    </div>
  );
}

export default Home;
