"use strict"

let nextId = 1;
let trash = null;
let toRemove = null;

const setAsDone = (id) => {
    // console.log(id)
    // this.classList.toggle('done')
    const todo = document.getElementById(id);
    todo.firstChild.classList.toggle("done");
    todo.children.item(1).classList.toggle("invisible")
    const d = new Date();
    todo.children.item(1).innerHTML = " " + d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + ("0"+d.getMinutes()).slice(-2);
    
};

const changedMyMind = () => {
    $("#removing-modal").toggle("invisible");
}

const yeaRemoveIt = () => {
    toRemove.toggle("invisible");
    if(trash!==null){
        trash.remove();
    }
    else{
        $("#untrash-btn").toggle("invisible", false);
    }
    trash = toRemove;
    $("#removing-modal").toggle("invisible");
}

const removeTodo = (id) => {
    toRemove = $("#"+id);
    $("#removing-modal").toggle("invisible");
    
};

const unTrash = () => {
    trash.toggle("invisible");
    trash = null;
    $("#untrash-btn").toggle("invisible", false);
}

const addTodo = () => {
    const newTodoText = document.getElementById("new-todo").value.trim();
    // console.log(newTodoText);
    if(newTodoText === ""){
        console.warn("TuDu nie może być puste!");
        return;
    }

    const todoList = document.getElementById("todo-list");
    const newTodo = document.createElement("li");
    const newTodoVal = document.createElement("span");
    const newTodoTime = document.createElement("span");
    const removeBtn = document.createElement("button");

    newTodoTime.classList.toggle("invisible");
    
    newTodoVal.innerHTML = newTodoText;
    
    newTodo.id = "todo-"+nextId;
    nextId = nextId+1;
    newTodoVal.onclick = () => {setAsDone(newTodo.id);};
    
    removeBtn.innerHTML = "&times;"
    removeBtn.classList.add("rmv-btn");
    removeBtn.onclick = () => {removeTodo(newTodo.id);}
    
    newTodo.append(newTodoVal);
    newTodo.append(newTodoTime);
    newTodo.append(removeBtn);

    todoList.append(newTodo);
};
