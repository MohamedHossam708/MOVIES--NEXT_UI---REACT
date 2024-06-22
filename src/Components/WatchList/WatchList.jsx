import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function WatchList() {

const [Watchlist, setWatchlist] = useState([])

let {getWatchList , removeFromWatchList}= useContext(MoviesContext)



async function removeFromWatch(movieID){

let res =await removeFromWatchList(movieID)

let filterdMovies=[...Watchlist]

let final = filterdMovies.filter((movie)=>movie.id !== movieID)

setWatchlist(final)

if(res?.success==true){
    toast.success("Movie Removed")

}else{
  toast.error("something wrong try again")
}

}

async function watchList(){
  let response=await getWatchList()
  setWatchlist(response.results)
  console.log(response.results);
}

useEffect(()=>{watchList();},[])



if(WatchList===0){
  return<>
  
  <div className='w-full h-{800px}  flex justify-center items-center '><h3 className='mt-52 text-3xl font-bold'><span className='text-red-700'>W</span>atchList is empty</h3> </div>
  </>
}else{
  return<>
  <div className='container w-full mt-4 mx-auto '>
  <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      
{}

  {Watchlist?.map((movie)=>{
    return <>

    
     
    <Card  key={movie.id} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6 md:col-span-4">
    <Link  to={`/movieDetails/${movie?.id}`}>
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
      </CardHeader>
      <Image
        removeWrapper
        alt={`${movie?.title}`}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      </Link>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-medium font-bold ">{movie?.title}</p>
          <p className="text-black text-medium">{movie?.release_date}</p>
        </div>
        <Button onClick={()=>{removeFromWatch(movie?.id)}} className="text-tiny" color="danger" radius="full" size="sm">
          Delete
        </Button>
      </CardFooter>

    </Card>

   
  
    
    
    </>
    
  })}


</div></div>
  </>
}

 
 
    
  
   
}
