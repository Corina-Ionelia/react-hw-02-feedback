import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

function ContactList({ contacts, onDelete, onDeleteContact }) {
    return ( <
        ul > {
            contacts.map((contact) => ( <
                li key = { contact.id } > { contact.name }: { contact.number } <
                button onClick = {
                    () => onDeleteContact(contact.id)
                } > Delete < /button> < /
                li >
            ))
        } <
        /ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList