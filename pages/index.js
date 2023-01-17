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
import pollito from './../assets/imgpollito.jpg';
import styled from 'styled-components';
import Temperaturawidget from './widgets/TemperaturaWidget'
const inter = Inter({ subsets: ['latin'] })

const MainContainer = styled.div` display: flex; align - items: center; justify - content: center; height: 80vh; width: 100 %; background - color: #f2f2f2`;;

const WidgetContainer = styled.div` display: flex; align - items: center; justify - content: space - between; width: 90 %; margin: 0 auto`;;

const Widget = styled.div` background-color: white; padding: 16px; width: 48 %; border - radius: 10px; box - shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); margin - bottom: 16px`;;

const WidgetTitle = styled.h2` font-size: 18px; margin: 0; color: black; text - align: center; margin - bottom: 16px`;;

const WidgetData = styled.div` font-size: 36px; color: black; text - align: center`;;
const BackgroundImage = styled.div`  position: absolute;
  top     : 0;
  left    : 0;
  width   : 100%;
  height  : 100%;
  z-index : -1;`;;
const WidgetsContainer = styled.div` position: relative;
  z-index : 1;`;;

const Home = () => {
  return (<><Head>
    <title>Grafica de Temperatura y Humedad de Incubadora</title>
    <meta name="description" content="Grafica de Temperatura y Humedad de Incubadora" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Layout>
      <br /><br />
      <br /><br />
      <br /><br />
      <MainContainer>
        <div className="background-image">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.blogs.es%2F6964d6%2Fpollitos%2F1366_2000.jpg&f=1&nofb=1&ipt=16501d1720f838393c1ed5e31d04c29f859fc14c8ef2d0b33ad4705c021d35d0&ipo=images" alt="pollito" />
          <div className="widgets-container">
            <WidgetContainer>
              <Widget>
                {/* <WidgetTitle>Temperatura</WidgetTitle> */}
                <WidgetData>
                  <Temperaturawidget />
                </WidgetData>
              </Widget>
              <Widget>
                {/* <WidgetTitle>Humedad</WidgetTitle> */}
                <WidgetData>
                  <Temperaturawidget2 />
                </WidgetData>
              </Widget>
              <Widget>
                {/* <WidgetTitle>Temperatura</WidgetTitle> */}
                <WidgetData>
                  <HumedadWidget />
                </WidgetData>
              </Widget>
              <Widget>
                {/* <WidgetTitle>Temperatura</WidgetTitle> */}
                <WidgetData>
                  <HumedadWidget2 />
                </WidgetData>
              </Widget>
            </WidgetContainer>
          </div></div>
      </MainContainer>

      <WidgetContainer>

      </WidgetContainer>
    </Layout></>
  );
};

export default Home;