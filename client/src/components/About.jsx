import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="about">
                        <h1 style={{textDecoration:"underline"}}>About</h1>
                        <p>CryptoCurrent is an online tool to primarily track the prices of various crypto currencies along with relevant content.</p>
                        <h3 style={{textDecoration:"underline"}}>Development</h3>
                        <p>Written in JSX (React + Vite)</p>
                        <p>Repository is located <a href="https://github.com/johntg96/CryptoCurrent">here</a> (GitHub).</p>
                    </div> 
                </Col>
            </Row>
            
        </Container>
            
    )
}