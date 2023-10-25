import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {

  const [pageCount , setPageCount] = useState(0);
  const [movies , setMovies] =useState([]);
  const getAllMovies = async ()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=226d397e18440448d441cf91c2e5283c&language=ar");

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  }

  const getPage = async (page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=226d397e18440448d441cf91c2e5283c&language=ar&page=${page}`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)

  }
  console.log("total pages  : " + pageCount);

  const search =async (word)=>{
    if(word ===''){
      getAllMovies();
    }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6d12041c9601ff557047a9f120c9a8eb&query=${word}&language=en`) ;
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
    }
  }

  useEffect(() =>{
    getAllMovies();
    // getPage()
  } , [])
  console.log(movies);
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar search={search}/>
    <Routes>
      <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>} />
      <Route path='/movie/:id' element={<MovieDetails />}/>
    </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
