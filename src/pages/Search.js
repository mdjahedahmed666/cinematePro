import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import {MovieCard } from "../components";
import {useTitle} from '../hooks/useTitle';


export const Search = (apiPath) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useFetch(apiPath, queryTerm);
  const pageTitle = useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-6">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for ${queryTerm}`: `Result for ${queryTerm}`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
        {movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
