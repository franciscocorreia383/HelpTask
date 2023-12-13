import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../environment/api";
import "./styles.scss";
import Checklist from "../../components/checklist";
import Appointments from "../../components/appointments";

function Task() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [idTask, setIdTask] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();
  const [predict, setPredict] = useState();
  const [files, setFiles] = useState();
  const [finishedAt, setFinishedAt] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();

  async function handleBuscarTask(){
    try {
      const response = (await api.get(`tasks/${id}`)).data;
      
      setIdTask(response.id);
      setTitle(response.Title);
      setDescription(response.description);
      setDeadline(response.deadline);
      setPredict(response.predict);
      setFiles(response.files);
      setFinishedAt(response.finishedAt);
      setCreatedAt(response.created_at);
      setUpdatedAt(response.updated_at);

    } catch (error) {
      console.log(error);
    }
  }

  function formatDate(deadline){
    const date = new Date(deadline);

    const getFormattedComponent = (component, length) => {
      return component.toString().padStart(length, '0');
    };

    const day = getFormattedComponent(date.getDate(), 2);
    const month = getFormattedComponent(date.getMonth() + 1, 2);
    const year = date.getFullYear();
    const hours = getFormattedComponent(date.getHours(), 2);
    const minutes = getFormattedComponent(date.getMinutes(), 2);

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  function finalizado(finishedAt){
    if (finishedAt) {
      return formatDate(finishedAt)
    }
    return "Em Aberto"
  }

  useEffect(() => {
    handleBuscarTask();
  }, []);
  
    return (
        <div className="app">
        <header className="header">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{predict}</p>
            <p>{formatDate(deadline)}</p>
            <p>{formatDate(createdAt)}</p>
            <p>{finalizado(finishedAt)}</p>
        </header>
  
        <div className="container">
          <main className="main-content">
            <Checklist/>
            <Appointments/>
          </main>
  
          <aside className="sidebar">
            <h3>Pomodoro</h3>
            <button>Começar</button>
          </aside>
        </div>
      </div>
    );
  }
  

export default Task;
