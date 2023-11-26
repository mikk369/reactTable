import React from 'react';

export default function RenderRows(dateItems, showToitColumn, index, date) {
  const total = dateItems.reduce((acc, curr) => acc + curr.price, 0);
  const holdPrice = total / 2;
  const holdPriceTotal = dateItems.reduce((acc, curr) => acc + holdPrice, 0).toFixed(2);

  return (
    <React.Fragment key={index}>
      <tr>
        <td style={tableCellStyle}>{date}</td>
        <td style={tableCellStyle}></td>
        {!showToitColumn && <td style={Numeric}>{total}</td>}
        {!showToitColumn && <td style={Numeric}>{holdPrice}</td>}
      </tr>
      {dateItems.map((row, rowIndex) => (
        <tr key={`${index}-${rowIndex}`} style={rowIndex % 2 === 0 ? evenRowStyle : oddRowStyle}>
          <td style={tableCellStyle}></td>
          {!showToitColumn && <td style={tableCellStyle}>{row.food_name}</td>}
          {!showToitColumn ? (
            <td style={tableCellStyle}>{row.price}</td>
          ) : (
            <td style={tableCellStyle}>{total}</td>
          )}
          {showToitColumn ? (
            <td style={tableCellStyle}>{holdPrice}</td>
          ) : (
            <td style={tableCellStyle}></td>
          )}
        </tr>
      ))}
    </React.Fragment>
  );
}

const Numeric = {
  fontWeight: 'bold',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
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
