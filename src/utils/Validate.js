function validateEmail(email) {
  // this is for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { type: "email", message: "Email is required." };
  }
  if (!emailRegex.test(email)) {
    return { type: "email", message: "Please enter a valid email address." };
  }
  return { type: "email", message: "success" }; // No error
}

function validateMobileNumber(mobileNumber) {
  //here i added the validation for mobile number
  const mobileNumberRegex = /^[0-9]{10}$/; // Adjust this regex as needed
  if (!mobileNumber) {
    return { type: "number", message: "Mobile number is required." };
  }
  if (!mobileNumberRegex.test(mobileNumber)) {
    return { type: "number", message: "Please enter a valid mobile number." };
  }
  return { type: "number", message: "success" }; // No error
}

function validatePassword(password) {
  if (!password) {
    return { type: "password", message: "Password is required." };
  }
  if (password.length < 6) {
    return {
      type: "password",
      message: "Password must be at least 6 characters long.",
    };
  }
  return { type: "password", message: "success" }; // No error
}

export { validateEmail, validateMobileNumber, validatePassword };
