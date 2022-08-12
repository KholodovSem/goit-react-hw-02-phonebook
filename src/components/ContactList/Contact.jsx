import s from './Contact.module.css';

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

export default Contact;
