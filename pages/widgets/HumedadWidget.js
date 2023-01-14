import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

function Humedadwidget() {
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
                // Destructurar el JSON para obtener los datos que necesitas
                const { reads } = response.data.body;
                console.log(reads)
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
                    const fechaHoraFormateada = `${day}/${month}/${year},${hour}:${minute}:${second};`
                    // Crear un nuevo objeto con la fecha y hora formateada
                    const newRead = {
                        ...reads[i],
                        Fecha_hora: fechaHoraFormateada,
                    };
                    // Reemplazar el elemento del arreglo original con el nuevo objeto
                    reads[i] = newRead;
                }
                // Asignar el arreglo de reads con los nuevos objetos a setData para actualizar el estado y mostrarlos en la gráfica
                setData(reads);
                // Indicar que los datos ya se han cargado
                setIsLoading(false);
            } catch (error) {
                // Utilizar un manejador de errores global para mostrar un mensaje de error más específico
                handleError(error);
                setHasError(true);
            }
        }
        fetchData();
        const interval = setInterval(fetchData, 50);
        return () => clearInterval(interval);
    }, [])

    const handleError = (error) => {
        console.error(error);
        alert("An error occurred while trying to fetch data. Please try again later.");
    };


    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isLoading) {
        return <p>Cargando...</p>;
    }


    if (hasError) {
        return <p>Ocurrió un error al cargar los datos.</p>;
    }
    const lastData = data[data.length - 1];
    return (
        <div>

            <div>Fecha y hora: {lastData.Fecha_hora}</div>
            <div>Temperatura: {lastData.Humedad1}</div>
            <div>Humedad: {lastData.Humedad2}</div>
        </div>
    );
}
export default Humedadwidget;