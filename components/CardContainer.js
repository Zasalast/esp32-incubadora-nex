import React from 'react';
import styled from 'styled-components';
import styles from '../styles/card.module.css';
const CardImage = styled.div`  opacity: 0.5`;;
const CardContainer = ({ children }) => {
    return (
        <CardImage>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    {children}
                </div>

            </div>
        </CardImage>
    );
};

export default CardContainer;
