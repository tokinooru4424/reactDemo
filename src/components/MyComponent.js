import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Duc",
    age: 21,
    address: "Hanoi",
  };

  handleClick(event) {
    this.setState({
      name: "Kenji",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }

  handleOnMouseOver = (event) => {
    console.log(event.pageX, event.pageY);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and my age is {this.state.age}
        <button onMouseOver={() => this.handleOnMouseOver}>Hover me</button>
        <button onClick={(event) => this.handleClick()}>Click me</button>
      </div>
    );
  }
}
export default MyComponent;
