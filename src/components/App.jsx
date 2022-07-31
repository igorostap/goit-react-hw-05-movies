import axios from 'axios';
import {  Route, Routes} from 'react-router-dom';
import { HomeView } from '../vievs/HomeView'
import HomePage from './HomePage';
import { Movies } from '../vievs/Movies'
import { NotFoundView } from 'vievs/NotFoundView';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage'
import { MovieCast } from './Cast/Cast'
import {MovieReviews} from './Reviews/Reviews'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchAuthors() {
  const response = await axios.get('/trending/all/day?api_key=3e74a828484d6b0f83071233fd134bba');
  
  return response.data;
}


export function App() {
  
  return (
    

      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<HomeView />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews /> }/>
          </Route>  
        </Route>
        <Route path="*" element={<NotFoundView/>}></Route>  
      </Routes>
     
    
    
        
    );
  };
 
  
  /* <Route path='*' element={<NotFoundView />} />
  <Routes>
        <Route path='/' element={<HomePage />} >
          <Route index element={<HomeView />} />
         
          <Route path='/movies' element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />}>
           <Route path='reviews' element={<MovieReviews/>}>
        
          </Route>
          </Route>
         </Route> 
          <Route path='*' element={<NotFoundView />} />
       
          
      </Routes>

      
  */


