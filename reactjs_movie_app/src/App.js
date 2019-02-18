import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

// const movieTitles = ["HAPPY DEATH DAY", "OLD BOY", "STAR WORLDS"];
// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Adventure_Time_cast.jpg/220px-Adventure_Time_cast.jpg",
//   "https://img1.daumcdn.net/thumb/C216x312/?fname=http://i1.daumcdn.net/svc/image/U03/sdb/579174DA0263160002",
//   "https://pbs.twimg.com/profile_images/1082834871943258112/vf6z0ow6_400x400.jpg"
// ];

const movies = [
  {
    title: "HAPPY DEATH DAY",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Adventure_Time_cast.jpg/220px-Adventure_Time_cast.jpg"
  },
  {
    title: "OLD BOY",
    poster:
      "https://img1.daumcdn.net/thumb/C216x312/?fname=http://i1.daumcdn.net/svc/image/U03/sdb/579174DA0263160002"
  },
  {
    title: "STAR WORLDS",
    poster:
      "https://pbs.twimg.com/profile_images/1082834871943258112/vf6z0ow6_400x400.jpg"
  }
];
class App extends Component {
  state = {
    greeting: "Hola!"
  };
  componentDidMount() {
    setTimeout(() => {
      // this.state.greeting = "somthing";
      this.setState({
        greeting: "hello"
      });
    }, 2000); //2초뒤 바뀐 greeting값 출력
  }
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movies, index) => {
          return (
            <Movie title={movies.title} poster={movies.poster} key={index} /> //컴포넌트가 많으면 유니크한 키값이 필요
          );
        })}
        {/* <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} /> */}
      </div>
    );
  }
}

export default App;
