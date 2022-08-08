import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="" component={""}/>
          <Route path="" component={""} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
