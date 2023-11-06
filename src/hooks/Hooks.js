import { useState, useEffect } from 'react';

export const useFetch = (queryTerm = '') => {
  const [data, setData] = useState([]);
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&query${queryTerm}`;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);

      const data = await response.json();
      setData(data.results);
    }

    fetchProducts();
  }, [url]);

  return { data };
};
