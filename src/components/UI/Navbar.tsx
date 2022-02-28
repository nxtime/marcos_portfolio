import styled from 'styled-components'
import NavItem from './NavItem'


const Nav = styled.ul`
    list-style: none;
    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    height: 100%;
`

const Navbar = () => {

    return(
        <Nav>
            <NavItem to='about'>About</NavItem>
            <NavItem to='perfil'>Perfil</NavItem>
        </Nav>
    )
};

export default Navbar