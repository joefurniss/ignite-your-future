import React from 'react';

const Table = ({ data, vegetarianOnly }) => {
  const cheeseToDisplay = [...data].filter(cheese => vegetarianOnly === true || cheese.vegetarian === true);
  return (
    <table>
      <tbody>
        {cheeseToDisplay.map(
          (item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                {item.vegetarian}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;
