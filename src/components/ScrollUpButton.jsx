import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 999;
  background-color: hwb(0 100% 0% / 0);
  color: #fff;
  border: 2px solid #ffffffa7;
  border-radius: 30px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: hwb(0 100% 0% / 0);
    padding: 15px 20px;
  }

  img {
    width: 50px; /* Justera storleken här */
    margin-right: 50px; /* Justera avståndet mellan bilden och texten här */
  }
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setShowButton(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <StyledButton onClick={scrollToTop}>
          <img src="FlowerArrow.png" alt="flower arrow" />
        </StyledButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
