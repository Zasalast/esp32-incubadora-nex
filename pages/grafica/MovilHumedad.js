/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Layout from '../../components/Layout';
import styles from '../../styles/Grafica.module.css'
function MovilHumedad() {
    // State para guardar el último dato de humedad
    const [data, setData] = useState([]);
    // State para indicar si los datos están cargando o si ha ocurrido un error
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener los datos de humedad del endpoint
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                // Destructurar el JSON para obtener los datos
                const { reads } = response.data.body;
                // Obtener el último dato del arreglo
           
                // Asignar el último dato a setData para actualizar el estado y mostrarlo en la gráfica
                setData(reads);
                // Indicar que los datos ya se han cargado
                setIsLoading(false);
            } catch (error) {
                // Utilizar un manejador de errores global para mostrar un mensaje de error más específico
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
    return (
        <Layout>
            <div className={styles.chart}>


                <ResponsiveContainer width="100%" height={360}>
                    <LineChart
                        width={360}
                        height={360}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={data.Fecha_hora} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Humedad1" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Humedad2" stroke="#82ca9d" />
                    </LineChart>

                </ResponsiveContainer>
            </div></Layout>
    );
}

export default MovilHumedad; */