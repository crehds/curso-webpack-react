import { useEffect, useState } from 'react';

export function useGetData(loadingApp) {
  const [loading, setLoading] = useState(loadingApp);
  const [user, setUser] = useState({});
  const API = 'https://randomuser.me/api/';

  useEffect(() => {
    console.log('getting data...');
    async function getData(id) {
      const apiURL = id ? `${API}` : API;
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(true);
      } catch (error) {
        setLoading(null);
        console.log('Fetch Error', error);
      }
    }
    getData();
  }, []);

  return [user, loading];
}
