import React, { useContext, useState } from 'react';
import { ApiDataContext } from '../context/ApiDataContext';

function FilterByNumericValues() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [currentFilters, setCurrentFilters] = useState([]);

  const { filterByNumericValues, setFilterByNumericValues } =
    useContext(ApiDataContext);

  const submitNumericFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ]);
    setCurrentFilters([
      ...currentFilters,
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ]);
  };

  const handleColumnFilter = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const handleComparisonFilter = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const handleValueFilter = ({ target: { value } }) => {
    setValueFilter(parseInt(value, 10));
  };

  const generateColumnOptions = () => {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const filteredColumns = [];

    columns.forEach((column) => {
      if (currentFilters.every((filter) => filter.column !== column)) {
        filteredColumns.push(column);
      }
    });

    return filteredColumns.map((column) => (
      <option key={column} value={column}>
        {column}
      </option>
    ));
  };

  return (
    <div>
      <select data-testid='column-filter' onChange={handleColumnFilter}>
        {generateColumnOptions()}
      </select>
      <select data-testid='comparison-filter' onChange={handleComparisonFilter}>
        <option value='maior que'>maior que</option>
        <option value='menor que'>menor que</option>
        <option value='igual a'>igual a</option>
      </select>
      <input
        type='number'
        data-testid='value-filter'
        value={valueFilter}
        onChange={handleValueFilter}
      />
      <button
        type='button'
        onClick={submitNumericFilter}
        data-testid='button-filter'
      >
        Filter
      </button>
      {currentFilters.length > 0 && (
        <div>
          <h3>Current Filters</h3>
          <ul>
            {currentFilters.map((filter) => (
              <li key={filter.column}>
                {filter.column} {filter.comparison} {filter.value}
                <button type='button'>X</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterByNumericValues;
