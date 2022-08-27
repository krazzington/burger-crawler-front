import React from "react";
import axios from "axios";
import "./SignUp.scss";
import Button from "../../components/Button/Button";
import NewCustomerForm from "../../components/SignUpForms/NewCustomerForm/NewCustomerForm";
import NewRestaurantForm from "../../components/SignUpForms/NewRestaurantForm/NewRestaurantForm";

const SignUp = () => {
  return (
    <>
      <div className="signUpContainer">
        <div className="signUpContainer__btnContainer">
          <Button
            cname="button__primary"
            title="I'm a Restaurant"
            onclick={""}
          />
          <Button
            cname="button__primary"
            title="I'm a Burger Crawler"
            onclick={""}
          />
        </div>
        <div className="signUpContainer__formContainer">
          {/* will have to toggle based on the button */}
          <div className="signUpContainer__formContainer--customerForm">
            <NewCustomerForm />
          </div>
          <div className="signUpContainer__formContainer--restaurantForm">
            <NewRestaurantForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
