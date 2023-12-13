import { useState } from "react";
import "./styles.scss";

function Checklist() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  function handleToggleCheck(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleAddItem() {
    if (newItemText.trim() !== '') {
      const newItem = {
        id: items.length + 1,
        text: newItemText,
        checked: false,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText('');
    }
  }

  function handleRemoveItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const calculateProgress = () => {
    const checkedItems = items.filter((item) => item.checked);
    const progress = (checkedItems.length / items.length) * 100 || 0;
    return progress.toFixed(2);
  };

  return (
    <div className="checklist">
      <h2>CheckList</h2>
      <div className="progress-bar">
        <div
          className="progress-indicator"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="item-container">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggleCheck(item.id)}
              />
              <span className={item.checked ? "checked" : ""}>{item.text}</span>
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Digite o texto do item"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>
    </div>
  );
}

export default Checklist;
