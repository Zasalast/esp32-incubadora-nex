import React from 'react';
import styles from '../styles/card.module.css';
import styled from 'styled-components';
const HeaderContainer = styled.div`
 
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 margin:10px;
  background-color: #f2f2f2;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 100%;
    
  
  
  &:hover {
    text-decoration: underline;
  }
 
`;

const NavLink = styled.a`
 
  
`;
const Card = ({ title, text }) => {
    return (
        <HeaderContainer className='HeaderContainer'><div className={styles.card}>
            <div className={styles.cardContent}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div><br /></HeaderContainer>
    );
};

export default Card;
