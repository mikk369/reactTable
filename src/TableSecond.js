import React from 'react';
import Switch from '@mui/material/Switch';
import RenderRows from './RenderRows';

export default function TableSecond({ dates, filteredData, showToitColumn, setShowToitColumn }) {
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
          {!showToitColumn && <th style={tableHeaderStyle}>Toit</th>}
          <th style={tableHeaderStyle}>Summa</th>
          <th style={tableHeaderStyle}>Kinnipeetav</th>
        </tr>
      </thead>
      <tbody>
        {dates.map((date, index) => {
          const dateItems = filteredData.filter((item) => item.date === date);
          return RenderRows(dateItems, showToitColumn, index, date);
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
