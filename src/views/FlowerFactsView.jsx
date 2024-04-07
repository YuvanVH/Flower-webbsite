// src/views/FlowerFactsView.jsx
import { useState, useEffect } from 'react';
import FlowerCard from '../components/FlowerCard';
import '../styles/FlowerFacts.css';
import { Link } from 'react-router-dom';

const FlowerFactsView = () => {
  // State för att lagra blomdata och sökterm
  const [flowers, setFlowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect-hook för att hämta blomdata när komponenten sätts ihop
  useEffect(() => {
    // hämta blomdata från en JSON-fil
    const fetchFlowers = async () => {
      try {
        const response = await fetch('flowers.json'); // Fetcha JSON-data från filen 'flowers.json'
        const data = await response.json(); // Konvertera svaret till JSON-format
        setFlowers(data); // Uppdatera state med den hämtade datan
      } catch (error) {
        console.error('Error fetching flowers:', error);
      }
    };

    fetchFlowers(); // Kör funktionen för att hämta blomdata när komponenten monteras

    // Funktion som körs när komponenten demonteras för att undvika minnesläckor
    return () => {
      // Inget att rensa upp här i detta fall...
    };
  }, []);

  // Funktion för att uppdatera söktermen när användaren skriver i sökfältet
  const handleSearchBar = (event) => {
    setSearchTerm(event.target.value); // Uppdatera state med värdet från sökfältet
  };

  // Filtrera blommor baserat på söktermen
  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Komponent för att visa meddelande om antalet sökresultat
  const SearchMessage = ({ numSearchResults }) => {
    return (
      <div className="searchMessage">
        {/* Visa antalet sökresultat eller ett meddelande om inga resultat hittades */}
        {numSearchResults === 0 ? <p>No flowers found</p> : <p>- {numSearchResults} flowers found -</p>}
      </div>
    );
  };

  // Funktion för att rensa söktermen när användaren klickar på knappen
  const clearSearch = () => {
    setSearchTerm(''); // Återställ söktermen till tom sträng
  };

  return (
    <div>
      <h1 id="FlowerQuiz">Flower Quiz</h1>
      <div className='quizContainer'>
        <Link to="/quiz">
          <img src="public/quizPic.jpeg" alt="Quiz Pic" />
          <div className="overlay">
            <div className="quizText">
              Take a personality quiz and find what flower matches you!{' '}
              <span className="link">Take the quiz</span>
            </div>
          </div>
        </Link>
      </div>

      <h1 id="flowerFactsTitle">Flower Facts</h1>
      <span className="searchBarStyle">
        {/* Sökruta för att filtrera blommor baserat på användarens inmatning */}
        <input
          type="text"
          placeholder="Search flowers..."
          value={searchTerm}
          onChange={handleSearchBar} // Hantera ändringar i sökfältet
        />
        {/* Rendera knapp för att rensa söktermen om sökfältet inte är tomt */}
        {searchTerm && (
          <button id="inputButtonFacts" onClick={clearSearch}>X</button>
        )}
      </span>
      {/* Visa antalet sökresultat eller ett meddelande om inga resultat hittades */}
      <SearchMessage numSearchResults={filteredFlowers.length} />

      {/* Rendera blomkort för varje filtrerad blomma */}
      <div className="flowerContainer">
        {/* Använd Link för att länka till FlowerInfoView för varje blomma */}
        {filteredFlowers.map(flower => (
          <div key={flower.name}>
            {/* Länk till detaljerad vy för varje blomma */}
            <Link to={`/flowers/${flower.id}`}>
              {/* Rendera ett blomkort för varje blomma */}
              <FlowerCard flower={flower} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerFactsView;
