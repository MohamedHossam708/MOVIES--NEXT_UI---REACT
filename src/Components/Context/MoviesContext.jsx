import { createContext } from "react";



export let MoviesContext=createContext()

export function MoviesContextProvider(props){

function getMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
        }
      };
      
    return  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => err);
}

function getMovieDetails(movieID){

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
    }
  };
  
 return fetch(`https://api.themoviedb.org/3/movie/${movieID}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);

}

function addToWatchList(movieID){
  const options = {
    method: 'POST',
    body:JSON.stringify({
      media_type:"movie",
      media_id:movieID,
      watchlist:true
    }),
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
    }
  };
  
 return fetch('https://api.themoviedb.org/3/account/21333421/watchlist', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
}

function getWatchList (){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
    }
  };
  
  return fetch('https://api.themoviedb.org/3/account/21333421/watchlist/movies', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err =>err);
}


function removeFromWatchList(movieID){
  const options = {
    method: 'POST',
    body:JSON.stringify({
      media_type:"movie",
      media_id:movieID,
      watchlist:false
    }),
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
    }
  };
  
 return fetch('https://api.themoviedb.org/3/account/21333421/watchlist', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
}


function getTrending(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTUyODY3MGNlNDJiZmVkMmY0MzZlYTc4NjIzZWRmYiIsInN1YiI6IjY2NzBhYmRiZmYyMGYwNTExNTUwYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8IflyF0BsxLQcrePfWFkHU-G777Z-x_nckUP87QnmlA'
    }
  };
  
  return fetch('https://api.themoviedb.org/3/trending/all/day', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
}

return <MoviesContext.Provider value={{getMovies,getMovieDetails , addToWatchList , getWatchList , removeFromWatchList , getTrending}}>
    {props.children}
</MoviesContext.Provider>
}