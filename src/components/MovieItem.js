import { useEffect, useState } from 'react';

import { fetchConfiguration } from './API';

export const MovieItem = ({movie}) => {

    const [src, setSrc] = useState('');

    const {title, release_date, vote_average, overview, genres, poster_path} = movie;
    const releaseDate = new Date(release_date).getFullYear(); 
    const userScore = Math.round((vote_average/10)*100);

    useEffect(() => {
        async function getPosterUrl() {
            try {
              const config = await fetchConfiguration();
              const baseUrl = config.base_url;
              const posterSize = config.poster_sizes[3];
              const posterSrc = `${baseUrl}${posterSize}${poster_path}`;
              setSrc(posterSrc);
            } catch (error) {
              console.log(error)
            }
          }
          getPosterUrl();
    },[poster_path])

  return <div>
          <img src={src} alt='movie poster' />
          <h2>{title} ({releaseDate})</h2>
          <p>User score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>

          <ul>{genres.map(({id, name}) => {
            return <li key={id}>{name}</li>
          })}</ul>
  </div>
  
};
