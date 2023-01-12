import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function TemperatureHumidityChart() {
    // State para guardar los datos de temperatura y humedad
    const [data, setData] = useState([]);
    // State para indicar si los datos están cargando o si ha ocurrido un error
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener los datos de temperatura y humedad del endpoint
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const reads = response.data.body;
                // Filtar solo los datos necesarios
                const filteredData = _.map(reads, item => ({
                    ts: moment(item.ts).format('DD/MM/YYYY'),
                    Humedad: item.Humedad,
                    Temperatura: item.Temperatura,
                }));
                // Actualizar el estado con los datos obtenidos
                setData(filteredData);
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
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>An error occurred.</p>;
    }

    return (<div>
        {/* <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="ts" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="Temperatura" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="Humedad" stroke="#82ca9d" />
            </LineChart>


        </ResponsiveContainer> */}
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <p>ts: {item.ts}</p>
                    <p>Humedad: {item.Humedad}</p>
                    <p>mac_Id: {item.mac_Id}</p>
                    <p>Temperatura: {item.Temperatura}</p>
                </li>
            ))}
        </ul></div>
    );
}



export default TemperatureHumidityChart;