import { Container, Row, Col } from "react-bootstrap";
import { team } from "../../data";
import TeamCard from "../teamCard/TeamCard";
import styles from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={styles.aboutTextContainer}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.textContainer}>
              <h2>Hello, we are GymBudd</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                deleniti? Vel, itaque nulla fugit cumque blanditiis eum rerum ut
                deleniti architecto! Soluta excepturi repudiandae doloremque
                quia ducimus voluptatum reprehenderit cupiditate?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, you can{" "}
                <a href="#contact">contact us</a>. Thank you.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.teamsContainer}>
              {team.map((teamItem) => {
                return <TeamCard key={teamItem.id} {...teamItem} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutText;
