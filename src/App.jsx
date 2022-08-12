import { Component } from 'react';
import { ContactForm, Filter, ContactList } from './components';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (newContact) => {
    const {contacts} = this.state;
    const {name} = newContact;

    if(contacts.find(contact => contact.name === name)){
      return alert(`${name} is already in contact.`)
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) => contact.name.toLowerCase().includes(lowerCaseFilter));
  };

  handleDelete = (deleteName) => {
    const {contacts} = this.state;
    const copyContacts = [...contacts];
    const index = copyContacts.findIndex(({name}) => name === deleteName)

    copyContacts.splice(index, 1);
    this.setState({contacts: copyContacts})
  }

  render() {
    const { filter } = this.state;

    return (
      <div style={{ maxWidth: 400, padding: 20 }}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChange} />
        <ContactList handleFilter={this.handleFilter} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
