import React, { useState, useEffect } from 'react';

import axios from 'axios';

function CargarDatos() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
       /*  async function fetchData() {
            console.log("hola")
            try {
                const response = await fetch('https://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads').promise();
                console.log("response", response)
                const data = await response.json();
                console.log("hola", data)
                setData(data);
            } catch (error) {
                setError(error);
            }
        } */ fetchData();


    }, []);
    return (
        <div>CargarDatos</div>
    )
}

export default CargarDatos