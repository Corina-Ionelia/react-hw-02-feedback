// src/components/FeedbackOptions.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // Importa styled-components

const Button = styled.button `
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => ( <
    div > {
        options.map((option) => ( <
            Button key = { option }
            onClick = {
                () => onLeaveFeedback(option) } > { option } <
            /Button>
        ))
    } <
    /div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;