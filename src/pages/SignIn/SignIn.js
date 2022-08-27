import React from "react";
import axios from "axios";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <>
      <div className="signInContainer">
        <form className="form" id="signIn">
          <h1 className="form__title">SignIn</h1>
          {/* <div className="form__message">
            Incorrect username/password combo -- Not that combo
          </div> */}
          <div className="form__input-group">
            <input
              type="text"
              class="form__input"
              placeholder="Username or email"
            ></input>
          </div>
          <div className="form__input-group">
            <input
              type="text"
              class="form__input"
              placeholder="Password"
            ></input>
          </div>

          <button>Sign In</button>
        </form>
        <p className="form__text">
          <a href="#" className="form__link">
            Forgot your password?
          </a>
        </p>
        <p className="form__text">
          <a id="linkCreateAccount" className="form__link">
            No account? Create One
          </a>
        </p>
      </div>
    </>
  );
};

export default SignIn;
