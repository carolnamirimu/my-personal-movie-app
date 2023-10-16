import React from 'react';
import MovieListItem from './MovieListItem';
import { movieData } from './data'
const MovieList = () => {
    console.log(movieData);
    return (
        <div>
           <ol>
           <li> <a href='/'> Select favorite movie</a></li>
           {/* {movieData.results.map((movie)=>    <MovieListItem movie={movie} />)}
         */}
            <li><a href='/'>List of favorite movies</a></li>
                <li><a href='/'> About me</a>
            </li>
      </ol>
        </div>
    );
};

export default MovieList;