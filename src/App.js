import React from 'react';
import { useState } from 'react';
import TableFirst from './TableFirst';
import TableSecond from './TableSecond';
import data from './data';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

function Table() {
  const [loggedInUserId] = useState(2);
  const [showToitColumn, setShowToitColumn] = useState(true);

  const filteredData = data.filter((item) => item.user_id === loggedInUserId);

  const dates = [...new Set(filteredData.map((item) => item.date))];

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
