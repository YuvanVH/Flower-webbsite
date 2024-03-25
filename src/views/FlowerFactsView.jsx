// src/views/FlowerFactsView.jsx
import React, { useState, useEffect } from 'react';
import FlowerCard from '../components/FlowerCard';
import '../styles/FlowerFacts.css';

const FlowerFactsView = () => {
  const [flowers, setFlowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // fetcha allt och låt den genereras ut
    fetch('flowers.json')
      .then(response => response.json())
      .then(data => {
        setFlowers(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching flowers:', error);
      });
  }, []);

  // Sökbaren
  const handleSearchBar = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Meddelande om inga sökresultat hittades || hur många sökresultat
  const SearchMessage = ({ numSearchResults }) => {
    return (
      <div className="searchMessage">
        {numSearchResults === 0 ? <p>No flowers found</p> : <p>- {numSearchResults} flowers found -</p>}
      </div>
    );
  };

  // Funktion för att rensa sökrutan
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Sample flower data, byter ut med den sanna datan
  // const sampleFlower = {
  //   name: 'Rose',
  //   image: 'rose.jpg',
  //   description: 'A beautiful flower with thorns.',
  //   symbolism: ['Love', 'Romance'],
  //   fragrance: 'Sweet',
  //   history: 'Symbol of love in many cultures.'
  // };

  return (
    <div>
      <h1 id="flowerFactsTitle">Flower Facts</h1>
      <span className="searchBarStyle">
        <input
          type="text"
          placeholder="Search flowers..."
          value={searchTerm}
          onChange={handleSearchBar}
        />
        {/* Rendera X-knapp endast om söktermen inte är tom */}
        {searchTerm && (
          <button onClick={clearSearch}>X</button>
        )}
      </span>
      <SearchMessage numSearchResults={filteredFlowers.length} />

      <div className="flowerContainer">
        {/* Använd SearchMessage-komponenten för att visa meddelandet */}
        {/* En wrapper för att hålla korten */}
        {filteredFlowers.map(flower => (
          <div key={flower.name}>
            <FlowerCard flower={flower} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerFactsView;
