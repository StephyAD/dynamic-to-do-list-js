document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || [];
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false);
        });
    }

    // Function to create task element (separated from addTask for reusability)
    function createTaskElement(taskText, saveToStorage = true) {
        // Create new task item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Create task text span
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(taskTextSpan);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.classList.add('btn-danger');
        
        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
            updateLocalStorage();
        };

        // Append elements
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Save to Local Storage if needed
        if (saveToStorage) {
            updateLocalStorage();
        }
    }

    // Function to update Local Storage with current tasks
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li span').forEach(taskElement => {
            tasks.push(taskElement.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create task element and save to storage
        createTaskElement(taskText);
        
        // Clear input field
        taskInput.value = '';
    }

    // Event listener for add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});