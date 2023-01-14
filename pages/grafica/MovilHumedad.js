import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

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

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {hasError && <p>Error al cargar los datos.</p>}
            {!isLoading && !hasError && <p>Último dato de humedad: {data[0].Humedad}</p>}
        </div>
    );

}

export default MovilHumedad;