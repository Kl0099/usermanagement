import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Auth({ type }) {
  // this is all form inputs
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    name: "",
    mobileNumber: "",
    city: "",
    state: "",
  });
  // this is for validate user
  const [error, setError] = useState({ type: "", message: "" });
  // this state for show password
  const [showPasswords, setShowPasswords] = useState(false);
  const handleformsubmit = () => {
    console.log(formInput);
  };

  return (
    <Form className="w-100 mt-5 mb-2">
      {type === "register" && (
        <div>
          {/* name field */}
          <Form.Group
            className="mb-3"
            controlId="formBasicName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          {/* mobile field */}
          <Form.Group
            className="mb-3"
            controlId="formBasicnumber"
          >
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Mobile Number"
              onChange={(e) =>
                setFormInput({
                  ...formInput,
                  mobileNumber: e.target.value,
                })
              }
            />
            <Form.Text className="text-muted">
              {error.type === "number" && error.message}
            </Form.Text>
          </Form.Group>
          {/* here state and city field in single row */}
          <div className=" d-flex space-2">
            <Form.Group
              className="mb-3"
              controlId="formBasicstate"
            >
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Gujarat"
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    state: e.target.value,
                  })
                }
              />
              <Form.Text className="text-muted">
                {error.type === "state" && error.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicnumber"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Ahmedabad"
                onChange={(e) =>
                  setFormInput({
                    ...formInput,
                    city: e.target.value,
                  })
                }
              />
              <Form.Text className="text-muted">
                {error.type === "city" && error.message}
              </Form.Text>
            </Form.Group>
          </div>
        </div>
      )}
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) =>
            setFormInput({
              ...formInput,
              email: e.target.value,
            })
          }
        />
        <Form.Text className="text-muted">
          {error.type === "email" && error.message}
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type={showPasswords ? "text" : "password"}
          placeholder="Password"
          onChange={(e) =>
            setFormInput({
              ...formInput,
              password: e.target.value,
            })
          }
        />
        <Form.Text className="text-muted">
          {error.type === "email" && error.message}
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          onClick={() => setShowPasswords((val) => !val)}
          type="checkbox"
          label="show password"
        />
      </Form.Group>
      {/* here link for visit login and registration page */}
      <p className=" text-xs w-100 text-end fs-sm ">
        {type === "register" ? (
          <span>
            already have an account?{" "}
            <Link
              to={"/login"}
              className="text-primary"
            >
              Login
            </Link>
          </span>
        ) : (
          <span>
            dont have an account?{" "}
            <Link
              to={"/register"}
              className=" text-primary "
            >
              Registration
            </Link>
          </span>
        )}
      </p>

      <Button
        className="w-100 fw-bold"
        variant="primary"
        type="button"
        onClick={handleformsubmit}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Auth;
