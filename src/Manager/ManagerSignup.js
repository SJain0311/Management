import React from "react";
import { Link } from "react-router-dom";

const ManagerSignup = () => {
  return (
    <div>
      <div className="m-5">
      <center>
        <h1 style={{color:'#0d6efd'}}>Manager Signup</h1>
      </center>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <Link to="/managerLogin">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ManagerSignup;
