import styles from "./Info.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Info = () => {
  return (
    <section className={styles["info-container"]}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.leftside}>
              <h2>New to the GymBudd?</h2>
              <h4>Your membership is up to 2 months FREE ($62.50 per month)</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum quod adipisci sapiente cum obcaecati fugiat temporibus
                aperiam itaque debitis velit, ipsum aut perferendis magnam
                eligendi nobis. Molestias esse deleniti necessitatibus!
              </p>
              <div className="pt-4">
                <a href="#contact" className="custom-btn filled-btn">
                  Become a member today
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className={styles.rightsideCol}>
            <div className={styles.rightside}>
              <h2>Working hours</h2>
              <div className="working-hours">
                <p>
                  <strong className="text-white">Sunday : Closed</strong>
                </p>
                <p>
                  <strong className="text-white">Monday - Friday</strong>
                  <span>7:00 AM - 10:00 PM</span>
                </p>
                <p>
                  <strong className="text-white">Saturday</strong>
                  <span>6:00 AM - 4:00 PM</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
