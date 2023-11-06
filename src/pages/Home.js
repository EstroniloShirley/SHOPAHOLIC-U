import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/images/banner nyx.gif';
// import { ProductList } from './ProductList';
import { Search } from './Search';
import { Card } from '../components';

export const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  //naglagay ako ng localStorage dito para kahit pumunta sa ibang page or refresh display parin niya images.
  useEffect(() => {
    const storedData = localStorage.getItem('productData');
    if (storedData) {
      setData(JSON.parse(storedData));
      setFilter(JSON.parse(storedData));
    } else {
      getBrand();
    }
  }, []);

  //Ito kasama sa localStorage
  const getBrand = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    const newData = await response.json();
    setData(newData);
    setFilter(newData);
    localStorage.setItem('productData', JSON.stringify(newData));
  };
  //eslint-disable-next-line
  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.product_type === category);
    setFilter(updatedItems);
  };

  //ito para kahit nag click ka ng ibang page prevent parin niya yung current images (display)
  //eslint-disable-next-line
  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <Link to="/products">
        <img
          className="mt-14 "
          src={Hero}
          alt="Banner1"
        />
      </Link>
      <div className="container">
        <div className=" container mt-10 ml-10">
          <Search />
          <h1 className="text-center text-3xl font-bold mt-5">BEST SELLERS</h1>
          <p className="text-center hover:text-pink-500">
            <Link
              to="/products"
              // onClick={handleLinkClick}
            >
              Shop Now
            </Link>
          </p>
          <section className=" flex flex-wrap text-center py-7  rounded-lg">
            <div className="flex flex-wrap inline-grid grid-cols-4 gap-4 pointer-events-auto 	">
              {filter.map((product) => (
                <Card
                  key={product.id}
                  data={product}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
