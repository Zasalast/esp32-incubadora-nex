import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import GraficaTemeperatura from './grafica/GraficaTemperatura'
import GraficaHumedad from './grafica/GraficaHumedad'
import About from './about/About.js'
import DataProvider from './../context/DataProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data3 = { keytabla: "Fecha_hora", dato1: "Temperatura1", dato1: "Temperatura2" }
  return (
    <>
      <Head>
        <title>Grafica de Temperatura y Humedad de Incubadora</title>
        <meta name="description" content="Grafica de Temperatura y Humedad de Incubadora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h6>Grafica de  Humedad de Incubadora</h6>


        <DataProvider>
          <GraficaHumedad /> <h6>Grafica de Temperatura Incubadora</h6>
          <GraficaTemeperatura />
        </DataProvider>

        {console.log("hola vercel")}
      </main>
    </>
  )
}
