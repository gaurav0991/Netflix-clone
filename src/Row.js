import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import movieTrailer from 'movie-trailer'
import './Row.css'
function Row({title,fetchUrl,isLargeRow}) {
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    const [movie,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            console.log(movie.title)
            movieTrailer(movie?.name || ""||movie?.title).then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((e)=>console.log(e))
        }
    }
    useEffect(() => {
        console.log("heello");

        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results)
        }
        fetchData();
        
       
    }, [fetchUrl]);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row">
                <div className={`row-posters`}>       
                         {movie.map((movies)=>(
                    <img 
                    onClick={()=>handleClick(movies)}
                    key={movies.id}
                    className={`row-poster  ${isLargeRow && 'largePoster'}`}
                    src={`https://image.tmdb.org/t/p/w185/${
                    isLargeRow?    
                    movies.poster_path:movies.backdrop_path}`}/>
                ))}
                </div>

            </div>
{ trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
