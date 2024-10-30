import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Duc",
    age: 21,
    address: "Hanoi",
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
