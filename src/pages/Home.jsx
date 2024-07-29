import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState(null);
  const [editField, setEditField] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setData(data);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleEditClick = (field) => {
    setEditField(field);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    localStorage.setItem("user", JSON.stringify(data));
    setEditField(null);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 ">
        <Col className="d-flex justify-content-center">
          {/* here i add card component from bootstrp and also i add all values  */}
          {data && (
            <Card className="w-75">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  User Information
                </Card.Title>
                {["name", "email", "mobileNumber", "city", "state"].map(
                  (field) => (
                    <Card.Text key={field}>
                      <strong>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                      </strong>{" "}
                      {editField === field ? (
                        <Form.Control
                          type="text"
                          name={field}
                          value={data[field]}
                          onChange={handleInputChange}
                        />
                      ) : (
                        data[field]
                      )}
                      <Button
                        variant="link"
                        onClick={() => handleEditClick(field)}
                        className="ms-2"
                      >
                        Edit
                      </Button>
                    </Card.Text>
                  )
                )}
                {editField && (
                  <Button
                    variant="primary"
                    onClick={handleSaveClick}
                    className="mt-3"
                  >
                    Save
                  </Button>
                )}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
