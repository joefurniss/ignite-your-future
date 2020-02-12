import React, { useEffect, useState } from 'react';
import Table from './Table';
import './app.css';

const App = () => {
  const [cheeseList, setCheeseList] = useState([]);
  const [vegetarianOnly, toggleVegetarian] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetch('/api/getData');

      res.json().then(jsonData => setCheeseList(jsonData));
    }

    getData();
  }, []);

  return (
    <>
      <h1>
        Joe's Cheese List
      </h1>
      <label>
        Vegetarian only
        <input type="checkbox" onChange={() => { toggleVegetarian(!vegetarianOnly); }} />
      </label>
      <Table data={cheeseList} vegetarianOnly={vegetarianOnly} />
    </>
  );
};

export default App;
