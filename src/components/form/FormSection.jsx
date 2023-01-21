import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const [allValues, setAllValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAllValues({ ...allValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allValues.email && allValues.name && allValues.message) {
      console.log(allValues);
      setAllValues({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div className={styles.formSection}>
      <h3>Where you can find us</h3>
      {/* TODO add validation */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            id="name"
            name="name"
            value={allValues.name}
            type="text"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address*</Form.Label>
          <Form.Control
            id="email"
            name="email"
            value={allValues.email}
            type="email"
            placeholder="name@example.com"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message*</Form.Label>
          <Form.Control
            id="message"
            name="message"
            value={allValues.message}
            as="textarea"
            placeholder="Message"
            rows={3}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          size="lg"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormSection;
