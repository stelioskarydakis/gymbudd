import { Col, Image, Row } from "react-bootstrap";
import styles from "./Card.module.css";

const Card = ({ name, instructor, image, description, price }) => {
  return (
    <div className={styles.cardClass}>
      <Image src={image} fluid />
      <Row className="px-2">
        <Col xs={8}>
          <h5>{name}</h5>
          <div className={styles.trainedBy}>
            <strong>Trained By</strong> - {instructor}
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.price}>${price}</div>
        </Col>
      </Row>
      <p className="px-2">{description}</p>
    </div>
  );
};

export default Card;
