import React, { useState, useEffect, PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
        console.table(reads);
        const filteredData = _.map(reads, item => ({
          ts: new Date(item.ts).toLocaleString(),
          Humedad: item.Humedad,
          Temperatura: item.Temperatura,
        }));
        // Actualizar el estado con los datos obtenidos
        setData(filteredData);
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
    { "ts": 1672933763726, "Humedad": 65, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672933825285, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672933886131, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672933946815, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672934007566, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672934068322, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672934129214, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 30.8 }, { "ts": 1672934189929, "Humedad": 63, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 31.3 }, { "ts": 1672934250710, "Humedad": 63, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 31.3 }, { "ts": 1672934311366, "Humedad": 64, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 31.3 }, { "ts": 1672934372268, "Humedad": 63, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 31.3 }, { "ts": 1672941920995, "Humedad": 55, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 32.8 }, { "ts": 1672941981709, "Humedad": 54, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 33.3 }, { "ts": 1673109927947, "Humedad": 84, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.3 }, { "ts": 1673109988770, "Humedad": 84, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.3 }, { "ts": 1673110049442, "Humedad": 83, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.3 }, { "ts": 1673110110239, "Humedad": 83, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.3 }, { "ts": 1673110170994, "Humedad": 83, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110231743, "Humedad": 82, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110293075, "Humedad": 82, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110353835, "Humedad": 82, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110414687, "Humedad": 82, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110475409, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110536107, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110596884, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110657608, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110718366, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110779139, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110839893, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110900682, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673110961418, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111022204, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111082945, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111143698, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111204492, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111265219, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111325990, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111386748, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111447563, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111508296, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111569021, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111629777, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111690538, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111751295, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111812079, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673111872831, "Humedad": 81, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 25.8 }, { "ts": 1673480356341, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480417234, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480478008, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480538608, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480599366, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480660695, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480720900, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673480781878, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673486196473, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.6 }, { "ts": 1673486257379, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.2 }, { "ts": 1673486318117, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486378750, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486438938, "Humedad": 47, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486499870, "Humedad": 47, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486560728, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486621530, "Humedad": 47, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486682004, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486742900, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486803582, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673486864534, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487045222, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673487180598, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 26.7 }, { "ts": 1673487241479, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487302244, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487362873, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487423764, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487484511, "Humedad": 46, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487545157, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487606096, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487666811, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487727461, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487788236, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487848994, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487909741, "Humedad": 45, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673487970543, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488031290, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488092068, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488152800, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488213678, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488274295, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488335253, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488395978, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488456586, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488517564, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488578235, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488638899, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488699784, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488760537, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488821168, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488882030, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673488942814, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673489003471, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673489064321, "Humedad": 44, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 27.1 }, { "ts": 1673531746924, "Humedad": 92, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }, { "ts": 1673531930161, "Humedad": 92, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.4 }, { "ts": 1673532114185, "Humedad": 92, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }, { "ts": 1673532245015, "Humedad": 90, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }, { "ts": 1673532305778, "Humedad": 90, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }, { "ts": 1673532366544, "Humedad": 90, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }, { "ts": 1673532427408, "Humedad": 90, "mac_Id": "98:f4:ab:07:0c:e0", "Temperatura": 24.5 }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      {/*  <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="ts" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="Temperatura" stroke="#8884d8" dot={false} />
        <Line yAxisId="right" type="monotone" dataKey="Humedad" stroke="#82ca9d" dot={false} />
      </LineChart> */}

      <LineChart
        width={500}
        height={300}
        data={data2}
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
  );
}

export default Grafica;