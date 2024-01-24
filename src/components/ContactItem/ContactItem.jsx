import React from 'react';
import { ContactListItem, ContactInfo, DeleteButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from 'store/contactActions';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  
  const handleDeleteContact = async (contactId) => { 
    dispatch(deleteContactAsync(contactId));

  };

  return (
    <ContactListItem>
      <ContactInfo>
        {contact.name}: {contact.number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};


