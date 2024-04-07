import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Skapar en återanvändbar knapp med hjälp av styled-components
const StyledButton = styled.button`
  /* Stilregler för knappen */
  position: fixed; /* Positionerar knappen fast vid skärmen */
  bottom: 5px; /* Avstånd från botten av skärmen */
  right: 0px; /* Avstånd från högerkant av skärmen */
  z-index: 999; /* Z-index för att placera knappen över andra element */
  background-color: rgba(0, 0, 0, 0.222); /* Bakgrundsfärg med 22.2% opacitet */
  color: #fff; /* Textfärg till vit */
  border: 2px solid #ffffffa7; /* Vit kant runt knappen */
  border-radius: 30px; /* Avrundade hörn med radie 30px */
  padding: 8px 11px; /* Inre utfyllnad (padding) för knappen */
  cursor: pointer; /* Visar att knappen är klickbar */
  font-weight: bold; /* Fetstil för texten */

  &:hover {
    /* Stilregler när musen sveper över knappen */
    background-color: rgba(255, 255, 255, 0.142); /* Ljusare bakgrundsfärg */
    padding: 10px 13px; /* Lite större inre utfyllnad (padding) */
  }
`;

// Funktionell komponent för knappen som scrollar till toppen av sidan
const ScrollToTopButton = () => {
  // State för att visa eller dölja knappen beroende på scrollpositionen
  const [showButton, setShowButton] = useState(false);

  // Använder useEffect-hook för att lyssna på scrollhändelser när komponenten monteras eller uppdateras
  useEffect(() => {
    const handleScroll = () => {
      // Kontrollerar om användaren har scrollat tillräckligt långt ned på sidan för att visa knappen
      setShowButton(window.scrollY > 100);
    };

    // Lägger till händelselyssnare för scrollhändelser när komponenten monteras
    window.addEventListener('scroll', handleScroll);

    // Funktion som körs när komponenten demonteras för att undvika minnesläckor
    return () => {
      // Tar bort händelselyssnare för scrollhändelser när komponenten "demonteras" <- bra att kunna
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Använder en tom beroendelista??? för att barra köra effekten en gång när komponenten monteras

  // Funktion som rullar tillbaka till toppen av sidan när knappen klickas
  const scrollToTop = () => {
    // window.scrollTo = typ en formel
    window.scrollTo({
      top: 0, // 0 = rullar till toppen av sidan
      behavior: 'smooth'
    });
  };

  // Renderar knappen bara om showButton är true (när användaren scrollat tillräckligt långt ned på sidan)
  return (
    <>
      {showButton && (
        <StyledButton onClick={scrollToTop}>
          <div>↑</div>
        </StyledButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
