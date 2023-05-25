import {
  createContext, useState, useContext
} from "react";
import PAGES from "../containers/pages";

const LocationContext = createContext();

const DEFAULT_LOCATION = Object.keys(PAGES)[0];

const INITIAL_LOCATION = localStorage.getItem('location') || DEFAULT_LOCATION;

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(INITIAL_LOCATION);

  function changeLocation(newLocation){
    if(newLocation === location) return null;
    setLocation(newLocation);
    localStorage.setItem('location', newLocation);
  }

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext);
