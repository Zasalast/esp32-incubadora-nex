import React, { useEffect } from 'react';
import styles from '../../styles/card.module.css'
import Card from '../../components/Card';
function RelojWidget() {



    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//widget.time.is/t.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            time_is_widget.init({ Florencia__Departamento_del_Magdalena_z11b: {} });
        }
    }, []);

    return (
        <h1>

            {/* <a href="https://time.is/Florencia,_Departamento_del_Magdalena" id="time_is_link" rel="nofollow" style={{ fontSize: '36px' }}>

            </a> */}
            <span id="Florencia__Departamento_del_Magdalena_z11b" style={{ fontSize: '36px' }}></span>
        </h1>
    );
}




export default RelojWidget