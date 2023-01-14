import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function DataFetcher({ onDataFetched }) {
    // State para indicar si los datos están cargando o si ha ocurrido un error
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener los datos de temperatura y humedad del endpoint
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                // Destructurar el JSON para obtener los datos que necesitas
                const { reads } = response.data.body;
                // Iterar sobre el arreglo de reads
                for (let i = 0; i < reads.length; i++) {
                    // Utilizar la función moment() para parsear la fecha y hora en un objeto de momento
                    const fechaHora = moment(reads[i].Fecha_hora);
                    // Utilizar las funciones del objeto de momento para obtener los valores de día, mes, año, horas, minutos y segundos
                    const day = fechaHora.date();
                    const month = fechaHora.month() + 1;
                    const year = fechaHora.year();
                    const hour = fechaHora.hour();
                    const minute = fechaHora.minute();
                    const second = fechaHora.second();
                    // Crear una variable para almacenar la fecha y hora en el formato deseado
                    const fechaHoraFormateada = `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
                    // Crear un nuevo objeto con la fecha y hora formateada
                    const newRead = {
                        ...reads[i],
                        Fecha_hora: fechaHoraFormateada,
                    };
                    reads[i] = newRead;
                }
                // Pasar los datos filtrados al componente padre
                onDataFetched(reads);
                // Indicar que los datos ya se han cargado
                setIsLoading(false);
            } catch (error) {
                // handle the error
                setHasError(true);
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {hasError && <p>An error occurred while fetching the data.</p>}
        </div>
    );
}

export default DataFetcher;