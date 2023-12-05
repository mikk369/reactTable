import React, { useEffect } from 'react';
import { useState } from 'react';
import TableFirst from './TableFirst';
import TableSecond from './TableSecond';
// import data from './data';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

function Table() {
  const [loggedInUserId] = useState('2');
  const [showToitColumn, setShowToitColumn] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getproducts.php');
        const data = response.data;
        const dates = [...new Set(data.map((item) => item.date))];

        setFilteredData(data);
        setDates(dates);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [loggedInUserId]);

  return (
    <div>
      {showToitColumn ? (
        <TableFirst
          dates={dates}
          filteredData={filteredData}
          showToitColumn={showToitColumn}
          setShowToitColumn={setShowToitColumn}
        />
      ) : (
        <TableSecond
          dates={dates}
          filteredData={filteredData}
          showToitColumn={showToitColumn}
          setShowToitColumn={setShowToitColumn}
        />
      )}
    </div>
  );
}

export default App;
