import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/icons/error-24px.svg";
import "./NewRestaurantForm.scss";
import Button from "../../Button/Button";

class NewRestaurantForm extends React.Component {
  state = {
    restaurant: "",
    city: "",
    country: "",
    street_address: "",
    post_code: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  //HAVE KHALID EXPLAIN THIS
  handleChange = (event) => {
    // fill in the state with the values of input including contact object details
    const { name, value } = event.target;
    // put address, city, country, name in state object but not contact object
    if (
      name === "restaurant" ||
      name === "city" ||
      name === "country" ||
      name === "street_address" ||
      name === "post_code" ||
      name === "glutenfree_options" ||
      name === "email" ||
      name === "phoneNumber"
    ) {
      this.setState({ [name]: value });
    }
  };

  validationEmptyFields = () => {
    let messageError = "";

    if (
      this.state.restaurant === "" ||
      this.state.city === "" ||
      this.state.country === "" ||
      this.state.street_address === "" ||
      this.state.post_code === "" ||
      this.state.glutenfree_options === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === ""
    ) {
      messageError = (
        <div className="add-restaurant__form-input-error">
          <img src={error} alt="error" />
          <p className="add-restaurant__form-input-message">
            Please fill in all fields
          </p>
        </div>
      );
    }

    this.setState({ messageError });
  };

  validationEmailPhone = () => {
    const emailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneValidator = /^\d{3}-\d{3}-\d{4}$/;

    let emailError = "";
    let phoneError = "";

    if (
      !emailValidator.test(this.state.email) ||
      !phoneValidator.test(this.state.phoneNumber)
    ) {
      emailError = (
        <div className="add-restaurant__form-input-error">
          <img src={error} alt="error" />
          <p className="add-restaurant__form-input-message">
            Please enter a valid email
          </p>
        </div>
      );
      phoneError = (
        <div className="add-restaurant__form-input-error">
          <img src={error} alt="error" />
          <p className="add-restaurant__form-input-message">
            Please enter a valid Phone Number xxx-xxx-xxxx
          </p>
        </div>
      );
    }

    this.setState({ emailError });
    this.setState({ phoneError });
  };

  render() {
    return (
      <>
        <form className="restaurantSignInForm" onSubmit={""}>
          <h3>Already a Restaurant?</h3>
          <div className="label-inputDiv">
            <label className="new-restaurant__form-label" htmlFor="name">
              Restaurant
            </label>
            <input
              className="new-restaurant__form-input"
              placeholder="Username"
              name="usernameLogin"
              value={this.state.usernameLogin}
              // onChange={this.handleChange}
            />
          </div>
          <div className="label-inputDiv">
            <label className="new-restaurant__form-label" htmlFor="name">
              Password
            </label>
            <input
              className="new-restaurant__form-input"
              placeholder="Password"
              name="passwordLogin"
              value={this.state.passwordLogin}
              // onChange={this.handleChange}
            />
          </div>
          <Button cname="button__primary" title="Submit" />
        </form>
      </>
    );
  }
}

export default NewRestaurantForm;
