import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePostar />
        <h1>hello this is Movies</h1>
      </div>
    );
  }
}

class MoviePostar extends Component {
  render() {
    return (
      <img src="https://img1.daumcdn.net/thumb/C216x312/?fname=http://i1.daumcdn.net/svc/image/U03/sdb/579174DA0263160002" />
    );
  }
}
export default Movie;
