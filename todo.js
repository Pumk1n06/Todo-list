const addTask=document.getElementById('add-task');
const taskContainer=document.getElementById('task-container');
const inputTask=document.getElementById('input-task');

addTask.addEventListener('click', function(){

    let task= document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText=inputTask.value;
    task.appendChild(li);

    let deleteButton=document.createElement("button");
    deleteButton.classList.add('delete-task');
    task.appendChild(deleteButton);

    if(inputTask.value===""){
        alert("Enter something");
    }else{
        taskContainer.appendChild(task);
    }
    
    inputTask.value="";
    
    deleteButton.addEventListener('click', function(e){
        let target=e.target;
        target.parentElement.remove();
    });
    
});