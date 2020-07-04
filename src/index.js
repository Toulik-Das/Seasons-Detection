import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//Class Components
class App extends React.Component {
  //React state
  constructor(props) {
    //must define super
    super(props);

    this.state = { lat: null, errorMessage: "" };

    //geolocation API
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //In React we must have to define render()
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h1>Latitude:{this.state.lat}</h1>
        </div>
      );
    }

    return <div>Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
