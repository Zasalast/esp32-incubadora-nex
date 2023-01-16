import React, { useEffect, useState } from 'react';
import styles from '../../styles/card.module.css'
import Card from '../../components/Card';

function RelojWidget() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onmessage = (event) => {
            setTime(event.data);
        }

        return () => socket.close();
    }, []);

    return (
        <h1>
            {time}
        </h1>
    );
}

export default RelojWidget