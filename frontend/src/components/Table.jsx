import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchTasks from '../services/tasksApi';

function Table({ tasks, setTasks }) {
  const [edit, setEdit] = useState({});
  const [editedTitle, setEditedTitle] = useState({});

  const formatDate = (date) => {
    const options = { dateStyle: 'long', timeStyle: 'short' };
    return new Date(date).toLocaleString('en-US', options);
  };

  const updateTask = async ({ id, title, status }) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status }),
    });

    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
    setTasks(await fetchTasks());
  };

  const handleEditClick = (id, title) => {
    setEdit((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setEditedTitle((prevState) => ({
      ...prevState,
      [id]: title,
    }));
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <table>

        <thead>
          <tr>
            <th>Task</th>
            <th>Created in</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                {
                  edit[task.id] ? (
                    <input
                      type="text"
                      value={editedTitle[task.id] !== undefined ? editedTitle[task.id] : task.title}
                      onChange={
                        (e) => setEditedTitle({ ...editedTitle, [task.id]: e.target.value })
                      }
                      onKeyDown={
                        (e) => {
                          if (e.key === 'Enter') {
                            updateTask({ ...task, title: editedTitle[task.id] });
                            handleEditClick(task.id, editedTitle[task.id]);
                          }
                        }
                      }
                    />
                  ) : (task.title)
                }
              </td>
              <td>
                {
                  formatDate(task.created_at)
                }
              </td>
              <td>
                <select
                  value={task.status}
                  onChange={({ target }) => updateTask({ ...task, status: target.value })}
                >
                  <option value="pendente">pendente</option>
                  <option value="em andamento">em andamento</option>
                  <option value="concluída">concluída</option>
                </select>
              </td>
              <td>
                <button type="button" className="btn-action" onClick={() => handleEditClick(task.id, task.title)}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button type="button" className="btn-action" onClick={() => deleteTask(task.id)}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

Table.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Table;
