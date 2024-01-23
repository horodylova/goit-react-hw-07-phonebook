import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsFromBackend, addContactApi, deleteContactApi} from './api'; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await fetchContactsFromBackend();
    return response;
  } catch (error) {
    throw error;
  }
});

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await addContactApi(contactData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await deleteContactApi(contactId);
      return response; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

