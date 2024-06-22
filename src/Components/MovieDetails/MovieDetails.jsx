import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import { useParams } from 'react-router'
import {Button, Card, CardBody, Image} from "@nextui-org/react";
import { toast } from 'react-toastify';


export default function MovieDetails() {

let{getMovieDetails,addToWatchList} = useContext(MoviesContext)
const [Movie, setMovie] = useState({})
let {id} = useParams()

async function addToWatch(id){
  let result = await addToWatchList(id)
 if(result.success){
  toast.success("Movie Added to WatchList",{position:'bottom-right'})

 }else{
  toast.warn("SomeThing went wrong")
 }
  

}

  

async function getDetails(id){
  let response =await getMovieDetails(id)
  if(response){
    setMovie(response)}

}

useEffect(()=>{(getDetails(id));},[])

  return <>
      <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-5 md:grid-cols-12 gap-6 md:gap-4 ">

          {/* image part start */}
          <div className=" col-span-6 md:col-span-4">
            <Image
              alt={`${Movie?.title} cover`}
              className="object-cover"
              height={200}
              shadow="md"
              src={`https://image.tmdb.org/t/p/original${Movie?.poster_path}`}
              width="100%"
            />
          </div>
          {/* image part ends */}
          {/* right side start */}
          <div className="col-span-7 md:col-span-8 flex relative flex-col items-center">
            {/* movie title */}
              <div className="movie_Title  text-2xl font-bold"><h2><span className='text-red-700'>M</span>ovie <span className='text-red-700'>T</span>itle : {Movie?.original_title}</h2></div>
              {/* movie info container */}
              <div className="moveInfo flex flex-wrap justify-between mt-4  w-full">

              <div className='flex flex-row w-full flex-nowrap mt-5 xl:mb-5 '>
                 <h3 className='font-semibold'><span className='text-red-700'>M</span>ove Tag Line: </h3> <p className='font-light ml-1'>{Movie.tagline}</p>
                 </div>

                {/* movie story */}
                <h3 className="font-semibold mt-5 xl:mb-5 h-auto"><span className='text-red-700'>M</span>ovie Story :<span className='font-light'>{Movie?.overview}</span> </h3>
                {/* movie categories */}
                <div className='flex flex-row mt-5 xl:mb-5 w-full flex-nowrap '>
                  <h3 className='font-semibold'><span className='text-red-700'>M</span>ovie T<span>y</span>pe:</h3>
                 {Movie?.genres?.map((type , index)=> <p className='ml-1 font-semibold' key={index}>•{type.name}</p>)}
                 </div>
              
                {/* movie release Date */}
                <div className='flex flex-row w-full flex-nowrap mt-5  '>
                 <h3 className='font-semibold'><span className='text-red-700'>R</span>elease Date: </h3> <p className='font-semibold ml-1'>{Movie.release_date}</p>
                 </div>

                {/* movie production company */}
                <div className='flex flex-col  items-center w-full mt-5 mb-5'>
                <h3 className='font-semibold text-xl mb-3'><span className='text-red-700 font-semibold'>P</span>roduction Companies</h3>
                <ul className='flex justify-center items-center w-full'>
                  {Movie?.production_companies?.map((company , index)=>{
                    return <li key={index} className='mr-4'><img className='w-[80px]' src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt="" /></li>})}
                 </ul>
                 </div>

                 <Button  onClick={()=>{addToWatch(id)}}  className="bg-gradient-to-tr bottom-0 absolute from-red-500 to-orange-400 text-white shadow-lg w-full my-3">
                    Add To WatchList
                  </Button>
                </div>
              </div>
             
            </div>

          
        
      </CardBody>
    </Card>
 </>
}
