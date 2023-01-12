import React, { useState, useEffect, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../styles/Grafica.module.css'
import _ from 'lodash';
import axios from 'axios';

function Grafica() {
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
        console.log("reads");
        console.table(reads.reads);
        /*  const filteredData = response.data.body.map(reads, item => ({
           ts: new Date(item.ts).toLocaleString(),
           Humedad: item.Humedad,
           Temperatura: item.Temperatura,
         })); */
        // Actualizar el estado con los datos obtenidos

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
    const socket = new WebSocket('ws://b2luadwf3k.execute-api.us-east-1.amazonaws.com/reads');

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      // Add new data to the beginning of the data array
      setData([newData, ...data].slice(0, 100));
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
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>An error occurred.</p>;
  }
  const data2 = [
    { "ts": 1672933763726, "Humedad": 65, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672933825285, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }
  ];

  return (
    <div className={styles.chart}>
      {/* <ResponsiveContainer width="100%" height={360}>


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
          <XAxis dataKey="ts" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Humedad" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Temperatura" stroke="#82ca9d" />
        </LineChart>

      </ResponsiveContainer> */}
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
          <XAxis dataKey="ts" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Humedad" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Temperatura" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


    </div>
  );
}

export default Grafica;