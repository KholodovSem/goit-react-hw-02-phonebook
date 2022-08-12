import Contact from './Contact';
import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactList;

