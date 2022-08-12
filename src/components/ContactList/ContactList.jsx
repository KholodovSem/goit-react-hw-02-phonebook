import Contact from './Contact';
import s from './ContactList.module.css';

function ContactList({ handleFilter, onDelete}) {

  return (
    <ul className={s.contactList}>
      {handleFilter().map((contact) => (
        <Contact onDelete={onDelete} {...contact} key={contact.id}/>
      ))}
    </ul>
  );
}

export default ContactList;
