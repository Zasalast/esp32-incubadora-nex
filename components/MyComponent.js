import { useDataContext } from './DataContext';

const MyComponent = () => {
    const data = useDataContext();
    // Utilizar los datos para renderizar la gráfica o mostrarlos en una tabla, etc.
    return (
        <div>
            <h2>Datos de temperatura y humedad</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha y Hora</th>
                        <th>Temperatura</th>
                        <th>Humedad</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.Fecha_hora}>
                            <td>{d.Fecha_hora}</td>
                            <td>{d.Temperatura}</td>
                            <td>{d.Humedad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyComponent;