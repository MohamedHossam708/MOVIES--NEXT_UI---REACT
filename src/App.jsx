import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import WatchList from './Components/WatchList/WatchList'
import Movies from './Components/Movies/Movies'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import { MoviesContextProvider } from './Components/Context/MoviesContext'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import { ToastContainer } from 'react-toastify'





function App() {

let router=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'watchList',element:<WatchList/>},
  {path:'movies',element:<Movies/>},
  {path:'movieDetails/:id',element:<MovieDetails/>},
  {path:'*',element:<NotFound/>}
  ]}
  
])


  return <>

<MoviesContextProvider>

  <RouterProvider router={router}></RouterProvider>   
  <ToastContainer theme="colored"/>

</MoviesContextProvider>
    </>
  
}

export default App