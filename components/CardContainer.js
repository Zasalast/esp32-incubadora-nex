import React from 'react';
import styles from '../styles/card.module.css';

const CardContainer = ({ children }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>{children}</div>

        </div>
    );
};

export default CardContainer;
