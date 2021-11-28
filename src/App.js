import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid'
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import s from './App.module.css'


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return
    }
    const newContact = {
      id: nanoid(),
      name,
      number
    }
    this.setState(({ contacts }) => ({
    
      contacts: [newContact, ...contacts]
    }))
  }

  onFilterChange = e => {
        this.setState({
          filter: e.currentTarget.value,
        })  
  };
    getVisibleContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    // console.log(visibleContacts)
         
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    };
  
    deleteContact = name => {
      this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.name !== name)
    }))
    }
  
  render() {
    const visibleContacts = this.getVisibleContacts();
  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm
        contacts={this.state.contacts}
        onSubmit={this.addContact}
      />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter}
      onFilterChange={this.onFilterChange}
      />
      <ContactList
        contacts={visibleContacts}
        onDeleteBtn={this.deleteContact}
      />
    </div>
  );}
}

export default App;
