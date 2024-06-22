import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import Slider from "react-slick";


export default function Home() {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    focusOnSelect: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [trending, settrending] = useState([])

  let {getTrending} = useContext(MoviesContext)

  async function getTrendy(){
  let res = await getTrending()
  settrending(res.results)
  }; 


  useEffect(()=>{getTrendy()},[])
  return (
    <div>
      
 
{ <Slider {...settings}>
      {trending.map((movie)=>  <img className='h-[646px]' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />)}
    
    </Slider> } 
    
    </div>
    );
  
}
