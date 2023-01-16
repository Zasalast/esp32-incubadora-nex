import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Layout from '../../components/Layout';

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
                /*  const filteredData = _.takeRight(reads, 1); */
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

    /*   return (<Layout>
          <div>
              {isLoading && <p>Loading...</p>}
              {hasError && <p>Error al cargar los datos.</p>}
              {!isLoading && !hasError && <p>Último dato de humedad: {data[0].Humedad}</p>}
          </div></Layout>
      ); */

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
                        <Line type="monotone" dataKey="Humedad11" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Temperatura2" stroke="#82ca9d" />
                    </LineChart>

                </ResponsiveContainer>
            </div></Layout>
    );
}

export default MovilHumedad;