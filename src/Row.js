import React , {useState,useEffect} from 'react';
import axios from './axios'; 
import requests from './requests';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url ="https://image.tmdb.org/t/p/w500"
function Row({title,fetchUrl,isLargeRow}){

    const [movies, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        //if [], run once when the row loads,and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);


            return request;
        }
        fetchData();

    },[fetchUrl]);
    
     const opts = {
      height: '590',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick =(movie)=>{
        if(trailerUrl){    
            setTrailerUrl('');
        }else{
            console.log(movie.original_title);
            const name = movie.original_title;
            movieTrailer(name, ( error, response ) => {
                if(response){
                    const urlParams = new URLSearchParams(new URL(response).search);
            setTrailerUrl(urlParams.get('v'));
                }
            
     //=> http://path/to/trailer
 } )
            
                
            
        }
        
    }

    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie=>(
                    <img key={movie.id} 
                    onClick={()=> handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    
                    alt={movie.name}></img>
                ))}
            </div>
          { trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row;