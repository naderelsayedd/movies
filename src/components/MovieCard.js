import React from 'react'
import { Link } from 'react-router-dom'
export default function MovieCard({movie}) {
  return (
        <div className='col-lg-3 col-md-4 col-sm-12 mt-3'>
        <Link to={`/movie/${movie.id}`}>
            <div className='card'>
                <img src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} alt='' />
                <div className='card-overlay'>
                    <div>
                    <h5 className='card-title'>اسم الفيلم  :{movie.original_title}</h5>
                    <p>تاريخ الاصدار : {movie.release_date}</p>
                    <p>التقييم : {movie.vote_average}</p>
                    <p>لغة الفيلم : {movie.original_language}</p>
                    </div>
                </div>
            </div>
        </Link>
        </div>
  )
}
