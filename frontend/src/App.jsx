import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import GreetingDate from './components/Greeting';
import fetchTasks from './services/tasksApi';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const tasksData = await fetchTasks();
    setTasks(tasksData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <GreetingDate />
      <main>
        <Form fetchData={fetchData} />
        <Table tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default App;
