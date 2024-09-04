
var taskList = document.getElementById('task-list');
var addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    var newTaskInput = document.getElementById('new-task');
    var newTaskValue = newTaskInput.value.trim();
    if (newTaskValue !== '') {
        var newTaskLi = document.createElement('li');
        newTaskLi.innerHTML = `<input type="checkbox" id="task-${newTaskValue}">${newTaskValue}<button id="delete-task-${newTaskValue}">Delete</button>`;
        taskList.appendChild(newTaskLi);
        newTaskInput.value = '';
    }else{
        alert("enter to do list");
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const deleteButton = event.target;
        const taskLi = deleteButton.parentNode;
        taskList.removeChild(taskLi);
    }
});