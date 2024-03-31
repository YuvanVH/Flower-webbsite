import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  bottom: 5px;
  right: 0px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.222);
  color: #fff;
  border: 2px solid #ffffffa7;
  border-radius: 30px;
  padding: 8px 11px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.142);;
    padding: 10px 13px;
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
          <div>↑</div>
        </StyledButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
