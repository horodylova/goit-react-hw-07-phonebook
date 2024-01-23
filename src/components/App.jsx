import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Heading1, Heading2 } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'store/contactActions';

export const App = () => {
  const dispatch = useDispatch();

 useEffect(() => {
dispatch(fetchContacts())
 }, [dispatch])


  return (
    <AppContainer>
    <Heading1>Phonebook</Heading1>
    <ContactForm />
    <Heading2>Contacts</Heading2>
    <Filter />
    <ContactList/>
  </AppContainer>

  );
};

export default App;

