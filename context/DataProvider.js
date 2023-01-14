import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export const DataContext = createContext();

function DataProvider({ children }) {
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
                    const fechaHoraFormateada = `${day}/${month}/${year}, ${hour}:${minute}:${second};`
                    // Crear un nuevo objeto con la fecha y hora formateada
                    const newRead = {
                        ...reads[i],
                        Fecha_hora: fechaHoraFormateada,
                    };
                    reads[i] = newRead;
                }
                // Filter data based on filter state
                const filteredData = filterData(reads, filter);
                setData(filteredData);
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

    function filterData(data, filter) {
        // implement filtering logic here based on the filter state
        //...
        return filteredData;
    }

    return (
        <DataContext.Provider value={{ data, filter, setFilter }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;