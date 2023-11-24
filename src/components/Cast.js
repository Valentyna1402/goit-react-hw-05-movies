// import { useState, useEffect } from "react";
// import { fetchMovieCast } from "./API";
// import { useParams } from "react-router-dom";

// export default function Cast() {
//   const [cast, setCast] = useState();
//   const { movieId } = useParams();
//   useEffect(() => {
//     async function getMovieCast() {
//         try {
//           const MovieCast = await fetchMovieCast(movieId);
//           setCast(MovieCast);
//         } catch (error) {
//         }
//       }
//       getMovieCast();
// },[movieId])
// console.log(cast)
//     return <div>
//       <ul>
// {Cast.map(item => {
//   return <li key={item.cast_id}>
//     <img />
//     <p>{item.name}</p>
//     <p>Character: {item.character}</p>
//   </li>
// })}
//       </ul>
//       </div>;
//   }