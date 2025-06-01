// src/components/ItemForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [item, setItem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/items', { name: item });
      setItem('');
      window.location.reload(); // Refresh list
    } catch (err) {
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
