import React from "react";
import axios from "axios";
import "./CustomerProfile.scss";
import BurgerCard from "../../components/BurgerCard/BurgerCard";
import Button from "../../components/Button/Button";
import CompletedCrawls from "../../components/CompletedCrawls/CompletedCrawls";

class CustomerProfile extends React.Component {
  state = {
    customers: [],
    burgers: [],
    customerCrawl: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/customers/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ customers: res.data });
        console.log(this.state.customers);
      });

    axios.get(`http://localhost:8080/burgers`).then((res) => {
      this.setState({ burgers: res.data });
      console.log(this.state.burgers);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.state.burgers[2]);
    return (
      <>
        <div className="customerProfileContainer">
          <h2 className="customerProfileContainer__greeting">
            Hello {this.state.customers?.name ?? ""}
          </h2>
          <div className="customerProfileContainer__dropDownMenu">
            <p>Choose Your Burgers</p>
          </div>

          <div className="cardDiv">
            <form onSubmit={this.handleSubmit}>
              {this.state.burgers.map((burger) => {
                return (
                  <>
                    <BurgerCard
                      key={burger.id}
                      imagelink={burger.image}
                      burgerName={burger.burger_name}
                      burgerDesc={burger.description}
                      id={burger.id}
                    />
                    <div className="cardDiv__form">
                      <label className="cardDiv__form--label">
                        Select Burger for Crawl
                      </label>
                      <input
                        type="checkbox"
                        name={`selection-${burger.id}`}
                        value={burger.restaurant_id}
                      ></input>
                    </div>
                  </>
                );
              })}
              <div className="cardDiv__buttonDiv">
                {/* There's a question on the BurgerCard comp. Where is the form to create a crawl going to be? */}
                <Button title="Create my Crawl" />
              </div>
            </form>
          </div>
        </div>
        <div className="completedCrawlContainer">
          <div className="completedCrawlContainer__crawlInfo">
            {/* this may not be the full crawl, just the burgers tried
          A get is needed once the  */}
            <CompletedCrawls />
          </div>
        </div>
      </>
    );
  }
}

export default CustomerProfile;
