import { Col, Container, Row } from "react-bootstrap";
import ScheduleTable from "../../components/scheduleTable/ScheduleTable";
import styles from "./Schedules.module.css";

const Schedules = () => {
  return (
    <section className={styles.schedule} id="schedule">
      <Container>
        <Row>
          <Col>
            <h6 className="text-center">our weekly GYM schedules</h6>
            <h2 className="text-center">Workout Timetable</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="schedule-container">
              <ScheduleTable />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Schedules;
