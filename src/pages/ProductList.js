import { useState, useEffect } from 'react';
import { Card } from '../components';
//eslint-disable-next-line

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    getBrand();
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);
  const getBrand = async () => {
    const response = await fetch(
      // eslint-disable-next-line
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    setData(await response.json());
    setFilter(data);
    console.log(data);
  };
  return (
    <main className=" text-center ">
      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg text-center">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
