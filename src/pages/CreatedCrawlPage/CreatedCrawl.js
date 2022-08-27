import React from "react";
import axios from "axios";
import "./CreatedCrawl.scss";
import Button from "../../components/Button/Button";

class CreatedCrawl extends React.Component {
  state = {
    customerCrawl: [],
    burgers: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/customerCrawl`).then((res) => {
      this.setState({ customerCrawl: res.data });
    });
    axios.get(`http://localhost:8080/burgers`).then((res) => {
      this.setState({ burgers: res.data });
    });
  }
  filterData = this.state.burgers.filter((burger) => {
    return burger.id !== 47;
  });

  render() {
    console.log(this.filterData);
    return (
      <>
        <div className="crawlContainer">
          <div className="crawlContainer__info-customer">
            <div className="cardDiv">
              <img className="cardDiv__burgerImg" src={""} />
              <h3 className="cardDiv__burgerName">{""}</h3>
            </div>
          </div>
          <div className="crawlContainer__restaurants-container">
            <div className="crawlContainer__info-restaurants--header">
              Display a header when on tablet or desktop - Rows will be
              Restaurant and Complete?
            </div>
            <div className="crawlContainer__restaurants-container      ">
              <div className="restaurants-container">
                <span className="restaurants-container__restaurant-name">
                  Info from the chosen restaurants will go here, in no order.But
                  each{" "}
                </span>
                <Button className="restaurants-container__button">
                  Complete{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CreatedCrawl;
