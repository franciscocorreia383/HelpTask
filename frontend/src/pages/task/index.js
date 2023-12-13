import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../environment/api";
import "./styles.scss";

function Task() {
  const navigate = useNavigate();
  let id = "";

  useEffect(() => {
    handleGetUserProfile();
  }, []);

  async function handleGetUserProfile() {
    try {
      const response = await api.get("/users");
      id = response.data.id;
    } catch (error) {
      alert(error);
    }
  }

    try {
      api.put("/profile", data);
      alert("Salvo")
    } catch (error) {
      alert(error);
    }
  }

    return (
      <div>

      </div>
    );
  }
  

export default Task;
