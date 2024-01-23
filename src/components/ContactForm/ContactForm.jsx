import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';
import { addContactAsync, fetchContacts } from 'store/contactActions';
import { selectVisibleContacts } from 'store/selectors';  

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);


  const handleFormSubmit = async (e) => {  
    e.preventDefault();

    const id = nanoid();
    const isNameAlreadyExists = visibleContacts.some(
      (existingContact) => existingContact.name === name
    );

    if (isNameAlreadyExists) {
      alert('This name is already in the phonebook. Please choose a different name.');
    } else {
      await dispatch(addContactAsync({ name, number, id })); 

      await dispatch(fetchContacts());

      setName('');
      setNumber('');
    }
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Label htmlFor="name">
        Name:
        <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input type="tel" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
}





