import { useState } from "react";
import LineChart from "./LineChart.js";



import { ClimaData, UserData, TemperaturaData, HumedadData } from "./Data.js";

function Grafica() {
  const datapoints = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  const [climaData, setHumedadData] = useState({
    labels: datapoints,
    datasets: [
      {
        label: "Humedad",
        data: ClimaData.map((data) => data.Humedad),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      }, {
        label: "Temperatura",
        data: ClimaData.map((data) => data.Temperatura),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });


  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div >
      <div style={{ width: 700 }}>
        <LineChart chartData={climaData} />
      </div>
    </div>
  );
}

export default Grafica;
