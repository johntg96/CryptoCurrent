import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

export default function Header() {
    return (
        <Container>
            <Row className="mt-4 mb-4 d-flex justify-content-center">
                {/* <h1 className="main-title mt-3">CryptoCurrent</h1>
                <h3 className="sub-title"><em>(a work in progress)</em></h3> */}
                <img src="src/assets/cryptocurrent_logo.png" style={{width:'7em'}}></img>
            </Row>
        </Container>
    )
}