import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import socketIOClient from "socket.io-client";
import "./App.css";

const socket = socketIOClient("http://localhost:5000");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0,
    };
  }

  setPercent = (percent) => {
    this.setState({
      percent,
    });
  };

  startProgress = () => {
    socket.on("to33End", (percent) => this.setPercent(percent));
    socket.emit("to33Start", 33);

    socket.on("to66End", (percent) => this.setPercent(percent));
    socket.emit("to66Start", 66);

    socket.on("to100End", (percent) => this.setPercent(percent));
    socket.emit("to100Start", 100);
  };

  render() {
    const { percent } = this.state;

    return (
      <div className="App">
        <div style={{ width: "500px" }}>
          <ProgressBar striped variant="success" now={percent} />
        </div>
        <br />
        <p>
          <Button variant="primary" active onClick={this.startProgress}>
            Primary button
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
