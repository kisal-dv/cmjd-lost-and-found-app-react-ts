// src/components/ItemList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  _id: string;
  name: string;
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setItems(res.data);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h3 className="text-xl mb-2">Item List</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item._id} className="border p-2 flex justify-between">
            {item.name}
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
