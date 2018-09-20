import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import StateCard from "../components/StateCard"
import CountryCard from "../components/CountryCard"

const Welcome = () => {
  return (
    <div>
      <Hero backgroundImage="assets/images/plane_cropped.jpg">
        <h1>Globe Trotters</h1>

      </Hero>
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome, Bob!</h1>
            <br />
          </Col>
        </Row>

        <Row className= "row justify-content-between">
          <Col size="md-5">
            <StateCard />
          </Col>
          
          <Col size="md-5">
            <CountryCard />
          </Col>

        </Row>

      </Container>
    </div>
  )

};

export default Welcome;