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
  const [error, setError] = useState({
    type: "",
    message: "",
  });
  // this state for show password
  const [showPasswords, setShowPasswords] = useState(false);
  const handleformsubmit = () => {
    if (type === "register") {
      // here i check if email number and password are valid or not
      let isEmailValidate = validateEmail(formInput.email.toString());
      let isNumber = validateMobileNumber(parseInt(formInput.mobileNumber));
      let isvalidatePassword = validatePassword(formInput.password);
      // console.log(isEmailValidate);
      // console.log(isNumber);
      // console.log(isvalidatePassword);
      // here i check if email number and password are valid
      if (isEmailValidate.type === "email") {
        setError({ type: "email", message: isEmailValidate.message });
      }
      if (isvalidatePassword.type === "password") {
        setError({ type: "password", message: isvalidatePassword.message });
      }
      if (isNumber.type === "number") {
        setError({ type: "number", message: isNumber.message });
      }
      // if all three are is valid then
      if (
        isEmailValidate.message === "success" &&
        isNumber.message === "success" &&
        isvalidatePassword.message === "success"
      ) {
        // console.log(JSON.parse(localStorage.getItem("user")));
        localStorage.setItem("user", JSON.stringify(formInput));
        navigate("/");
      }
    } else {
      let { email, password } = formInput;
      let data = localStorage.getItem("user");
      let parsedData = JSON.parse(data);
      if (!data) {
        setError({ type: "normal", message: "user not found" });
        return;
      }
      if (email === parsedData.email && password === parsedData.password) {
        //sign in successfully
        navigate("/");
      } else {
        //error while signing
        setError({ type: "normal", message: "Invalid credentials" });
      }
    }
  };

  return (
    <Form className="w-100 mt-5 mb-2">
      <p className="mb-2 fs-sm text-danger">
        {error.type === "normal" && error.message}
      </p>
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
          <div className=" d-flex ">
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
          {error.type === "password" && error.message}
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
              signup
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
