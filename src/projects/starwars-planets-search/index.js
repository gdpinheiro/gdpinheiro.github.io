import React from 'react';
import { ApiDataContextProvider } from './context/ApiDataContext';
import Table from './components/Table';
import FilterByNameInput from './components/FilterByNameInput';
import FilterByNumericValues from './components/FilterByNumericValues';

function index() {
  return (
    <ApiDataContextProvider>
      <FilterByNameInput />
      <FilterByNumericValues />
      <Table />
    </ApiDataContextProvider>
  );
}

export default index;