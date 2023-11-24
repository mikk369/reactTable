import Switch from '@mui/material/Switch';
import React from 'react';
import { useState } from 'react';
// import axios from 'axios';

const data = [
  {"date": "2023-01-01", "food_name": "Pizza", "price": 15.99, "hold_price": 5.00, "user_id": 1},
  {"date": "2023-01-01", "food_name": "Milk", "price": 0.99, "hold_price": 5.00, "user_id": 1},
  {"date": "2023-01-02", "food_name": "Burger", "price": 5.99, "hold_price": 5.00, "user_id": 1},
  {"date": "2023-01-02", "food_name": "Salat", "price": 1.99, "hold_price": 5.00, "user_id": 1},
  {"date": "2023-01-03", "food_name": "Bread", "price": 2.50, "hold_price": 5.00, "user_id": 1},
  {"date": "2023-01-02", "food_name": "Burger", "price": 9.99, "hold_price": 2.50, "user_id": 2},
  {"date": "2023-01-02", "food_name": "Bread", "price": 1.99, "hold_price": 2.50, "user_id": 2},
  {"date": "2023-01-03", "food_name": "Juice", "price": 0.99, "hold_price": 2.50, "user_id": 2},
  {"date": "2023-01-03", "food_name": "Steak", "price": 9.99, "hold_price": 2.50, "user_id": 2},
  {"date": "2023-01-03", "food_name": "Salad", "price": 0.99, "hold_price": 2.50, "user_id": 2},
  {"date": "2023-01-03", "food_name": "Pasta", "price": 12.50, "hold_price": 3.00, "user_id": 3},
  {"date": "2023-01-03", "food_name": "Bread", "price": 1.50, "hold_price": 3.00, "user_id": 3},
  {"date": "2023-01-03", "food_name": "Milk", "price": 0.50, "hold_price": 3.00, "user_id": 3},
  {"date": "2023-01-03", "food_name": "Steak", "price": 12.50, "hold_price": 3.00, "user_id": 3},
  {"date": "2023-01-04", "food_name": "Sushi", "price": 20.99, "hold_price": 5.50, "user_id": 4},
  {"date": "2023-01-04", "food_name": "Bread", "price": 0.99, "hold_price": 5.50, "user_id": 4},
  {"date": "2023-01-04", "food_name": "Juice", "price": 0.99, "hold_price": 5.50, "user_id": 4},
  {"date": "2023-01-04", "food_name": "Steak", "price": 20.99, "hold_price": 5.50, "user_id": 4},
  {"date": "2023-01-05", "food_name": "Salad", "price": 8.99, "hold_price": 1.50, "user_id": 5},
  {"date": "2023-01-06", "food_name": "Steak", "price": 24.99, "hold_price": 6.00, "user_id": 6},
  {"date": "2023-01-07", "food_name": "Chicken Wings", "price": 14.50, "hold_price": 4.00, "user_id": 7},
  {"date": "2023-01-08", "food_name": "Tacos", "price": 10.99, "hold_price": 2.00, "user_id": 8},
  {"date": "2023-01-09", "food_name": "Soup", "price": 7.99, "hold_price": 1.00, "user_id": 9},
  {"date": "2023-01-10", "food_name": "Sandwich", "price": 6.50, "hold_price": 1.50, "user_id": 10}
]

function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

function Table() {
  const [loggedInUserId] = useState(2);
  const [showToitColumn, setShowToitColumn] = useState(true);

  const filteredData = data.filter(item => item.user_id === loggedInUserId)

  const dates = [...new Set(filteredData.map((item) => item.date))];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <td colSpan="4">
            <div style={tableViewHeader}>
              <button onClick={() => setShowToitColumn(!showToitColumn)}>
                <Switch defaultChecked />
              </button>
              <h2>Söökla kinnipidamine</h2>
              <icon>X</icon>
            </div>
          </td>
        </tr>
        <tr>
          <th style={tableHeaderStyle}>Kuupäev</th>
          {showToitColumn && <th style={tableHeaderStyle}>Toit</th>}
          <th style={tableHeaderStyle}>Summa</th>
          <th style={tableHeaderStyle}>Kinnipeetav</th>
        </tr>
      </thead>
      <tbody>
        {dates.map((date, index) => {
          const dateItems = filteredData.filter((item) => item.date === date);
          const total = dateItems.reduce((acc, curr) => acc + curr.price, 0);
          const holdPrice = total / 2;

          return (
            <React.Fragment key={index}>
              <tr>
                <td style={tableCellStyle}>{date}</td>
                <td style={tableCellStyle}></td>
                {showToitColumn && <td style={Numeric}>{total}</td>}
              </tr>
              {dateItems.map((row, rowIndex) => (
                <tr key={`${index}-${rowIndex}`} style={(rowIndex % 2 === 0) ? evenRowStyle : oddRowStyle}>
                  <td style={tableCellStyle}></td>
                  {showToitColumn && <td style={tableCellStyle}>{row.food_name}</td>}
                  {showToitColumn ? <td style={tableCellStyle}>{row.price}</td> : <td style={tableCellStyle}>{total}</td>}
                  <td style={tableCellStyle}>{holdPrice}</td>
                </tr>
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
const Numeric = {
  fontWeight: 'bold',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center'

}
const tableViewHeader = {
  backgroundColor: '#d6d2d2',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center'
};

const evenRowStyle = {
  backgroundColor: '#f9f9f9',
};

const oddRowStyle = {
  backgroundColor: '#ffffff',
};


export default App;
