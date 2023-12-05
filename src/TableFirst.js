import React from 'react';
import Switch from '@mui/material/Switch';

export default function TableFirst({ dates, filteredData, showToitColumn, setShowToitColumn }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <td colSpan="4">
            <div style={tableViewHeader}>
              <button onClick={() => setShowToitColumn(!showToitColumn)}>
                <Switch />
              </button>
              <h2>Söökla kinnipidamine</h2>
              <icon>X</icon>
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
        {dates.map((date, index) => {
          const dateItems = filteredData.filter((item) => item.date === date);
          const total = dateItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toFixed(2);
          const holdPrice = total / 2;

          return (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{date}</td>
              <td style={tableCellStyle}>{total}</td>
              <td style={tableCellStyle}>{holdPrice}</td>
            </tr>
          );
        })}
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
  textAlign: 'center',
};

const evenRowStyle = {
  backgroundColor: '#f9f9f9',
};

const oddRowStyle = {
  backgroundColor: '#ffffff',
};
