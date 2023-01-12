import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function TemperatureHumidityChart() {
    // State para guardar los datos de temperatura y humedad
    const [data, setData] = useState({ temperature: [], humidity: [] });
    // State para indicar si los datos están cargando o si ha ocurrido un error
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener los datos de temperatura y humedad del endpoint
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const { temperatureData, humidityData } = response.data;
                // Actualizar el estado con los datos obtenidos
                setData({
                    temperature: temperatureData,
                    humidity: humidityData
                });
                // Indicar que los datos ya se han cargado
                setIsLoading(false);
            } catch (error) {
                // Indicar que ha ocurrido un error al cargar los datos
                setHasError(true);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>An error occurred.</p>;
    }

    const chartData = {
        labels: data.temperature.map(({ date }) => date),
        datasets: [
            {
                label: 'Temperature',
                data: data.temperature.map(({ temperature }) => temperature),
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: 'Humidity',
                data: data.humidity.map(({ humidity }) => humidity),
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ],
    };

    return (
        <Line
            data={chartData}
        />
    )
}
