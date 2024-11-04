import React from 'react';
import Banner from './Banner';
import ProductsOfTheWeek from './ProductsOfTheWeek';
import Category from './Category';
import Brand from './Brand';

function Home() {
  return (
    <div className="home">
      <Banner />
      <ProductsOfTheWeek />
      <Category />
      <Brand />
    </div>
  );
}

export default Home;
