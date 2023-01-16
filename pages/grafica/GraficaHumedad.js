import React, { useState, useEffect, PureComponent } from 'react';
import { PieChart, Pie, Sector, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../styles/Grafica.module.css'
import _ from 'lodash';
import axios from 'axios';
import Layout from '../../components/Layout';
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
function GraficaHumedad() {
  // State para guardar los datos de temperatura y humedad
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
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
    setState({
      activeIndex: 0,
    });
  }, [data]);
  const handleError = (error) => {
    console.error(error);
    alert("An error occurred while trying to fetch data. Please try again later.");
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };


  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>An error occurred.</p>;
  }
  return (

    <div className={styles.chart}>
      <div><label>Number of Data Points:</label>
        <input type="number" name="dataPoints" value={filter.dataPoints} onChange={handleFilterChange} />
        <br />
        <label>Date Range:</label>
        <select name="dateRange" value={filter.dateRange} onChange={handleFilterChange}>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={300}
          height={300}
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

          <Line type="monotone" dataKey="Temperatura1" stroke="#82ca9d" />
        </LineChart>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="Temperatura1"
            onMouseEnter={onPieEnter()}
          />
        </PieChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={300}
          height={300}
          data={data}
        /*     margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }} */
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={data.Fecha_hora} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temperatura1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Temperatura2" stroke="#82ca9d" />
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}
export default GraficaHumedad;