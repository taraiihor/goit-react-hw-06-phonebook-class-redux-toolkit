import React from 'react';
import ContactsList from './components/Contact/';
import ContactForm from './components/Form/';
import Filter from './components/Filter/';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Containet">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;
