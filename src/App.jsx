import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Home from "./components/Home";
import Weather from "./components/Weather";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      cities: ["Саратов", "Москва"],
    };
  }

  componentDidMount() {
    const cities = localStorage.getItem("cities");

    if (cities) {
      this.setState({ cities: JSON.parse(cities) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.cities !== this.state.cities) {
      localStorage.setItem("cities", JSON.stringify(this.state.cities));
    }
  }

  addCity = (city) => {
    this.setState({
      cities: [...this.state.cities, city],
    });
  };

  removeCity = (city) => {
    this.setState({
      cities: this.state.cities.filter((currentCity) => currentCity !== city),
    });
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main">
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home">
                <Home
                  cities={this.state.cities}
                  addCity={this.addCity}
                  removeCity={this.removeCity}
                  inputValue={this.state.inputValue}
                  onInputChange={this.onInputChange}
                />
              </Route>
              <Route path="/weather">
                <Weather cities={this.state.cities} />
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
