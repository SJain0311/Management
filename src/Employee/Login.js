import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="m-5">
      <center>
        <h1 style={{ color: "#0d6efd" }}>Login</h1>
      </center>
      <form>
        <div className="form-group m-2">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="fname"
            className="form-control m-1"
            id="exampleInputEmail1"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group m-2">
          <label for="exampleInputEmail1">Last Name</label>
          <input
            type="lname"
            className="form-control m-1"
            id="exampleInputEmail1"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group m-2">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="lname"
            className="form-control m-1"
            id="exampleInputEmail1"
            placeholder="Enter Email"
          />
        </div>
        <fieldset className="form-group m-2">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="gridRadios1">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="gridRadios2">
                  Male
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                  disabled
                />
                <label className="form-check-label" for="gridRadios3">
                  Other
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div>
          Please Select Your Hobbies:
          <br />
          <input type="checkbox" name="hobbies" id="male" />
          <label>Sing</label>
          <br />
          <input type="checkbox" name="dance" id="female" />
          <label>Dance</label>
          <br />
          <input type="checkbox" name="read" id="other" />
          <label>Read</label>
          <br />
          <br />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          Not Have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
      <div className="footer mr-2 ">
          <Link to="/managerLogin" style={{active:'none',marginRight:10}}>
            Manager Login Page
          </Link>
        </div>
    </div>
  );
};

export default Login;
