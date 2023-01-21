import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="text-center" md={6}>
            <p>
              Copyright © 2021-{new Date().getFullYear()} GymBudd Fitness Co.
            </p>
          </Col>
          <Col className="text-center" md={6}>
            <div className={styles.link}>
              <a href="mailto:mrkarydakis@gmail.com">
                <span className={styles.icon}>
                  <i className="far fa-envelope"></i>
                </span>
                <span className={styles.text}>mrkarydakis@gmail.com</span>
              </a>
            </div>
            <div className={styles.link}>
              <a href="tel:0035799999999">
                <span className={styles.icon}>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span className={styles.text}>+357 99999999</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
