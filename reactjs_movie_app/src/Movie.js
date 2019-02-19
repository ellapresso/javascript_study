import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     // console.log(this.props);
//     return (
//       <div className="Movie">
//         <div className="Movie_columns">
//           <MoviePostar poster={this.props.poster} />
//         </div>
//         <div className="Movie_columns">
//           <h1>{this.props.title}</h1>
//         </div>
//       </div>
//     );
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePostar poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genres, index) => (
            <MovieGenre genres={genres} key={index} />
          ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

// class MoviePostar extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     // console.log(this.props);
//     return <img src={this.props.poster} />;
//   }
// }

//위와 같은 코드. state가 없고 리턴만 있음.
function MoviePostar({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

function MovieGenre({ genres }) {
  return <span className="Movie_Genre">{genres}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePostar.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genres: PropTypes.string.isRequired
};

export default Movie;
