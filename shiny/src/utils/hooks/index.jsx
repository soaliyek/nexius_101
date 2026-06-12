import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';

function consoleLogError(error) {
  console.error('nexius@EFetch:', error);
}

export function useFetch(url) {
  // Create state variables that we will need our hook to manage.
  // In this case, we need to store the data that we fetch and a loading state to indicate whether the data is still being fetched.
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Use the useEffect hook to perform the data fetching
  // when the component mounts and/or when the URL changes.
  useEffect(() => {
    if (!url) return;

    // The function that will perform the data fetching.
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        consoleLogError(error);
      } finally {
        setIsLoading(false);
      }
    }

    // Now, we can call the function and fetch the data.
    setIsLoading(true);
    fetchData();
  }, [url]);

  // Finally, we return the data, loading state and any error
  // so that the component that uses this hook can access them.
  return { data, isLoading, error };
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}
