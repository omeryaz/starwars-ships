import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  // Storing the ship data after fetching them
  const [starShips, setStarShips] = useState([]);
  // Storing the path to the next page of ships
  const [nextPage, setNextPage] = useState("");
  // A state to hide LOAD MORE button if there is no next page
  const [isThereNext, setIsThereNext] = useState(true);
  // A state to manage the dispaly of loadin animation
  const [isLoading, setIsLoading] = useState(true);
  // Filtered starShips state to render from
  const [filteredShips, setFilteredShips] = useState([]);
  // Ship filter
  const [filterText, setFilterText] = useState("");

  // Initial fetch
  useEffect(() => {
    axios("https://swapi.dev/api/starships/?page=1").then((res) => {
      setStarShips([...res.data.results]);
      setNextPage(res.data.next);
      setIsLoading(false);
    });
  }, []);

  // Update the filteredShips state upon filtering or loading more ships
  useEffect(() => {
    const updatedShips = starShips.filter((ship) => {
      return (
        ship.name
          .toString()
          .toLowerCase()
          .includes(filterText.toString().toLowerCase()) ||
        ship.model
          .toString()
          .toLowerCase()
          .includes(filterText.toString().toLowerCase())
      );
    });
    setFilteredShips([...updatedShips]);
  }, [filterText, starShips]);

  //Load more button
  const loadMore = () => {
    setIsLoading(true);
    axios(nextPage)
      .then((res) => {
        setStarShips([...starShips, ...res.data.results]);
        if (res.data.next) {
          setNextPage(res.data.next);
        } else {
          setIsThereNext(false);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const values = {
    starShips,
    isThereNext,
    loadMore,
    setFilterText,
    filterText,
    filteredShips,
    isLoading,
  };
  return (
    <StarshipContext.Provider value={values}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarShips = () => useContext(StarshipContext);
