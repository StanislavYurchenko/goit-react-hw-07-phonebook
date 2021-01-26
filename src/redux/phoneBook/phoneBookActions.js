import { createAction } from '@reduxjs/toolkit';

export const onChangeFilter = createAction('phoneBook/onChangeFilter');

export const addContactRequest = createAction('phoneBook/addContactRequest');
export const addContactSuccess = createAction('phoneBook/addContactSuccess');
export const addContactError = createAction('phoneBook/addContactError');

// export const removeContactRequest = createAction(
//   'phoneBook/removeContactRequest',
// );
// export const removeContactSuccess = createAction(
//   'phoneBook/removeContactSuccess',
// );
// export const removeContactError = createAction('phoneBook/removeContactError');

// export const fetchContactsRequest = createAction(
//   'phoneBook/fetchContactRequest',
// );
// export const fetchContactsSuccess = createAction(
//   'phoneBook/fetchContactSuccess',
// );
// export const fetchContactsError = createAction('phoneBook/fetchContactError');
