import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Duc",
    age: 21,
    address: "Hanoi",
  };

  handleClick = (event) => {
    console.log("My name is ", this.state.name);
  };

  handleOnMouseOver(event) {
    console.log(event.pageX, event.pageY);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default MyComponent;
