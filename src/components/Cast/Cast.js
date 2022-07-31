import { fetchMovieCast} from 'services/MoviesAPI'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {CastList,ActorCard,NoFoto} from './Cast.styled'

export function MovieCast() {

    const [cast, setCast] = useState([]);
    const {movieId} = useParams();
    useEffect(() => {
      
        fetchMovieCast(movieId).then(setCast);
     
    }, [movieId]);
    console.log(cast)
    return (
         <CastList>
            {cast && cast.map(el => (
                <ActorCard key={el.id}>
                   
                        {el.profile_path ?
                            <img src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`} loading="lazy" alt={el.name} /> :
                            <NoFoto>no image</NoFoto>}
                    
                    <p>{el.name}</p>
                    <p>{el.character}</p>
                </ActorCard>
            ))}
        </CastList>
    
    )
}