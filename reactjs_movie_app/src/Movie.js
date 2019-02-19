import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

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
  static propTypes = {
    poster: PropTypes.string.isRequired
  };
  render() {
    // console.log(this.props);
    return <img src={this.props.poster} />;
  }
}
//위와 같은 코드. state가 없고 리턴만 있음.
// function MoviePostar({ poster }) {
//   return <img src={poster} alt="Movie Poster" />;
// }

export default Movie;
