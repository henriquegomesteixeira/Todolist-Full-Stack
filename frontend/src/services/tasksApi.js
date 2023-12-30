// Mude a URL para o endereço do seu backend
const fetchTasks = async () => {
  const response = await fetch('http://localhost:3333/tasks');
  const tasks = await response.json();
  return tasks;
};

export default fetchTasks;
