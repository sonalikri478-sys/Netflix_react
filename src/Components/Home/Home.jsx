import React,{useState, useEffect} from 'react'
import "./Home.scss"
import {Link} from "react-router-dom"
import axios from 'axios'
import {BiPlay} from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey="a0b7dc80b906464e28bddcd780d9c9b2";
const url="https://api.themoviedb.org/3";
const imgUrl="https://image.tmdb.org/t/p/original"
const upcoming="movie/upcoming";
const nowPlaying="now_playing";
const popular="popular";
const topRated="top_rated";


const Card= ({img})=>(
    <img className="card" src={img} alt="poster"/>
)


const Row = ({title,
    arr=[{img:"https://pbs.twimg.com/media/Ec_7SzOUEAAuGit.jpg"}
    ],
})=>(

    <div className="row">

        <h2>{title}</h2>

        <div>
           {arr.map((item,index)=>(
            <Card key ={index} img={`${imgUrl}/${item.poster_path}`} />
           ))}
        </div>
    </div>
)

const Home = () => {

    const [upcomingMovies,setUpcomingMovies]=useState([]);
    const [popularMovies,setPopularMovies]=useState([]);
    const [nowPlayingMovies,setNowPlayingMovies]=useState([]);
    const [topRatedMovies,setTopRatedMovies]=useState([]);
    const [genre, setGenre]=useState([]);


    useEffect(()=>{
      const fetchUpcoming = async() =>{
       const {data:{results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      
      setUpcomingMovies(results)


      };

      const fetchNowPlaying = async() =>{
       const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      
      setNowPlayingMovies(results)


      };

        const fetchPopular = async() =>{
       const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      
      setPopularMovies(results)


      };

        const fetchTopRated = async() =>{
       const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      
       setTopRatedMovies(results);


      };

      const getAllGenre = async() =>{
       const {data:{genres}} = await axios.get(`${url}/genre/movie/list${topRated}?api_key=${apiKey}`);
      
      setGenre(genres);

      };

      getAllGenre();

      fetchUpcoming();
      fetchNowPlaying();
      fetchPopular();
      fetchTopRated();

    },[]);




    

  return (
    <section className="home">
        <div className="banner" style={{
        backgroundImage: popularMovies[0]? `url(${`${imgUrl}/${popularMovies[0].backdrop_path}`})`:"rgb(16, 16, 16)",
      }}>

        {
          popularMovies[0] && (
            <h1>{popularMovies[0].original_title}</h1>
          )
        } 
        {
          popularMovies[0] && (
            <p>{popularMovies[0].overview}</p>
          )
        }
        <div>
          <button> <BiPlay/> Play </button>
        <button>My List <AiOutlinePlus/> </button>
        </div>
        </div>

        <Row title={"upcoming" } arr={upcomingMovies}/>
        <Row title={"Now Playing "} arr={nowPlayingMovies}/>
        <Row title={"Popular "} arr={popularMovies}/>
        <Row title={"Top Rated "} arr={topRatedMovies}/>
        
        <div className="genreBox">
            {genre && genre.map((item)=>(
                <Link key={item.id} to={`/genre/${item.id}`}>{item.name} </Link>
            ))}
        </div>
    </section>
  );
};

export default Home