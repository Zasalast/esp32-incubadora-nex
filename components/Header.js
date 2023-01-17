import styled from 'styled-components';
import { useRouter } from 'next/router';
import HumedadWidget from '../pages/widgets/HumedadWidget';
import Temperaturawidget from '../pages/widgets/TemperaturaWidget';
import Layout from './Layout';
import Temperaturawidget2 from '../pages/widgets/TemperaturaWidget2';
import HumedadWidget2 from '../pages/widgets/HumedadWidget2';
import { useEffect } from 'react';

const HeaderContainer = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  /* agregando estas propiedades */
  transition: all 0.3s ease-in-out;
  transform: translateY(0%);
  &.scrolled {
    transform: translateY(-100%);
  }
`;

const Headers = styled.h1`
  position: fixed;
  top: -100px;
  width: 100%;
  transition: top 0.3s ease-in-out;
 
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  margin: 0;
  color: black;
 
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
   
`;

const NavLink = styled.a`
   font-size: 30px;
  color: black;
  margin-left: 16px;
  text-decoration: none;
   padding: 16px;
  display: flex;
  
  
 margin:10px;
 

  border-radius: 10px;
  &:hover {
    text-decoration: underline;
  }

`;


const Header = () => {
  const router = useRouter();

  useEffect(() => {
    // detectando el evento de scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // obteniendo el elemento HeaderContainer
    const header = document.querySelector('.HeaderContainer');
    // aplicando la clase "scrolled" si se ha desplazado hacia abajo
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  return (
    <HeaderContainer className='HeaderContainer'><Nav className='Nav'>
      <HeaderTitle className='HeaderTitle'><NavLink className='NavLink' href="/" onClick={() => router.push('/')}>DSTR</NavLink></HeaderTitle>



      <NavLink className='NavLink' href="/">
        <NavLink className='NavLink'>Temperatura y Humedad Actual</NavLink>
      </NavLink>
      <NavLink className='NavLink' to="/grafica/GraficaHumedad" onClick={() => router.push('/grafica/GraficaHumedad')}>Historial de Datos </NavLink>



      <br />
    </Nav><br /><br />
    </HeaderContainer>
  );
};

export default Header;

