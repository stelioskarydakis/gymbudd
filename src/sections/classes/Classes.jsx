import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../components/card/Card";
import { trainingClasses } from "../../data";
import styles from "./Classes.module.css";

const Classes = () => {
  return (
    <section className={styles.classes} id="classes">
      <Container>
        <Row>
          <Col>
            <h6 className="text-center">Get A Perfect Body</h6>
            <h2 className="text-center">Our Training Classes</h2>
            <div className={styles.classesContainer}>
              {trainingClasses.map((classItem) => {
                return <Card key={classItem.id} {...classItem} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Classes;
