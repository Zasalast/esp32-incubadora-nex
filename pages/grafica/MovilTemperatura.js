import React, { useState, useEffect, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../styles/Grafica.module.css'
import _ from 'lodash';
import axios from 'axios';

function MovilTemperatura() {
    // State para guardar los datos de temperatura y humedad
    const [data, setData] = useState([]);
    // State para indicar si los datos están cargando o si ha ocurrido un error
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // State to store the selected filter
    const [filter, setFilter] = useState({
        dataPoints: 100,
        dateRange: 'week',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener los datos de temperatura y humedad del endpoint
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const reads = response.data.body;
                // Filtar solo los datos necesarios
                console.log("reads");
                console.table(reads.reads);

                setData(reads.reads);
                // Indicar que los datos ya se han cargado
                setIsLoading(false);
            } catch (error) {
                // Utilizar un manejador de errores global para mostrar un mensaje de error más específico


                handleError(error);
                // Indicar que ha ocurrido un error al cargar los datos
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
    }, []);
    const handleError = (error) => {
        console.error(error);
        alert("An error occurred while trying to fetch data. Please try again later.");
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter({ ...filter, [name]: value });
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>An error occurred.</p>;
    }
    return (

        <div className={styles.chart}>
            <div><label>Number of Data Points:</label>
                <input type="number" name="dataPoints" value={filter.dataPoints} onChange={handleFilterChange} />
                <br />
                <label>Date Range:</label>
                <select name="dateRange" value={filter.dateRange} onChange={handleFilterChange}>
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ts" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="Temperatura" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default MovilTemperatura;