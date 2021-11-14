import React from "react";

// Below are imported images
import OurCommunitiesRemastered from "./imgs/OurCommunitiesRemastered.png";
import IndustryRemastered from "./imgs/IndustryRemastered.png";
import SitesLandmarksRemaster from "./imgs/Sites _ Landmarks Remaster.png";
import Filmmaker from "./imgs/Filmmaker.png";


import MajorEventsRemastered from "./imgs/MajorEventsRemastered.png";
import ColonialRemastered from "./imgs/ColonialRemastered.png";
import indigenous_Remastered from "./imgs/indigenous Remastered.png";

import Haprers from "./imgs/Haprers.png";
import MuesumsGalleries from "./imgs/MuesumsGalleries.png";
import ALLStoriesRemastered from "./imgs/ALLStoriesRemastered.png";
//Imported images finished
// import './style.css';
import { Container, Row, Col } from "react-bootstrap";

function HomeSectionOne2() {
  return (
    <div className="HomeSectionOne2">
      <Container >
        <Row>
          <Col lg={1} sm={1}>
            
              <img className="OurCommunitiesRemastered"
                src={OurCommunitiesRemastered}
                alt=""
              />
            
          </Col>
          <Col lg={9} sm={9}> 
          <br/><br/><br/><br/>
            <p className="text left"> Share and watch short film stories about</p>
            <p className="text left">the local history and people of the areas</p>
            <p className="text left">you visit, on the Yesterday Stories app.</p>
            
          </Col>
          <Col lg={1} sm={1}>
            
              <img  className="IndustryRemastered" src={IndustryRemastered} alt="" />
            
          </Col>
        </Row>
        <Row>
          <Col lg={2} sm={2}>
            
              <img className="SitesLandmarksRemaster"
                src={SitesLandmarksRemaster}
                alt=""
                width="400"
                height="400"
              />
            
          </Col>
          <Col lg={4} sm={4}>
            
              <img className="Filmmaker" src={Filmmaker} alt="" />
            
          </Col>
          <Col lg={4} sm={4}>
          <div className="text2">
            <p className="text center ">Upload your own</p>
            <p className="text center ">film and link it to</p>
            <p className="text center ">location in the app</p>
            </div>
          </Col>
        </Row>
        {/*second row  */}
        <Row>
        {/* col 1 */}
          <Col>
            
              <img className="MajorEventsRemastered"
                src={MajorEventsRemastered}
                alt=" " width="400" height="400"
              />
            
          </Col>
          {/* <Col>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path></svg>
          </Col> */}

          {/* col 2 */}
          <Col>
          
            <img className="ColonialRemastered" src={ColonialRemastered} alt="" width="80" height="80"/>
          
          </Col>
          {/* col 3 */}
          <Col>
            
              <img className="indigenous_Remastered"
                src={indigenous_Remastered}
                alt=""
                width="80" height="80"
              />
            
          </Col>
{/* col 4 */}
          <Col>
            
              <img className="imgSitesLandmarksRemaster"
                src={SitesLandmarksRemaster}
                alt=""
                width="80" height="80"
              />
            
          </Col>
{/* col 5 */}
          <Col lg={4}>
          <div className="text3">
          <p className="text center ">Create your own</p>
          <p className="text center ">Heritage Trails</p>
          <p className="text center ">(coming soon)</p>
            </div>
          </Col>
{/* col 6 */}
<Col>
          
          <img className="ColonialRemastered1" src={ColonialRemastered} alt=""/>
        
        </Col>
          <Col>
              <img className="Haprers"
                src={Haprers}
                alt=""
                width="400" height="700"
              />
            
            
            </Col>
{/* col 7 */}
        <Col>
          
              <img className="MuesumsGalleries"
                src={MuesumsGalleries}
                alt=""
                width="80" height="80"
              />
            
          </Col>
{/* col 8 */}
          <Col>
          
              <img className="IndustryRemastered2" src={IndustryRemastered} alt="" width="80" height="80"/>
            
            
          </Col>
{/* col 9 */}
          <Col>
          
              <img className="ALLStoriesRemastered" src={ALLStoriesRemastered} alt="" />
            
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}
export default HomeSectionOne2;
