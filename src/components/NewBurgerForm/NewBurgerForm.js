import Button from "../Button/Button";
import "./NewBurgerForm.scss";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NewBurgerForm extends React.Component {
  state = {
    // The restaurant_id and name will not change state once a user is logged in
    restaurant_id: "",
    restaurant_name: "",
    burger_name: "",
    description: "",
    image: "",
  };

  // CategoryList = [
  //   ...new Set(this.props.burgerlist.map((burger) => burger.category)),
  // ];

  handleChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  validationEmptyFields = () => {
    let messageError = "";

    if (
      //where does the img come in here?
      this.state.name === "" ||
      this.state.description === "" ||
      this.state.glutenFree === ""
    ) {
      messageError = (
        <div className="add-burger__form-input-error">
          <img src={""} alt="error" />
          <p className="add-burger__form-input-message">
            Please fill in all fields
          </p>
        </div>
      );
    }

    this.setState({ messageError });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  //     if (name !== "" && description !== "" && glutenFree !== "") {
  //       axios
  //         .post("http://localhost:8080/burger", {
  //           name: e.target.name.value,
  //           description: e.target.description.value,
  //           glutenFree: e.target.category.value,
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //       // }

  //       console.log(this.state);
  //       console.log(this.state.name);
  //       e.target.reset();
  //     }
  //   }

  render() {
    //The restaurant name and ID has to be included in this form, but hidden.
    // So try to bring it into the form but hidden
    // const id = this.props.match.params.id;
    // console.log(id);
    return (
      <form className="add-burger__form" onSubmit={this.handleSubmit}>
        <div className="add-burger__form-container">
          <h3 className="add-burger__form-title">Create a Burger</h3>
          <div className="hidden-div-with-restaurant-info">
            {/* This div will be hidden but contain the restaurant id and name, populated automatically */}
            <label className="add-burger__form-label">
              {/* Restaurant id to go here */}
            </label>
            <input className="add-burger__form-input" name="restaurant_id" />

            <label className="add-burger__form-label">
              {/* Restaurant name to go here */}
            </label>
            <input className="add-burger__form-input" name="restaurant_name" />
          </div>

          <label className="add-burger__form-label">Burger Name</label>
          <input
            type="text"
            className="add-burger__form-input"
            placeholder="Burger Name"
            name="burger_name"
          />
          <div>{this.state.messageError}</div>

          <label className="add-burger__form-label">Description</label>
          <input
            type="text"
            className="add-burger__form-input"
            placeholder="Please enter a brief burger description.."
            name="description"
          />
          <div>{this.state.messageError}</div>

          {/* <input type="file" id="real-file" hidden="hidden"></input> */}
          <Button id="pic-button">Upload the Burger Pic</Button>
        </div>
        <div className="add-burger__button-container">
          {/* <Link className="button__secondary" to="/">
            <p className="button__secondary-name">Cancel</p>
          </Link> */}
          <Button cname="button__primary" title="+Add burger" />
        </div>
      </form>
    );
  }
}

export default NewBurgerForm;
