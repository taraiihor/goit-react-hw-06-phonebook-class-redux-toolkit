import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/add',
  function prepare(name, number) {
    return {
      payload: {
        id: uniqueId(),
        name,
        number,
      },
    };
  },
);

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
