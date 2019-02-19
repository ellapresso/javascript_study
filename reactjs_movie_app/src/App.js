import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};
  componentDidMount() {
    //많은 함수를 부를것이기 때문에 이곳에 몰아넣는것은 좋지 못함. 그래서 나눠서 함수를 만듦.
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movies, index) => {
      return (
        <Movie
          title={movies.title_english}
          poster={movies.medium_cover_image}
          key={movies.id} //인덱스를 사용하면 너무 느려질수 있음.
          genres={movies.genres}
          synopsis={movies.synopsis}
        /> //컴포넌트가 많으면 유니크한 키값이 필요
      );
    });
    return movies; //movies 에 데이터를 저장함.
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies //movies : movies  => 같기 때문에 한번만 써줌.
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_conut")
      .then(Response => Response.json()) //위 페치가 끝나면 실행 (function을 넣음, 1 attribute)
      .then(json => json.data.movies) // '=>' 화살표에 리턴이 포함되어있음.
      .catch(err => console.log(err)); //에러가 있으면 잡아
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
