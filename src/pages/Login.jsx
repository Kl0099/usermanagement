import React from "react";
import Auth from "../components/Auth";

const Login = () => {
  return (
    <div className="col-md-3 col-xs-1 col-sm-1 border p-3">
      <h3 className=" text-center mb-5 mt-5">Login Page</h3>
      <Auth type={"login"} />
    </div>
  );
};

export default Login;
