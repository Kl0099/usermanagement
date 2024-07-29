import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateMobileNumber,
  validatePassword,
} from "../utils/Validate";

function Auth({ type }) {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    name: "",
    mobileNumber: "",
    city: "",
    state: "",
  });

  // State to manage validation errors
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  // State to toggle password visibility
  const [showPasswords, setShowPasswords] = useState(false);

  // Function to handle form submission
  const handleformsubmit = () => {
    if (type === "register") {
      // Validate email, mobile number, and password
      let isEmailValidate = validateEmail(formInput.email.toString());
      let isNumber = validateMobileNumber(parseInt(formInput.mobileNumber));
      let isvalidatePassword = validatePassword(formInput.password);

      // Set error messages based on validation
      if (isEmailValidate.type === "email") {
        setError({ type: "email", message: isEmailValidate.message });
      }
      if (isvalidatePassword.type === "password") {
        setError({ type: "password", message: isvalidatePassword.message });
      }
      if (isNumber.type === "number") {
        setError({ type: "number", message: isNumber.message });
      }

      // If all validations are successful
      if (
        isEmailValidate.message === "success" &&
        isNumber.message === "success" &&
        isvalidatePassword.message === "success"
      ) {
        // Save user data to localStorage and navigate to home page
        localStorage.setItem("user", JSON.stringify(formInput));
        navigate("/");
      }
    } else {
      // For login
      let { email, password } = formInput;
      let data = localStorage.getItem("user");
      let parsedData = JSON.parse(data);

      if (!data) {
        setError({ type: "normal", message: "User not found" });
        return;
      }

      if (email === parsedData.email && password === parsedData.password) {
        // Sign in successfully
        navigate("/");
      } else {
        // Error while signing in
        setError({ type: "normal", message: "Invalid credentials" });
      }
    }
  };

  return (
    <Form className="w-100 mt-5 mb-2">
      {/* Display normal error message */}
      <p className="mb-2 fs-sm text-danger">
        {error.type === "normal" && error.message}
      </p>
      {type === "register" && (
        <div>
          {/* Name field */}
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

          {/* Mobile Number field */}
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

          {/* State and City fields in a single row */}
          <div className="d-flex">
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

      {/* Email field */}
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

      {/* Password field */}
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
          {error.type === "password" && error.message}
        </Form.Text>
      </Form.Group>

      {/* Checkbox to show/hide password */}
      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          onClick={() => setShowPasswords((val) => !val)}
          type="checkbox"
          label="Show password"
        />
      </Form.Group>

      {/* Link for navigating between login and registration pages */}
      <p className="text-xs w-100 text-end fs-sm">
        {type === "register" ? (
          <span>
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-primary"
            >
              Login
            </Link>
          </span>
        ) : (
          <span>
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-primary"
            >
              Signup
            </Link>
          </span>
        )}
      </p>

      {/* Submit button */}
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
