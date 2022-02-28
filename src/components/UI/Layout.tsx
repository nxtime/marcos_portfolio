import react from 'react';
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height: 70px;
    max-height: 70px;
`

const RootDiv = styled.div`
    height: 100%;
`
const Main = styled.div`
    height: calc(100% - 70px);
    background-color: #ff0000
`

interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {

    return(
        <RootDiv>
         <Header>
             <div className="logo"></div>
             <Navbar/>
         </Header>
            <Main>
                {children}
            </Main>
        </RootDiv>
    )               
}                       

export default Layout                                                           