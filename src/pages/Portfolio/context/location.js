import {
  createContext, useState, useContext
} from "react";

const LocationContext = createContext();

const INITIAL_LOCATION = localStorage.getItem('location') || 'home';

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
