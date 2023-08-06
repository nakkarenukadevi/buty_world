import React from "react";

const Hoc = (Componts) => {
  return class extends React.Component {
    state = {
      auth: true,
    };
    render() {
      return <div>{this.state.auth ? <Componts /> : <h1>login </h1>}</div>;
    }
  };
};
export default Hoc;
