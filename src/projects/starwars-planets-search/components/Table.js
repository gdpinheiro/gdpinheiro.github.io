import React, { useContext, useEffect } from 'react';
import { ApiDataContext } from '../context/ApiDataContext';

function Table() {
  const {
    data, fetchAPI, nameFilter, filterByNumericValues,
  } = useContext(ApiDataContext);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  const handleNameFilter = ({ name }) => {
    const lowerCasedName = String(name).toLowerCase();
    if (name !== '' && !lowerCasedName.includes(nameFilter)) {
      return false;
    }
    return true;
  };

  const handleNumericFilter = (item) => filterByNumericValues.every((filter) => {
    const { column, comparison, value } = filter;
    const number = parseInt(item[column], 10);
    switch (comparison) {
    case 'maior que':
      return number > value;
    case 'menor que':
      return number < value;
    case 'igual a':
      return number === value;
    default:
      return true;
    }
  });

  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => {
                if (key === 'residents') {
                  return null;
                }
                return <th key={ index }>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              if (!handleNameFilter(item) || !handleNumericFilter(item)) {
                return null;
              }
              return (
                <tr key={ index }>
                  {Object.keys(item).map((key, itemIndex) => {
                    if (key === 'residents') {
                      return null;
                    }
                    return (
                      <td key={ `${item.name}${itemIndex}` }>{item[key]}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
