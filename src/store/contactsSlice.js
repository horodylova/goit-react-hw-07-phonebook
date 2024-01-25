import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactAsync,
  deleteContactAsync,
} from './contactActions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        const deletedContactId = action.payload;
       
        state.items = state.items.filter(
          (contact) => contact.id !== deletedContactId
        );
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;


