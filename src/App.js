import Switch from '@mui/material/Switch';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

const data = [
  { "date": "2023-01-01", "food_name": "Pizza", "price": 15.99, "hold_price": 2.00,       "user_id": 1 },
      { "date": "2023-02-01", "food_name": "Milk", "price": 0.99, "hold_price": 0.20, "user_id": 1 },
      { "date": "2023-03-01", "food_name": "Burger", "price": 5.99, "hold_price": 2.00, "user_id": 1 },
      { "date": "2023-04-01", "food_name": "Salat", "price": 1.99, "hold_price": 1.00, "user_id": 1 },
      { "date": "2023-05-01", "food_name": "Bread", "price": 0.50, "hold_price": 0.22, "user_id": 1 }
]

function Table() {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your API/data.json
  //   fetch('../API/data.json') // Adjust the path accordingly
  //     .then((response) => response.json())
  //     .then((data) => setTableData(data.orders)) // Access the 'orders' property
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <td colSpan="3" >
            <div style={tableViewHeader}>
            <button><Switch  defaultChecked /></button><h2>Söökla kinnipidamine</h2><icon>X</icon>
            </div>
          </td>
        </tr>
        <tr>
          <th style={tableHeaderStyle}>Kuupäev</th>
          <th style={tableHeaderStyle}>Summa</th>
          <th style={tableHeaderStyle}>Kinnipeetav</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={(index % 2 === 0) ? evenRowStyle : oddRowStyle}>
            <td style={tableCellStyle}>{row.date}</td>
            <td style={tableCellStyle}>{row.price}</td>
            <td style={tableCellStyle}>{row.hold_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
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
