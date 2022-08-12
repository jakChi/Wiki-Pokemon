import React, {useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setPrevPageUrl(res.data.previous)
      setNextPageUrl(res.data.next)
      setPokemon(res.data.results.map(poc => poc.name))
    })

    return () => cancel();
  }, [currentPageUrl])
    
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  if(loading) return "loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      goToPrevPage = {prevPageUrl ? goToPrevPage : null}
      goToNextPage = {nextPageUrl ? goToNextPage : null}
      />
    </>
  )
}

export default App;
