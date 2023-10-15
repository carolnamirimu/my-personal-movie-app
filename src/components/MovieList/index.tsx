import React from 'react';
import MovieListItem from './MovieListItem';
import { movieData } from './data'
const MovieList = () => {
    console.log(movieData);
    return (
        <div>
           {movieData.results.map((movie)=>    <MovieListItem movie={movie} />)}
        
            
        </div>
    );
};

export default MovieList;