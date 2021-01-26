import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;

// export const getFilteredContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getContacts(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
//   );
// };

// MEMORIZED
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    );
  },
);
