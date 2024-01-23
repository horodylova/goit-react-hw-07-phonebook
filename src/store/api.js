const BASE_URL = 'https://65abe99bfcd1c9dcffc741a5.mockapi.io'; 

export const fetchContactsFromBackend = async () => {
    try {
      const response = await fetch(`${BASE_URL}/contacts`);
      if (!response.ok) {
        throw new Error('Mistake');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  export const addContactApi = async (contactData) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add contact');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const fetchFilteredContactsApi = async (filter) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts?filter=${encodeURIComponent(filter)}`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch filtered contacts');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const deleteContactApi = async (contactId) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts/${contactId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
  
      return true;  
    } catch (error) {
      throw error;
    }
  };
  