// src/views/FlowerInfoView.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FlowerInfoView = () => {
  const [flower, setFlower] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Hämta blomman med hjälp av id
    fetch('flowers.json')
      .then(response => response.json())
      .then(data => {
        const selectedFlower = data.find(flower => flower.id === parseInt(id));
        setFlower(selectedFlower);
      })
      .catch(error => {
        console.error('Error fetching flower:', error);
      });
  }, [id]);

  if (!flower) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{flower.name}</h1>
      {/* Visa resten av blominfo här */}
    </div>
  );
};

export default FlowerInfoView;
