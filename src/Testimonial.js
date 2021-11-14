import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Testimonial() {
  return (
    <div className="divTestimonial">
      <Container >
        <Row>
          <Col lg={4} sm={4}>
            <p className="txtTestimonial">
              <h1 className="headerTestimonial">Testimonial</h1>
              ‘I love the app. It’s an amazing way to understand the history of
              the places we travel to. The stories add to our experience and I
              share it with my children to bring that story to life.’
              <br />
              <br />
              <p className="prsnName">– Mel</p>
            </p>
          </Col>
          <Col lg={4} sm={4}>
            <p className="txtTestimonial">
              <h1 className="headerTestimonial">Testimonial</h1>
              ‘I think the app is awesome! Big fan of it, definitely will be
              using it a fair bit. I run past the Wollongong Entertainment
              Centre every day and never knew it was an old burial ground!’
              <br />
              <br />
              <p className="prsnName">– Daniel</p>
            </p>
          </Col>
          <Col lg={4} sm={4}>
            <p className="txtTestimonial">
              <h1 className="headerTestimonial">Testimonial</h1>
              ‘Yesterday Stories is a user-friendly place to find local short
              histories where past characters and events come to life. Locals
              and visitors have a new, easy to use, information resource.
              Yesterday Stories mobile...
              <br />
              <br />
              <p className="prsnName">...read more</p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Testimonial;
