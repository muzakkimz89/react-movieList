import {Navbar, Container, Nav, NavbarBrand} from 'react-bootstrap'

const NavigationBar =() =>{
    return (
        <div>
            <Navbar variant='dark'>
                <Container  > 
                    <Navbar.Brand href="/">FILM</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#allMovie">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar