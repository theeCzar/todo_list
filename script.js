"use strict"
//selectors
let data=document.getElementById("data");
let add=document.getElementById("add");
let todo_container=document.getElementById("items");
//eventlistners
document.addEventListener('DOMContentLoaded',getTodo)
add.addEventListener("click",addTodo);
todo_container.addEventListener('click',deleteCheck);

function addTodo(event){
    event.preventDefault();
    if(data.value!==' '){
    let todoList=document.createElement('div');
    todoList.classList.add('todos');
    let todo= document.createElement('li');
    todo.innerText= data.value;
    todoList.appendChild(todo);
    savetodo(data.value);
    let ckdbtn=document.createElement('button');
    ckdbtn.innerHTML='<i class="fa-solid fa-check"></i>';
    ckdbtn.classList.add('checked');
    todoList.appendChild(ckdbtn);
    let delbtn=document.createElement('button');
    delbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    delbtn.classList.add('deleted');
    todoList.appendChild(delbtn);
    todo_container.appendChild(todoList);
    data.value=' ';
    }

}
function deleteCheck(e){
    let  item=e.target;
    if(item.classList[0]==='deleted'){
        let todo=item.parentElement;
        todo.classList.add('fall');
        console.log(todo.firstChild.innerText);
        deltodo(todo.firstChild.innerText);
        todo.addEventListener('transitionend',()=>{
             todo.remove();
        })
    }
    if(item.classList[0]==='checked'){
       let todo=item.parentElement;
       todo.classList.toggle('complete');
    }

}
function savetodo(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodo(){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((data)=>{
            let todoList=document.createElement('div');
            todoList.classList.add('todos');
            let todo= document.createElement('li');
            todo.innerText= data;
            todoList.appendChild(todo);
            let ckdbtn=document.createElement('button');
            ckdbtn.innerHTML='<i class="fa-solid fa-check"></i>';
            ckdbtn.classList.add('checked');
            todoList.appendChild(ckdbtn);
            let delbtn=document.createElement('button');
            delbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
            delbtn.classList.add('deleted');
            todoList.appendChild(delbtn);
            todo_container.appendChild(todoList);
    })

}
function deltodo(data){
    console.log(data);
    let todos;
    todos=JSON.parse(localStorage.getItem("todos"));

    let index=todos.indexOf(data);
    console.log(index);
    todos.splice(index,1);
    console.log(todos);
    localStorage.clear();
    localStorage.setItem("todos",JSON.stringify(todos));
}