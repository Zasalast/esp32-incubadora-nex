import React from 'react';
import styles from '../styles/card.module.css';
import styled from 'styled-components';
const HeaderContainer = styled.div`
 
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
 
  width: 100%;
 
`;
const Card = ({ title, text }) => {
    return (
        <HeaderContainer className='HeaderContainer'><div className={styles.card}>
            <div className={styles.cardContent}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div></HeaderContainer>
    );
};

export default Card;
