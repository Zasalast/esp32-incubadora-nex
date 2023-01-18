import styled from 'styled-components';
import { useRouter } from 'next/router';
import HumedadWidget from '../pages/widgets/HumedadWidget';
import Temperaturawidget from '../pages/widgets/TemperaturaWidget';
import Layout from './Layout';
import Temperaturawidget2 from '../pages/widgets/TemperaturaWidget2';
import HumedadWidget2 from '../pages/widgets/HumedadWidget2';
import { useEffect, useState } from 'react';


import { slide as Menu } from 'react-burger-menu';

const HeaderContainer = styled.div`
  background-color: black;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
 
  transition: all 0.3s ease-in-out;
  transform: translateY(0%);
  &.scrolled {
    transform: translateY(-100%);
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  margin: 0;
  color: white;
  
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
 
@media only screen and (max-width: 768px) {
display: none;
}
`;

const NavLink = styled.a`
 font-size: 30px; color: black; 
 margin - left: 16px; 
 text - decoration: none;
  padding: 16px; 
  display: flex; 
  margin: 10px; 
  border - radius: 10px;
   &:hover { text - decoration: underline; };
const Hamburger = styled.button

 display: none;
  @media only screen and(max - width: 768px) { 
    display: block;
     background - color: transparent;
      border: none; 
      cursor: pointer; 
      outline: none; }`;
const MobileNav = styled.nav`

 display: none; @media only screen and(max - width: 768px) {
   display: ${props => props.open ? 'block' : 'none'};
    position: absolute; top: 100 %;
    left: 0; width: 100 %;
    background - color: black;
     padding: 16px;  a { font - size: 30px;
       color: white;
      text - decoration: none;
       padding: 16px;
       display: block;
       margin: 10px;
       border - radius: 10px;
        &:hover { text - decoration: underline; } } }`;

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
    <HeaderContainer className='HeaderContainer'>
      <Nav className='Nav'>
        <HeaderTitle className='HeaderTitle'>
          <NavLink className='NavLink' href="/" onClick={() => router.push('/')}>DSTR</NavLink>
        </HeaderTitle>
        <NavLink className='NavLink' href="/">Temperatura y Humedad Actual</NavLink>        <NavLink className='NavLink' href="/grafica/GraficaHumedad">Historial de datos</NavLink>

      </Nav><br /><br />

    </HeaderContainer>
  );
};

export default Header;

