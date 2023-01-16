import styled from 'styled-components';
import { useRouter } from 'next/router';
import HumedadWidget from '../pages/widgets/HumedadWidget';
import Temperaturawidget from '../pages/widgets/TemperaturaWidget';
import Layout from './Layout';
import Temperaturawidget2 from '../pages/widgets/TemperaturaWidget2';
import HumedadWidget2 from '../pages/widgets/HumedadWidget2';

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
    <HeaderContainer className='HeaderContainer'><Nav className='Nav'>
      <HeaderTitle className='HeaderTitle'><NavLink className='NavLink' href="/" onClick={() => router.push('/')}>DSTR</NavLink></HeaderTitle>



      <NavLink className='NavLink' href="/grafica/GraficaHumedad">
        <NavLink className='NavLink'>Grafica Humedad</NavLink>
      </NavLink>
      <NavLink className='NavLink' to="/grafica/GraficaTemperatura" onClick={() => router.push('/grafica/GraficaTemperatura')}>Grafica Temperatura</NavLink>




    </Nav>
    </HeaderContainer>
  );
};

export default Header;

