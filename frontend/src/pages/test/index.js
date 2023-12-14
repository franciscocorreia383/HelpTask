import React, { useState, useEffect } from 'react';
import './styles.scss';
import api from '../../environment/api';
import { useNavigate } from "react-router-dom";

function Modal({ onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Deadline, setDeadline] = useState('');
  const [horario, setHorario] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(title, description);
    onClose();
  };

  return (

    <estrutura>
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Deadline"
            value={Deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
          <input
          type="time"
          placeholder="Horário"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </estrutura>
  );
}

function Card({ teamName, description, onDelete, checklist, createdDate, deadline }) {
  const [checkedItems, setCheckedItems] = useState(checklist.reduce((acc, item) => {
    acc[item.id] = item.done;
    return acc;
  }, {}));

  const handleCheck = (id) => {
    setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
  };

  const handlePomodoro = () => {
    console.log("Pomodoro functionality to be implemented");
  };

  const handleEisenhower = () => {
    console.log("Eisenhower functionality to be implemented");
  };

  return (
    <div className='estrutura'>

      <div className="card">
        <div className="card-header">
          {teamName}
          <div>Created: {createdDate.toLocaleDateString()}</div>
          <div>Deadline: {deadline.toLocaleDateString()}</div>
        </div>
        <div className="card-body">
          {description}
          <ul>
            {checklist.map(item => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={checkedItems[item.id]}
                  onChange={() => handleCheck(item.id)}
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button onClick={onDelete} className="delete-card">-</button>
          <button onClick={handlePomodoro} className="pomodoro">Pomodoro</button>
          <button onClick={handleEisenhower} className="eisenhower">Eisenhower</button>
        </div>
      </div>
    </div>
  );
}

function Board() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    getCards();
    handleGetUserProfile();
    console.log("UseEffect", id);
  }, []);

  async function getCards() {
    try {
      const response = await api.get("/tasks");
      setCards(response.data)
      console.log(cards);
    } catch (error) {
      alert(error);
    }
  }

  function cardDetails(index) {
    console.log(index);
    navigate(`/task/${index}`)
  }

  async function handleGetUserProfile() {
    try {
      const response = await api.get("/users");
      setId(response.data.id);
      console.log(id);
    } catch (error) {
      alert(error);
    }
  }

  async function addCard(title, description) {
    const newCard = {
      user: 1,
      Title: title,
      description,
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
      predict: "00:30",
      files: ""
    };

    try {
      const response = await api.post("/tasks", newCard);
      getCards();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = index => {
    const updatedTeams = teams.filter((_, teamIndex) => teamIndex !== index);
    setTeams(updatedTeams);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            {card.Title}
          </div>
          <div className="card-body">
            {card.description}
          </div>
          <div className="card-footer">
            <button onClick={() => cardDetails(card.id)}>Detalhes</button>
          </div>
        </div>
      ))}


     <div className='buttonLocal'> <button onClick={() => setIsModalOpen(true)}>+ Add a card</button></div> 

      {isModalOpen && (
        <>
          <div className="overlay"></div>
       <div className='modalLocal'>  <Modal onSave={addCard} onClose={() => setIsModalOpen(false)} /> </div> 
        </>
      )}

    </div>
  );
}

function Test() {
  return (


    <div>
      <div class="navbar">
        <div class="navbar-logo">

        </div>
        <nav>
          <a href="/profile" class="navbar-item">Editar usuario</a>
          <a href="/" class="navbar-item">Sair</a>
          
        </nav>
      </div>
      <div className='estrutura'>
        <Board />
      </div>
    </div>
  );
}

export default Test;
