import React, { useEffect, useContext } from 'react';
import './Dashboard.scss';

// API
import { getRestaurants } from '../api/restaurantApi';

// Models
import { Searchparams } from '../models/SearchParams';

// Context
import { RestaurantContext } from '../context/RestaurantContext/RestaurantContext';

// Components
import Table from '../components/Table/Table';
import Search from '../components/Search/Search';

const Dashboard = () => {
  const { fetchRestaurantsSuccess } = useContext(RestaurantContext);

  useEffect(() => {
    getRestaurants().then(fetchRestaurantsSuccess).catch(console.error);
  }, []);

  const onSearch = (searchParams: Searchparams) => {
    console.log(searchParams);
  };

  return (
    <section className='restaurants'>
      <Search onSearch={onSearch} />
      <div className='restaurants__results'>
        <Table />
      </div>
    </section>
  );
};

export default Dashboard;
