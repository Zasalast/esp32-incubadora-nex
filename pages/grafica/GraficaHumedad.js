import React, { useState, useEffect, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../styles/Grafica.module.css'
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';
import Layout from '../../components/Layout';


function GraficaHumedad() {
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
        console.log("Datos", reads)
        setData(reads);
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
    <Layout>
      <div className={styles.chart}>


        <br /> <br />
        <label>Grafica Humedad</label>

      </div>
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
          <XAxis dataKey="Fecha_hora" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Humedad1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Humedad2" stroke="#82ca9d" />
        </LineChart>

      </ResponsiveContainer>
      <div className={styles.chart}>


        <br /> <br />
        <label>Grafica Temperatura</label>

      </div>
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
          <XAxis dataKey="Fecha_hora" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temperatura1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Temperatura2" stroke="#82ca9d" />
        </LineChart>

      </ResponsiveContainer>


    </Layout>
  );
}
export default GraficaHumedad;