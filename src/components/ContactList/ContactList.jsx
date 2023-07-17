import Contact from 'components/Contact/Contact';
import css from './contactList.module.css';

const Contacts = ({ contacts, removeContact }) => {
  console.log(contacts);
  const elements =
    contacts.lenght > 0 &&
    contacts.map(({ name, number, id }) => {
      return (
        <Contact
          name={name}
          number={number}
          id={id}
          key={id}
          deleteItem={removeContact}
        />
      );
    });

  return <ul className={css.list}>{elements}</ul>;
};

export default Contacts;
