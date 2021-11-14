import React from "react";
import actgovlogo from "./imgs/actgov-logo.png";
import ancorslogo from "./imgs/ancors-logo.png";
import AusIMMLogo from "./imgs/AusIMM-Logo.png";
import createnswlogo from "./imgs/creatensw-logo.png";
import FoundationForNationalParksAndWildlifeLogo from "./imgs/FoundationForNationalParksAndWildlife-Logo.png";

import { Container, Row, Col } from "react-bootstrap";

function Ourpartners() {
  return (
    <div className="divOurpartners">
      <Container >
      <Row>
      <h1 className="headerOurpartner">Our partners</h1>
      </Row>
        <Row>
          <Col>
          <img className="actgovlogo" src={actgovlogo} alt="" width="90%" height="90%"/>
          </Col>
         
          <Col>
          <img className="ancorslogo" src={ancorslogo} alt="" width="90%" height="90%"/>
          </Col>

          <Col>
          <img className="AusIMMLogo" src={AusIMMLogo} alt=""width="90%" height="90%"/>
          </Col>

          <Col>
          <img className="createnswlogo" src={createnswlogo} alt="" width="90%" height="90%"/>
          </Col>

          <Col>
          <img className="FoundationForNationalParksAndWildlifeLogo" src={FoundationForNationalParksAndWildlifeLogo} alt="" width="90%" height="90%"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Ourpartners;
