import { Col, Container, Row } from "react-bootstrap";
import FormSection from "../../components/form/FormSection";
import MapSection from "../../components/map/MapSection";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <FormSection />
          </Col>
          <Col md={6} className={styles.rightsideCol}>
            <MapSection />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
