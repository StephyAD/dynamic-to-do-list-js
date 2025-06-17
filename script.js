// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();

    // Check for empty input
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add click event to remove the task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button to task and task to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add click event to "Add Task" button
  addButton.addEventListener('click', addTask);

  // Allow "Enter" key to add tasks
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Call addTask on page load (per instruction, though no input value yet)
  // addTask(); // Uncomment if needed for default behavior
});
