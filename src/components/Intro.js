import { Button, Col, Container, Row } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="  intro">
      <Container className="text-white d-flex justify-content-center align-item-center text-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAPAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
