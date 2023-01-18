import React from 'react';
import styled from 'styled-components';
import styles from '../styles/card.module.css';
const CardImage = styled.div`  opacity: 0.5`;;
const CardContainers = styled.div`  background-color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
   opacity: 0.5
  width: 100%;
  height: 100%;
  z-index: 10;
 
  transition: all 0.3s ease-in-out;
  transform: translateY(0%);
  &.scrolled {
    transform: translateY(-100%);
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }`;;
const CardContainer = ({ children }) => {
    return (
        <CardImage>
            <CardContainers>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        {children}
                    </div>
                </div>
            </CardContainers>
        </CardImage>
    );
};

export default CardContainer;
