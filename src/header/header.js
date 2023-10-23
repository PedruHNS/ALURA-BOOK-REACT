import Menu from './components/menu/menu.js';
import Logo from './components/logo/logo.js';
import Perfil from './components/perfil/perfil.js';

import styled from 'styled-components';

const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-evenly;
   background-color: white;
   align-items: center;
`


function Header(params) {
   return (
      <HeaderContainer>
        <Logo/>
        <Menu/>
        <Perfil/>
         <section>
            
         </section>
      </HeaderContainer>
   
   )
}
export default Header;