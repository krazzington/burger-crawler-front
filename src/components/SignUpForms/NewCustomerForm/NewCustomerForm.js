import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/icons/error-24px.svg";
import Button from "../../Button/Button";
import axios from "axios";
import "./NewCustomerForm.scss";

class NewCustomerForm extends React.Component {
  state = {
    name: "",
    username: "",
    home_city: "",
    country: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (event) => {
    // fill in the state with the values of input
    const { name, value } = event.target;
    // put address, city, country, name in state object but not contact object
    if (
      name === "name" ||
      name === "username" ||
      name === "home_city" ||
      name === "country" ||
      name === "email" ||
      name === "phoneNumber" ||
      name === "password" ||
      name === "confirmPassword"
    ) {
      this.setState({ [name]: value });
    }
  };

  validationEmptyFields = () => {
    let messageError = "";

    if (
      this.state.name === "" ||
      this.state.username === "" ||
      this.state.home_city === "" ||
      this.state.country === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.password === "" ||
      this.state.confirmPassword == ""
    ) {
      messageError = (
        <div className="add-customer__form-input-error">
          <img src={error} alt="error" />
          <p className="add-customer__form-input-message">
            Please fill in all fields
          </p>
        </div>
      );
    }

    this.setState({ messageError });
  };

  validationEmailPhone = () => {
    const emailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const phoneValidator = /^\d{3}-\d{3}-\d{4}$/;

    let emailError = "";
    // let phoneError = "";

    if (
      !emailValidator.test(this.state.email)
      // !phoneValidator.test(this.state.phoneNumber)
    ) {
      emailError = (
        <div className="add-customer__form-input-error">
          <img src={error} alt="error" />
          <p className="add-customer__form-input-message">
            Please enter a valid email
          </p>
        </div>
      );
      // phoneError = (
      //   <div className="add-customer__form-input-error">
      //     <img src={error} alt="error" />
      //     <p className="add-customer__form-input-message">
      //       Please enter a valid Phone Number xxx-xxx-xxxx
      //     </p>
      //   </div>
      // );
    }

    this.setState({ emailError });
    // this.setState({ phoneError });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.validationEmptyFields();

    this.validationEmailPhone();

    const [
      name,
      username,
      home_city,
      country,
      email,
      phoneNumber,
      password,
      confirmPassword,
    ] = [
      this.state.name,
      this.state.username,
      this.state.home_city,
      this.state.country,
      this.state.email,
      this.state.phoneNumber,
      this.state.password,
      this.state.confirmPassword,
    ];

    if (
      name !== "" &&
      username !== "" &&
      home_city !== "" &&
      country !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      axios
        .post("http://localhost:8080/customers", {
          name,
          username,
          home_city,
          country,
          email,
          phoneNumber,
          password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    console.log(this.state);
    e.target.reset();
  };

  render() {
    return (
      <div className="customerDivs">
        <form className="new-customer__form" onSubmit={this.handleSubmit}>
          <div className="new-customer__form-container">
            <h3 className="new-customer__form-title">Customer Details</h3>

            <div className="label-inputDiv">
              <label className="new-customer__form-label" htmlFor="name">
                Customer Name
              </label>
              <input
                className="new-customer__form-input"
                placeholder="Name"
                name="name"
                value={this.state.name.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label" htmlFor="name">
                Username
              </label>
              <input
                className="new-customer__form-input"
                placeholder="Choose a Username"
                name="username"
                value={this.state.username.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">City</label>
              <input
                className="new-customer__form-input"
                placeholder="City"
                name="home_city"
                value={this.state.home_city.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">Country</label>
              <input
                className="new-customer__form-input"
                placeholder="Country"
                name="country"
                value={this.state.country.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">Email</label>
              <input
                className="new-customer__form-input"
                placeholder="Email"
                name="email"
                value={this.state.email.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">Phone Number</label>
              <input
                className="new-customer__form-input"
                placeholder="Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber.value}
                onChange={this.handleChange}
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">Password</label>
              <input
                className="new-customer__form-input"
                placeholder="Password"
                name="password"
                value={this.state.password.value}
                onChange={this.handleChange}
                type="password"
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="label-inputDiv">
              <label className="new-customer__form-label">
                Confirm Password
              </label>
              <input
                className="new-customer__form-input"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword.value}
                onChange={this.handleChange}
                type="password"
              />
              <div>{this.state.messageError}</div>
            </div>

            <div className="new-customer__form-container new-customer__form-container--alternate">
              {this.state.messageError ? (
                <div>{this.state.messageError}</div>
              ) : (
                <div>{this.state.emailError}</div>
              )}
            </div>
            <div className="new-customer__button-container">
              {/* <Link className="button__secondary" title="Cancel" to="/">
                <p className="button__secondary-name"></p>
              </Link> */}
              <Button cname="button__primary" title="Submit" />
            </div>
          </div>
        </form>
        <form className="customerSignInForm" onSubmit={""}>
          <h3>Already a Crawler?</h3>
          <div className="label-inputDiv">
            <label className="new-customer__form-label" htmlFor="name">
              Username
            </label>
            <input
              className="new-customer__form-input"
              placeholder="usernameLogin"
              name="usernameLogin"
              value={this.state.usernameLogin}
              // onChange={this.handleChange}
            />
          </div>
          <div className="label-inputDiv">
            <label className="new-customer__form-label" htmlFor="name">
              Password
            </label>
            <input
              className="new-customer__form-input"
              placeholder="passwordLogin"
              name="passwordLogin"
              value={this.state.passwordLogin}
              // onChange={this.handleChange}
            />
          </div>
          <Button cname="button__primary" title="Submit" />
        </form>
      </div>
    );
  }
}

export default NewCustomerForm;
