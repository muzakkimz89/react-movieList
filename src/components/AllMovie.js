import { Card, Col, Container, Row } from "react-bootstrap"

import duneImage from "../assets/trending/dune.jpg"
import everythingImage from "../assets/trending/everything.jpg"
import infiniteImage from "../assets/trending/infinite.jpg"
import jokerImage from "../assets/trending/joker.jpg"
import morbiusImage from "../assets/trending/morbius.jpg"
import lightyearImage from "../assets/trending/lightyear.jpg"



const allMovie = () =>{
    return(
        <Container id="allMovie">
                <h1 className="text-white text-center">Movie</h1>
                <Row>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={duneImage} className="image"/>
                            <div className="bg-dark text-white">
                                <Card.Body>
                                    <Card.Title className="text-center">Dune</Card.Title>
                                    <Card.Text className="text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                        </div>                      
                    </Col>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={everythingImage} className="image"/>
                                <div className="bg-dark text-white">
                                    <Card.Body>
                                        <Card.Title className="text-center">Everything</Card.Title>
                                        <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={infiniteImage} className="image"/>
                                <div className="bg-dark text-white">
                                    <Card.Body>
                                        <Card.Title className="text-center">Infinite</Card.Title>
                                        <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={jokerImage} className="image"/>
                                <div className="bg-dark text-white">
                                    <Card.Body>
                                        <Card.Title className="text-center">Joker</Card.Title>
                                        <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={morbiusImage} className="image"/>
                                <div className="bg-dark text-white">
                                    <Card.Body>
                                        <Card.Title className="text-center">Morbius</Card.Title>
                                        <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>    
                    </Col>
                    <Col className="mt-2">
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={lightyearImage} className="image"/>
                                <div className="bg-dark text-white">
                                    <Card.Body>
                                        <Card.Title className="text-center">Light Year</Card.Title>
                                        <Card.Text className="text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>    
                    </Col>
                </Row>
            </Container>
    )
}

export default allMovie