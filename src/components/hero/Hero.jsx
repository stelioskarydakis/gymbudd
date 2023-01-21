import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="bg-overlay"></div>
      <Container className="text-center">
        <Row>
          <Col lg={6} className="m-auto">
            <h6 className={styles.moto}>
              new way to build a healthy lifestyle!
            </h6>
            <h1>UPGRADE YOUR BODY AT GYMBUDD FITNESS</h1>
            <div className={styles.buttonsContainer}>
              <a href="#about" className="custom-btn bordered-btn">
                get started
              </a>

              <a href="#schedule" className="custom-btn">
                learn more
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
