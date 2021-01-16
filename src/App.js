import React from 'react';
import ContactsList from './components/Contact/';
import ContactForm from './components/Form/';
import Filter from './components/Filter/';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="Containet">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {!contact.length && <div>Немає жодного контакту, додайте контакт</div>}
        <ContactsList />
      </div>
    );
  }
}
const mapStateToProps = ({ contacts: { contact } }) => ({
  contact,
});
export default connect(mapStateToProps)(App);
