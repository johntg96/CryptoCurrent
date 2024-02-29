import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand style={{fontFamily:"Honk, arial", fontSize:"2em"}}>CryptoCurrent</Navbar.Brand>
            </Container>
        </Navbar>
    )
}