import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phoneBookActions';

const contactsReducer = createReducer([], {
  [actions.removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.onChangeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.removeContactRequest]: () => true,
  [actions.removeContactSuccess]: () => false,
  [actions.removeContactError]: () => false,
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
