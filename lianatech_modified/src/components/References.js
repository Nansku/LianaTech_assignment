import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import bosch_png from "./img/ref/bosch.png";
import bodyShop_png from "./img/ref/bodyshop.png";
import laplandHotels_png from "./img/ref/lap_hotels.png";
import ikea_png from "./img/ref/ikea.png";

const ReferenceCards = () => {
    return (
        <Row className="container-fluid text-center d-flex justify-content-center pb-5">
                <Row>
                    <h3 className="title">References</h3>
                </Row>

                <Col sm={6} lg="auto" className="d-flex justify-content-center mt-4">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img className="p-2" variant="top" src={bosch_png} />
                        <hr/>
                        <Card.Body style={{height: '10rem'}}>
                            <Card.Title>Robert Bosch</Card.Title>
                            <Card.Text>
                                Bosch is a multinational engineering and electronics company.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} lg="auto" className="d-flex justify-content-center mt-4">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img className="p-2" variant="top" src={bodyShop_png} />
                        <hr/>
                        <Card.Body style={{height: '10rem'}}>
                            <Card.Title>The Body Shop</Card.Title>
                            <Card.Text>
                            The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} lg="auto" className="d-flex justify-content-center mt-4">
                <Card style={{ width: '15rem' }}>
                        <Card.Img className="p-2" variant="top" src={laplandHotels_png} />
                        <hr/>
                        <Card.Body style={{height: '10rem'}}>
                            <Card.Title>Lapland Hotels</Card.Title>
                            <Card.Text>
                            Lapland Hotels is the largest and most diverse hotel chain in Lapland.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={6} lg="auto" className="d-flex justify-content-center mt-4">
                <Card style={{ width: '15rem' }}>
                        <Card.Img className="p-2" variant="top" src={ikea_png} />
                        <hr/>
                        <Card.Body style={{height: '10rem'}}>
                            <Card.Title>IKEA</Card.Title>
                            <Card.Text>
                            IKEA is a multinational furniture store.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
    )
}

export default ReferenceCards;