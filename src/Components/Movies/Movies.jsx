import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Movies() {

let {getMovies , addToWatchList} =useContext(MoviesContext)

const [movies, setMovies] = useState([])


async function getDataFromMovies(){

  let response = await getMovies()
  setMovies(response.results)
}


async function addToWatch(movieID){
  let result = await addToWatchList(movieID)
 if(result.success){
  toast.success("Movie Added to WatchList",{position:"bottom-left"})

 }else{
  toast.warn("SomeThing went wrong")
 }
  

}

useEffect(()=>{getDataFromMovies()},[])

  return <>
  <div className='container w-full mt-4 mx-auto '>
      <div className=" gap-2 grid grid-cols-12  min-h-100  " >


    {movies.map((movie)=>{
      return <>
      
      <Card key={movie.id} className='  sm:col-span-12  md:col-span-4 lg:col-span-3 ' isPressable isBlurred>
      <Link  to={`/movieDetails/${movie.id}`}>
      <CardBody className="overflow-visible py-2">
        <Image
        classNames='w-full'
          alt="Card background"
          className="object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col md:h-[70px]  lg:h-auto  items-start">
      <h4 className="font-bold text-small mx-auto">{movie.original_title}</h4>
      <div className='w-full flex  justify-between'>
      <small className="text-default-500 ">Release Date :{movie.release_date}</small>
      <small className="text-default-500">Rating : {movie.vote_average}</small>
      </div>
      </CardHeader>
      </Link>
      <Button onClick={()=>{addToWatch(movie.id)}} className="bg-gradient-to-tr from-red-500 to-orange-400 text-white shadow-lg w-full ">
        Add To WatchList
      </Button>
    </Card>
    
      </>
      
    })}

    </div>
    </div>
  </>
  
 
}
