import { useEffect, useState } from 'react';

export function useGetData() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const API = 'https://randomuser.me/api/';

  useEffect(() => {
    console.log('trayendo data');
    async function getData(id) {
      const apiURL = id ? `${API}` : API;
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setUser(data.results[0]);
        setLoading(true);
      } catch (error) {
        console.log('Fetch Error', error);
      }
    }

    if (!loading) {
      getData();
    }
  }, []);

  return [loading, user];
}
