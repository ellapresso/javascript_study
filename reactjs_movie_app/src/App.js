import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["HAPPY DEATY DAY", "OLD BOY", "STAR WORLDS"];
const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Adventure_Time_cast.jpg/220px-Adventure_Time_cast.jpg",
  "https://img1.daumcdn.net/thumb/C216x312/?fname=http://i1.daumcdn.net/svc/image/U03/sdb/579174DA0263160002",
  "https://pbs.twimg.com/profile_images/1082834871943258112/vf6z0ow6_400x400.jpg"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
      </div>
    );
  }
}

export default App;
