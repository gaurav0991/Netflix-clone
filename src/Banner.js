import React,{useEffect,useState} from 'react'
import requets from './reques'
import axios from './axios'
import './Banner.css'

function Banner() {
    const [movie,setMovies]=useState([]);
    useEffect(() => {

        async function fetchData(){
            const request=await axios.get(requets.fetchNetflix);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)])
        }
        fetchData();
        
       
    }, []);
    console.log(movie)
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
       
            <div class="banner" style={
            {
                color:"white",
                backgroundSize:"cover",
                backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
                ,backgroundPosition:"center center"
            }   
        }>
            <div className="con">
        <h1 class="display-4" style={{fontWeight:800}}>{movie.name}</h1>
        <p class="lead">
          <a class="btn btn-light btn-lg" href="#" role="button">Play</a>

          <a class="btn btn-light btn-lg" href="#" role="button" style={{marginLeft:"10px"}}>My List</a>

        </p>
        <p class="lead" style={{
            maxWidth:"450px",
            fontWeight:400
        }}>{truncate(movie.overview,100)}</p>
       </div>
        <div className="banner--fadeBottom"></div>
      </div>
        
    

    )
}

export default Banner
