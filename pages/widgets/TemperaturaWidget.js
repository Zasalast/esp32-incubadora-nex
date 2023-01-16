import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import styles from '../../styles/card.module.css'
import Card from '../../components/Card';
function Temperaturawidget() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const { reads } = response.data.body;
                for (let i = 0; i < reads.length; i++) {
                    const fechaHora = moment(reads[i].Fecha_hora);
                    const day = fechaHora.date();
                    const month = fechaHora.month() + 1;
                    const year = fechaHora.year();
                    const hour = fechaHora.hour();
                    const minute = fechaHora.minute();
                    const second = fechaHora.second();
                    const fechaHoraFormateada = ` ${day}/${month}/${year},${hour}:${minute}:${second} `;
                    const newRead = {
                        ...reads[i],
                        Fecha_hora: fechaHoraFormateada,
                    };
                    reads[i] = newRead;
                }
                setData(reads);
                setIsLoading(false);
            } catch (error) {
                handleError(error);
                setHasError(true);
            }
        }
        fetchData();
        // create websocket connection
        const socket = new WebSocket('wss://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            // Add new data to the beginning of the data array
            setData([newData, ...data].slice(0, filter.dataPoints));
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
        return () => socket.close();
        setState({
            activeIndex: 0,
        });
        const interval = setInterval(fetchData, 500);
        return () => clearInterval(interval);
    }, [data]);



    const handleError = (error) => {
        console.error(error);
        alert("An error occurred while trying to fetch data. Please try again later.");
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>Ocurrió un error al cargar los datos.</p>;
    }

    const lastData = data[data.length - 1];

    return (

        <>
            <Card title={lastData.Temperatura1} text="Temperatura Criadora" />


        </ >



    );

}

export default Temperaturawidget;