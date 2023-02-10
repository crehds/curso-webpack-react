import { useEffect, useState } from 'react';

export function useGetData(loadingApp) {
  const [loading, setLoading] = useState(loadingApp);
  const [user, setUser] = useState({});
  const APIGITHUB = 'https://api.github.com/users/crehds';

  useEffect(() => {
    console.log('getting data...');
    async function getData() {
      try {
        const response = await fetch(APIGITHUB);
        const {
          name, avatar_url, email, location
        } = await response.json();

        setUser({
          name, avatar_url, email, location
        });
        setLoading(false);
      } catch (error) {
        setLoading(null);
        console.log('Fetch Error', error);
      }
    }
    getData();
  }, []);

  return [user, loading];
}
