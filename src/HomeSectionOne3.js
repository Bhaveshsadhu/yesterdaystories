import React from "react";

// Below are imported images
import indigenous_Remastered from "./imgs/indigenous Remastered.png";
import socialLogos from "./imgs/png-clipart-facebook-twitter-and-instagram-logo-social-media-facebook-computer-icons-social-networking-service-like-us-on-facebook-text-logo.png"
import GrandmaOrangeFlowers from "./imgs/Grandma-Orange-Flowers.png";
import WHY05027 from "./imgs/WHY05027.JPG";
import Arts from "./imgs/Arts.png"
import { Container, Row, Col } from "react-bootstrap";

function HomeSectionOne3() {
  return (
    <div className="HomeSectionOne3">
      <Container>
        <Row lg={2} sm={2}>
          <Col>
            <img
              className="indigenous_Remasteredsc3"
              src={indigenous_Remastered}
              alt=""
            />
          </Col>
          <Col lg={2} sm={2}>
            <img className="WHY05027" src={WHY05027} alt="" />
          </Col>
          <Col lg={8} sm={4}>
            <p className="Acknowledgement">
              <h1 className="headerAcknowledgement">
                Acknowledgement of Custodianship{" "}
              </h1>
              We are honoured to be on and have created this platform the
              ancestral lands of the Wodi Wodi people of the Dharawal Nation. We
              acknowledge the First Australians as the traditional custodians of
              the continent, whose cultures are among the oldest living cultures
              in human history and we pay respect to the Elders in the
              communities in which we work.
            </p>
          </Col>
        </Row>

        <Row>
        
          <Col lg={4} sm={4}>
          <div className="socialLogos">
            <h1 className="headersocialLogos">Follow us<br/> on the socials</h1>
            <img
              className="socialLogosimg"
              src={socialLogos}
              alt=""
            />
            </div>
          </Col>
          
          <Col lg={2} sm={2}>
          <img
              className="GrandmaOrangeFlowers"
              src={GrandmaOrangeFlowers}
              alt=""
            />
          </Col>
          <Col lg={2} sm={2}>
          <img
              className="Arts"
              src={Arts}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomeSectionOne3;
