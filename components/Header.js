import styled from 'styled-components';
import { useRouter } from 'next/router';
import HumedadWidget from '../pages/widgets/HumedadWidget';
import Temperaturawidget from '../pages/widgets/TemperaturaWidget';
import Layout from './Layout';

const HeaderContainer = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 15px;
  margin: 0;
  color: black;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 17px;
  color: black;
  margin-left: 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer className='HeaderContainer'>
      <HeaderTitle className='HeaderTitle'>My Website</HeaderTitle>
      <Nav className='Nav'>
        <NavLink className='NavLink' href="/" onClick={() => router.push('/')}>Home</NavLink>
        <NavLink href="/grafica/GraficaHumedad" onClick={() => router.push('/grafica/GraficaHumedad')}>Grafica Humedad</NavLink>
        <NavLink className='NavLink' href="/grafica/GraficaTemperatura">
          <NavLink className='NavLink'>Grafica Humedad</NavLink>
        </NavLink>
        <NavLink className='NavLink' to="/grafica/GraficaTemperatura" onClick={() => router.push('/grafica/GraficaTemperatura')}>Grafica Temperatura</NavLink>
        <NavLink className='NavLink' href="/grafica/MovilGraficas" onClick={() => router.push('/grafica/MovilGraficas')}>Movil Graficas</NavLink>
        <NavLink className='NavLink' href="/grafica/MovilHumedad" onClick={() => router.push('/grafica/MovilHumedad')}>Movil Humedad</NavLink>
        <NavLink className='NavLink' href="/grafica/MovilTemperatura" onClick={() => router.push('/grafica/MovilTemperatura')}>Movil Temperatura</NavLink>
        <Temperaturawidget />
        <HumedadWidget />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

