import { Col, Container, Row } from "react-bootstrap"

const intro = () =>{
    return(
        <div className="intro">
            <Container className="d-flex text-white text-center justify-content-center">
                <Row>
                    <Col>      
                        <div>Nonton Gratis</div>
                        <div>Gak Perlu Bayar</div>         
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default intro