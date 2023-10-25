import React from 'react'
import MovieCard from './MovieCard'
import Paginate from './Pagination';

export default function MoviesList({movies , getPage , pageCount}) {
  return (
    <div className='container'>
      <div className='row'>
    { movies.length >= 1 ? (movies.map((movie) => {
      console.log(movies.length);
      return (
          <MovieCard key={movie.id} movie={movie}/>
      );
  })) : <h2 className='mt-5 text-danger'>لأ يوجد اي افلام ...</h2> }
      </div>

      {movies.length >= 1 ? (<Paginate getPage={getPage} pageCount={pageCount}/>) : null}
      
      
    </div>
  )
}
