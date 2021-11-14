import { Container, Row, Col } from "react-bootstrap";
import logo from "./imgs/footerlogo.png";
// import Current News from './Current News'
function footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={2} sm={2}>
            <img src={logo} alt="Logo" class="footerlogo" />
          </Col>
          <Col lg={4} sm={4}>
            <ul className="a">
              <li>
                <a href="#About us">About us</a>
              </li>
              <li>
                <a href="#Contact Us">Contact Us</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Film Competition">Film Competition</a>
              </li>
            </ul>
          </Col>
        
          <Col lg={4} sm={4}>
            <ul className="b">
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
              <li>
                <a href="#Media">Media</a>
              </li>
              <li>
                <a href="#Terms & Conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="#Privacy Policy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright">Copyright @ 2021 Yesterday stories PTY LTD</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default footer;
