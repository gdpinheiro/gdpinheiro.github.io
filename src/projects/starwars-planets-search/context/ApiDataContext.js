import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
// import response from '../testData';

export const ApiDataContext = createContext();

export const ApiDataContextProvider = ({ children }) => {
  const [data, setData] = useState([{}]);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const fetchAPI = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((response) => setData(response.results));

  // const fetchAPI = () => setData(response.results);

  return (
    <ApiDataContext.Provider
      value={ {
        data,
        fetchAPI,
        nameFilter,
        setNameFilter,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </ApiDataContext.Provider>
  );
};

ApiDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
