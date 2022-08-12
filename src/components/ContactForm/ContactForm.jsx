import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { handleSubmit } = this.props;
    const contact = { id: nanoid(), name, number };

    handleSubmit(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmit} className={s.form}>
        <label className={s.label}>Name
          <input
            value={name}
            onChange={this.handleChange}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={s.input}
          />
        </label>
        <label className={s.label}>Number
          <input
            value={number}
            onChange={this.handleChange}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            className={s.input}
          />
        </label>
        <button type='submit' className={s.button}>Add contact</button>
      </form>
    );
  }
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
