import React from "react";

// Below are imported images
import PoliticalRemastered from "./imgs/Political Remastered.png";
import LIghthouse from "./imgs/LIghthouse.jpg";
import QRCode from "./imgs/QR-Code-1.png";
import ParanormalRemastered from "./imgs/Paranormal Remastered.png";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function HomeSectionOne4() {
  return (
    <div className="HomeSectionOne4">
      <Container>
        <Row>
          <Col>
            <img
              className="PoliticalRemastered"
              src={PoliticalRemastered}
              alt=""
            />
          </Col>
          <Col>
            <div className="inbox">
              <p>
                <h1 className="headerinbox">Get new stories in your inbox</h1>
                <h1 className="headerinboxtext">Subscribe now</h1>

                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="enter your email address here"
                  />
                </InputGroup>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="LIghthousesc4" src={LIghthouse} alt="" />
          </Col>
          <Col>
            <img className="QRCode" src={QRCode} alt="" />
            <h1 className="qrtext">
              Scan the QR code<br/> to download the<br/> Yesterday Stories<br/> app now
            </h1>
          </Col>
          <Col>
            <img
              className="ParanormalRemastered"
              src={ParanormalRemastered}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomeSectionOne4;
