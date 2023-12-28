import React from 'react';
import PropTypes from 'prop-types';

function Form({ fetchData }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const task = formData.get('input-task');
    const cleanInput = document.getElementById('input-task');
    cleanInput.value = '';

    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: task }),
    });

    fetchData();
  };

  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <div id="clock" />
      <input type="text" placeholder="Add tasks" id="input-task" name="input-task" />
      <button type="submit" id="add-button">+</button>
    </form>
  );
}

Form.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Form;
