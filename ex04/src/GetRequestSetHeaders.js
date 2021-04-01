import React from "react";

class GetRequestSetHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalReactPackages: null };
  }

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("api.npms.io/v2/search?q=react", { headers })
      .then((response) => response.json())
      .then((data) => this.state({ totalReactPackages: data.total }));
  }

  render() {
    const { totalReactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Set Headers</h5>
        <div className="card-body">Total packages: {totalReactPackages}</div>
      </div>
    );
  }
}

export default GetRequestSetHeaders;
