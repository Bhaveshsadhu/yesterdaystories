import React from "react";

// Below are imported images
import MungoRangertrans from "./imgs/Mungo-Ranger-trans.png";
import MapWithAppIcons from "./imgs/Map-With-App-Icons.png";
import map from "./imgs/map.jpg";
import indigenous_Remastered from "./imgs/indigenous Remastered.png";
import MuesumsGalleries from "./imgs/MuesumsGalleries.png";
import GooglePlay from "./imgs/GooglePlay.PNG";
import Appstore from "./imgs/Appstore.PNG";
//Imported images finished 

import { Container, Row, Col } from "react-bootstrap";

function HomeSectionOne1() {
  return (
    <div className="HomeSectionOne">
      <Container className="HomeSectionOne1">
        <Row className="justify-content-lg-center center">
          <Col >
            <div>
            <p className="text center">Richer connection</p>
            <p className="text center">to place and people</p>
            <p className="text center">when travelling</p>
            <br/><br/>
            <p className="text_p center">Through stories we understand</p>
            <p className="text_p center">the layers of history and this</p>
            <p className="text_p center">helps us connect to place and</p>
            <p className="text_p center">the people of that place</p>
              {/* <p className="sectionone-headertext">Richer connection<br/>to place and people<br/>when travelling</p> */}
              {/* <p className="sectionone-headertext_p">Through stories we understand<br/>the layers of history and this<br/>helps us connect to place and<br/>the people of that place</p> */}
            </div>
          </Col>
          <Col>
            <div>
              <img className="MungoRangertrans" src={MungoRangertrans} alt="" />
              <img className="MapWithAppIcons" src={MapWithAppIcons} alt="" />
           
            </div>
          </Col>
        </Row>

        <Row className="justify-content-lg-center center">
          <Col >
            <div>
            <br/>
            <p className="text center">Get started. it's free.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-lg-center center">
          <Col>
          
            <img className="img_GooglePlay" src={GooglePlay} alt=""/>
            
          </Col>
          <Col>
          
            <img className="img_Appstore" src={Appstore} alt=""/>
            
          </Col>
        </Row>

        <Row>
           <Col>
            
              <img className="img_indigenous_Remastered"
                src={indigenous_Remastered}
                alt=""
                
              />
            
          </Col> 
           <Col>
            
              <img className="img_MuesumsGalleries" src={MuesumsGalleries} alt=""/>
            
          </Col>
        </Row>
      </Container>
      
        {/* <div className="img_map"> */}
      <img className="img_map" src={map} alt=""/>
      {/* </div> */}
    </div>
  );
}
export default HomeSectionOne1;
