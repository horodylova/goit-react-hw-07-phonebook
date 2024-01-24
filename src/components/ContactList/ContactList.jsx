import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors';

export const ContactList = React.memo(() => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const sortContacts = (contacts) => {
    return contacts.slice().sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);
      if (nameComparison !== 0) {
        return nameComparison;
      }

      return b.dateAdded - a.dateAdded;
    });
  };

  const sortedContacts = sortContacts(visibleContacts);

  const renderContacts = () => {
    if (sortedContacts.length === 0) {
      return <p>No contacts found</p>;
    }

    return (
      <ul>
        {sortedContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  };

  return <div>{renderContacts()}</div>;
});

    
 
  

  