// src/pages/Dashboard.tsx
import React from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lost & Found Dashboard</h2>
      <ItemForm />
      <ItemList />
    </div>
  );
};

export default Dashboard;
