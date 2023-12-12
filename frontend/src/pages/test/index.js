import React, { useState } from 'react';
import './styles.scss';

function Card({ teamName, children, onAdd, onDelete }) {
  return (
    <div className="card">
      <div className="card-header">
        {teamName}
      </div>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer">
        <button onClick={onAdd} className="add-card">+ Add a card</button>
        <button onClick={onDelete} className="delete-card">Delete this card</button>
      </div>
    </div>
  );
}

function Role({ title, name }) {
  return (
    <div className="role">
      <span className="title">{title}</span>
      <span className="name">{name}</span>
    </div>
  );
}

function Board() {
  const [teams, setTeams] = useState([
    { name: "Team 1", roles: [{ title: "Dev Mgr", name: "First Name, Last Name" }] },
    // Add more initial teams if needed
  ]);

  const addCard = () => {
    setTeams([...teams, { name: `Team ${teams.length + 1}`, roles: [] }]);
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
          onAdd={addCard} 
          onDelete={() => deleteCard(index)}>
          {team.roles.map((role, roleIndex) => (
            <Role key={roleIndex} title={role.title} name={role.name} />
          ))}
        </Card>
      ))}
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
