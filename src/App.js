import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// import Home from './pages/Home/Home';
import "./App.scss";
import React from "react";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CustomerProfile from "./pages/CustomerProfile/CustomerProfile";
import RestaurantProfile from "./pages/RestaurantProfile/RestaurantProfile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreatedCrawl from "./pages/CreatedCrawlPage/CreatedCrawl";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/CreatedCrawl" component={CreatedCrawl}></Route>
          <Route
            path="/customerProfile/:id"
            component={CustomerProfile}
          ></Route>
          <Route path="/customerCrawl" component={CreatedCrawl}></Route>
          <Route
            path="/restaurantProfile/:id"
            component={RestaurantProfile}
          ></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
