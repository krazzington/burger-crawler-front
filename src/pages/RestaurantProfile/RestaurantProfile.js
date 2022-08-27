import React from "react";
import axios from "axios";
import "./RestaurantProfile.scss";
import BurgerCard from "../../components/BurgerCard/BurgerCard";
import Button from "../../components/Button/Button";
import AddBurger from "../../components/AddBurger/AddBurger";

//Once sign in, the restaurant info needs to

class RestaurantProfile extends React.Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/restaurants/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ restaurants: res.data });
        console.log(this.state.restaurants);
      });
  }

  render() {
    return (
      <>
        <div className="restaurantProfileContainer">
          <div className="restaurantProfileContainer__infoDiv">
            <div>
              <h2 className="restaurantProfileContainer__infoDiv">
                Hello Restaurant {this.state.restaurants.restaurant}
              </h2>
              <p>{this.state.restaurants.id}</p>
              <p>{this.state.restaurants.city}</p>
              <p>{this.state.restaurants.country}</p>
              <p>{this.state.restaurants.street_address}</p>
              <p>{this.state.restaurants.post_code}</p>
              <p>{this.state.restaurants.email}</p>
              <p>{this.state.restaurants.phoneNumber}</p>
            </div>
          </div>
          <div className="restaurantProfileContainer__addBurgerDiv">
            <form>
              <div>
                <AddBurger />
              </div>
            </form>
          </div>
          <div className="cardDiv">
            <BurgerCard />
          </div>
        </div>
        <div className="completedCrawlContainer">
          <p>This will chart the crawls of the restaurant</p>
        </div>
      </>
    );
  }
}

export default RestaurantProfile;
