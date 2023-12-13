import React, { useState } from 'react';
import "./styles.scss";

function Appointments(){
    const [tipoComentario, setTipoComentario] = useState('Pausa');
    const [resumo, setResumo] = useState('');
    const [comentarios, setComentarios] = useState([]);
  
    const handleTipoChange = (e) => {
      setTipoComentario(e.target.value);
    };
  
    const handleResumoChange = (e) => {
      setResumo(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Adicione o novo comentário à lista de comentários
      setComentarios([...comentarios, { tipo: tipoComentario, resumo }]);
      // Limpe os campos após a submissão
      setTipoComentario('Pausa');
      setResumo('');
    };
  
    return (
      <div className="Appointment">
        <h1>Comentários da Atividade</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Tipo de Comentário:
            <select value={tipoComentario} onChange={handleTipoChange}>
              <option value="Pausa">Pausa</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Concluido">Concluido</option>
            </select>
          </label>
           <label>
            Resumo:
            <input type="text" value={resumo} onChange={handleResumoChange} />
          </label>
          <button type="submit">Adicionar Comentário</button>
        </form>
        <h2>Comentários:</h2>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>
              <strong>Tipo:</strong> {comentario.tipo}, <strong>Resumo:</strong> {comentario.resumo}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Appointments;