import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css'; // Importă stilurile CSS

class App extends Component {
    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleAddContact = (event) => {
        event.preventDefault();
        const { name, number, contacts } = this.state;

        if (name.trim() === '' || number.trim() === '') return;

        const contactExists = contacts.find(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (contactExists) {
            alert('Contact already exists');
            return;
        }

        this.setState({
            contacts: [...contacts, { id: nanoid(), name, number }],
            name: '',
            number: ''
        });
    };

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    };

    handleDeleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id)
        }));
    };

    getFilteredContacts() {
        const { contacts, filter } = this.state;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    render() {
        const { filter, name, number } = this.state;
        const filteredContacts = this.getFilteredContacts();

        return ( <
            div className = "App" >
            <
            h1 > Phonebook < /h1> <
            ContactForm name = { name }
            number = { number }
            onNameChange = { this.handleInputChange }
            onNumberChange = { this.handleInputChange }
            onAddContact = { this.handleAddContact }
            /> <
            h2 > Contacts < /h2> <
            Filter value = { filter }
            onChange = { this.handleFilterChange }
            /> <
            ContactList contacts = { filteredContacts }
            onDeleteContact = { this.handleDeleteContact }
            /> < /
            div >
        );
    }
}

export default App;