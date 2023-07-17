import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';
import AddRandom from './AddRandom/AddRandom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
  removeContact,
} from 'redux/items/items-operations';
import { setFilter } from 'redux/filter/filter-action';

import { getItems } from 'redux/items/selectors';
import { getFilter } from 'redux/filter/selectors';
import { useEffect } from 'react';

//comment
export const App = () => {
  const getState = ({ contacts }) => ({
    loading: contacts.loading,
    error: contacts.error,
  });

  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const { loading, error } = useSelector(getState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addItem = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const getFiltredContacts = () => {
    const normalizeFilter = filter?.toLowerCase();
    const filterContacts = contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return filterContacts;
  };

  const filtredArray = getFiltredContacts();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
      {error && <p>smth went wrong</p>}
      {loading ? (
        <p>...Loadind</p>
      ) : (
        <Contacts contacts={filtredArray} removeContact={onRemoveContact} />
      )}
      <Form addItem={addItem} />
      <Kek />
      <AddRandom addItem={addItem} />
    </div>
  );
};
