import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';

const Contacts = ({ contacts, removeContact }) => {
  console.log(contacts);
  const elements =
    contacts &&
    contacts.map(({ name, phone, id }) => {
      return (
        <Contact
          name={name}
          phone={phone}
          id={id}
          key={id}
          deleteItem={removeContact}
        />
      );
    });

  return <ul className={css.list}>{elements}</ul>;
};

export default Contacts;
