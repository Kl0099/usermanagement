import React from "react";
import Auth from "../components/Auth";

const Registration = () => {
  return (
    <div className="col-md-3 col-xs-1 col-sm-1 border p-3">
      <h3 className=" text-center mb-5 mt-5">Registration Page</h3>
      <Auth type={"register"} />
    </div>
  );
};

export default Registration;
