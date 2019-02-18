import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <MoviePostar poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePostar extends Component {
  render() {
    // console.log(this.props);
    return <img src={this.props.poster} />;
  }
}
export default Movie;
