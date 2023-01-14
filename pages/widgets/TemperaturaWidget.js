import Weather from 'react-weather';
import React, { useState, useEffect, PureComponent } from 'react';

const TemperaturaWidget = () => {
    const [data2, setData2] = useState([
        { city: 'New York', temperature: 72, humidity: 60 },
        { city: 'San Francisco', temperature: 68, humidity: 55 },
        { city: 'Chicago', temperature: 62, humidity: 50 },
    ]);
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
        <div>
            <h1>Temperatura y humedad</h1>
            <ul>
                {data2.map((item, index) => (
                    <li key={index}>
                        {item.city}: {item.temperature}°F, {item.humidity}% de humedad
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default TemperaturaWidget;




