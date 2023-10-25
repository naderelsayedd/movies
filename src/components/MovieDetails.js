import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

export default function MovieDetails() {
  const param = useParams();
  const [movie , setMovie] = useState([]);
  const getMovieDetails = async() =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=6d12041c9601ff557047a9f120c9a8eb&language=ar`);
    setMovie(res.data);
  }
  useEffect(() =>{
    getMovieDetails();
  })
  return (
    <div className='container'>
      <div className='row mt-5  p-3 rounded-3 parent'>
        <div className='col-md-4 img-div mb-5'>
          <div className='card'>
          <img src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} alt={movie.title}/>
          </div>
        </div>
        <div className='col-md-8'>
          <h1>اسم الفيلم : {movie.original_title}</h1>
          ({movie.title})
          <h2 className='mt-3'>تاريخ الاصدار : {movie.release_date}</h2>
          <p>التقييم : {movie.vote_average}</p>
          <p>لغة الفيلم : {movie.original_language}</p>
        </div>
      </div>
      <div className='row  p-3 rounded-3 mt-5 overview float-right parent'>
      <h2 className='text-end'>نبذة عن الفيلم : </h2>
      <h6 className='text-end'>{movie.overview}</h6>
      </div>
      {/* <div className='row mt-5 bg-secondary p-3 text-light rounded-3 text-center d-flex justify-content-center'>
        <Link  className='btn btn-primary' to="/">العودة للصفحة الرئيسية</Link>
        <a  className='btn btn-primary' href={movie.homepage}>مشاهدة الاعلان </a>
  </div> */}
    </div>
  )
}
