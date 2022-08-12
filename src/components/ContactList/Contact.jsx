import s from './Contact.module.css';
import PropTypes from 'prop-types';

function Contact({ name, number, onDelete }) {

  return (
    <div className={s.wrapper}>
      <li className={s.contact}>{name}: {number}</li>
      <button
        name={name}
        className={s.button}
        onClick={(event) => {
          const name = event.currentTarget.name;

          onDelete(name)
        }}
      >Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Contact;

