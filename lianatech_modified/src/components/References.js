import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import bosch_png from "./img/ref/bosch.png";
import bodyShop_png from "./img/ref/bodyshop.png";
import laplandHotels_png from "./img/ref/lap_hotels.png";
import ikea_png from "./img/ref/ikea.png";

const ReferenceCards = () => {
    return (
        <Row className="container-fluid text-center d-flex justify-content-center">
            <div class="row ref d-flex justify-content-center">
                <div class="col-12">
                    <h3>References</h3>
                </div>

                <div class="col-12 col-md-6 col-xl-3 card_div">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={bosch_png} />
                        <Card.Body>
                            <Card.Title>Robert Bosch</Card.Title>
                            <Card.Text>
                                Bosch is a multinational engineering and electronics company.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-12 col-md-6 col-xl-3 card_div">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={bodyShop_png} />
                        <Card.Body>
                            <Card.Title>The Body Shop</Card.Title>
                            <Card.Text>
                            The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-12 col-md-6  col-xl-3 card_div">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={laplandHotels_png} />
                        <Card.Body>
                            <Card.Title>Lapland Hotels</Card.Title>
                            <Card.Text>
                            Lapland Hotels is the largest and most diverse hotel chain in Lapland.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-12 col-md-6  col-xl-3 card_div">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ikea_png} />
                        <Card.Body>
                            <Card.Title>IKEA</Card.Title>
                            <Card.Text>
                            IKEA is a multinational furniture store.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Row>
    )
}

export default ReferenceCards;