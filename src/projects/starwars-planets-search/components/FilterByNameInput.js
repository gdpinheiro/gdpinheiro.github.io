import React, { useContext } from 'react';
import { ApiDataContext } from '../context/ApiDataContext';

function FilterByNameInput() {
  const { setNameFilter } = useContext(ApiDataContext);

  const handleNameFilterInput = ({ target: { value } }) => {
    setNameFilter(value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Filter by Name...'
        data-testid='name-filter'
        onChange={handleNameFilterInput}
      />
    </div>
  );
}

export default FilterByNameInput;
