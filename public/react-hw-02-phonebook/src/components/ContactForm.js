import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

function ContactForm({ name, number, onNameChange, onNumberChange, onAddContact, onSubmit }) {
    return ( <
        form onSubmit = { onAddContact } >
        <
        input type = "text"
        name = "name"
        pattern = "^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title = "Name may contain only letters, apostrophe, dash and spaces."
        required value = { name }
        onChange = { onNameChange }
        /> <
        input type = "tel"
        name = "number"
        pattern = "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
        required value = { number }
        onChange = { onNumberChange }
        /> <
        button type = "submit" > Add Contact < /button> < /
        form >
    );
}

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onNumberChange: PropTypes.func.isRequired,
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;