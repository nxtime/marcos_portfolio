import styled from 'styled-components'

const NavLink = styled.a`
    display: flex;
    height: 100%;
    padding-inline: 1.5rem;
    align-items: center;
    transition: all ease .5s;
    &:hover {
        background-color: #888
    }
`

interface Props {
    to: string;
    children: string;
}
const NavItem = ({to, children}: Props) => {
    return(
        <li style={{height: "100%"}}>
            <NavLink href={`#${to}`}>{children}</NavLink>
        </li>
    )
};

export default NavItem