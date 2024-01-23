import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'store/selectors';
import { setFilter } from 'store/contactsSlice';
// import debounce from 'lodash.debounce';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)

  // const handleFilterChange = debounce((event) => {
  //   const newFilterValue = event.target.value;
  //   dispatch(setFilter(newFilterValue));
  // }, 500);

  const handleFilterChange = (event) => {
    const newFilterValue = event.target.value;
    dispatch(setFilter(newFilterValue));
  };
  
  return (
    <FilterLabel>
      Find contact by name:
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};



