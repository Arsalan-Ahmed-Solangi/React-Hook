import { useState, useEffect } from "react";

// Custom hook to fetch data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          setError(response.message)
        }
        const responseData = await response.json();
        setData(responseData.products);
        setIsLoading(false);
      } catch (error) {
        setError(error.message)
       
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
