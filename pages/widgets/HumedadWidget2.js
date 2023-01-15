import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';


function HumedadWidget2() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                const { reads } = response.data.body;
                for (let i = 0; i < reads.length; i++) {
                    const fechaHora = moment(reads[i].Fecha_hora);
                    const day = fechaHora.date();
                    const month = fechaHora.month() + 1;
                    const year = fechaHora.year();
                    const hour = fechaHora.hour();
                    const minute = fechaHora.minute();
                    const second = fechaHora.second();
                    const fechaHoraFormateada = ` ${day}/${month}/${year},${hour}:${minute}:${second} `;
                    const newRead = {
                        ...reads[i],
                        Fecha_hora: fechaHoraFormateada,
                    };
                    reads[i] = newRead;
                }
                setData(reads);
                setIsLoading(false);
            } catch (error) {
                handleError(error);
                setHasError(true);
            }
        }
        fetchData();
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleError = (error) => {
        console.error(error);
        alert("An error occurred while trying to fetch data. Please try again later.");
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>Ocurrió un error al cargar los datos.</p>;
    }

    const lastData = data[data.length - 1];

    return (
        <div  >

            <div>
                <h6 >Humedad Exterior</h6>
                <h3  >
                    {lastData.Humedad1}%</h3>
            </div>




        </div>
    );

}

export default HumedadWidget2;