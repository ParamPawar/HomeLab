import React, { useState } from "react";
import { initialData } from "./data";

const App = () => {
  const [data, setData] = useState(initialData);
  const [newItem, setNewItem] = useState({ text: "", image: "", link: "" });

  // Add a new item
  const handleAdd = () => {
    setData([...data, { id: Date.now(), ...newItem }]);
    setNewItem({ text: "", image: "", link: "" });
  };

  // Delete an item
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Edit an item
  const handleEdit = (id, updatedItem) => {
    setData(data.map((item) => (item.id === id ? updatedItem : item)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>

      {/* Add New Item */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Text"
          className="border p-2 mr-2"
          value={newItem.text}
          onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 mr-2"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link URL"
          className="border p-2 mr-2"
          value={newItem.link}
          onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Item
        </button>
      </div>

      {/* Display Data */}
      <div className="grid gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <div>
              <p>{item.text}</p>
              {item.image && <img src={item.image} alt="Preview" className="w-20" />}
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.link}
                </a>
              )}
            </div>
            <div>
              <button
                onClick={() =>
                  handleEdit(item.id, {
                    ...item,
                    text: prompt("Edit Text", item.text) || item.text,
                  })
                }
                className="bg-yellow-500 text-white p-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
