import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as actions from './phoneBookActions';
import axios from 'axios';
import * as phoneBookApi from 'api/phoneBookApi';

axios.defaults.baseURL = 'http://localhost:3003';

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const data = await phoneBookApi.addContactsApi(contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const removeContact = id => async dispatch => {
  dispatch(actions.removeContactRequest());

  try {
    const data = await phoneBookApi.deleteContactsByIdApi(id);
    dispatch(actions.removeContactSuccess(data));
  } catch (error) {
    dispatch(actions.removeContactError(error));
  }
};

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const books = await phoneBookApi.getContactsApi();
    dispatch(actions.fetchContactsSuccess(books));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

// export const fetchContacts = createAsyncThunk(
//   'phoneBook/fetchContacts',
//   async () => {
//     const books = await phoneBookApi.getContactsApi();
//     return books;
//   },
// );
