import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import GraficaTemeperatura from './grafica/GraficaTemperatura'
import GraficaHumedad from './grafica/GraficaHumedad'
import TemperaturaWidget from './widgets/TemperaturaWidget'
import HumedadWidget from './widgets/HumedadWidget'
import About from './about/About.js'
import DataProvider from './../context/DataProvider'
import RelojWidget from './widgets/RelojWidget'
import Temperaturawidget2 from './widgets/TemperaturaWidget2'
import HumedadWidget2 from './widgets/HumedadWidget2'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

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

        <Layout >
          <Header />
          <br /><br />
          <CardContainer>
            <TemperaturaWidget />
            <HumedadWidget />

            <Temperaturawidget2 />
            <HumedadWidget2 /></CardContainer>

        </Layout>
      </main>
    </>
  )
}
