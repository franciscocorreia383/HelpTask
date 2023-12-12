import React, { useState } from 'react';
import './styles.scss';

function Modal({ onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(title, description);
    onClose();
  };

  return (
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
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
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
  );
}

function Board() {
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCard = (title, description) => {
    const newCard = {
      name: title, 
      description, 
      checklist: [{ id: 1, text: "Sample Task", done: false }], 
      createdDate: new Date(), 
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)) // Set a deadline 7 days from now
    };
    setTeams([...teams, newCard]);
  };

  const deleteCard = index => {
    const updatedTeams = teams.filter((_, teamIndex) => teamIndex !== index);
    setTeams(updatedTeams);
  };

  return (
    <div className="board">
      {teams.map((team, index) => (
        <Card 
          key={index} 
          teamName={team.name} 
          description={team.description} 
          checklist={team.checklist} 
          createdDate={team.createdDate} 
          deadline={team.deadline} 
          onDelete={() => deleteCard(index)} 
        />
      ))}
      <button onClick={() => setIsModalOpen(true)}>+ Add a card</button>
      {isModalOpen && (
        <>
          <div className="overlay"></div>
          <Modal onSave={addCard} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </div>
  );
}

function Test() {
  return (
    <div>
      <h1>Team Layout</h1>
      <Board />
    </div>
  );
}

export default Test;
