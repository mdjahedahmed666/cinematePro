import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {useTitle} from '../hooks/useTitle';
import { MovieCard } from "../components/MovieCard";


export const MovieList = (apiPath,title) => {
const {data:movies} = useFetch(apiPath);
const pageTitle = useTitle(title)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
        {movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
