import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  // eslint-disable-next-line
  const params = useParams();
  const [data, setData] = useState({});
  // eslint-disable-next-line
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchDetails();
  }, []);
  // eslint-disable-next-line
  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.product_type === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 pt-20">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={data.image_link}
            alt={data.name}
          />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.name}
          </h1>
          <p className="my-4">{data.description}</p>
          {data.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark: border-gray-600 p-2"
                  key={genre.id}
                >
                  {' '}
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ''
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {data.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span
              className="mr-2
              font-bold"
            >
              Runtime:
            </span>
            <span>{data.runtime} min.</span>
          </p>
        </div>
      </section>
    </main>
  );
};
