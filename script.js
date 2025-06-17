// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Event to remove the task when button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the button to the list item and the item to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Event listener to add task with Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Run logic on page load (can be used to load default tasks if needed)
  // addTask(); // Uncomment if needed
});
