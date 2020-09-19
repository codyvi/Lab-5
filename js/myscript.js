let post = document.getElementById('btnPost');
let clear = document.getElementById('btnClear');
let mark = document.getElementById('btnMark');
let del = document.getElementById('btnDelete');

post.addEventListener('click',obtenerDatos);
clear.addEventListener('click',todoClear);
mark.addEventListener('click',todoMark);
del.addEventListener('click',todoDel);

var values = document.getElementById("todoList");

function obtenerDatos(e) {
    e.preventDefault();

    var newT = document.getElementById("todoText").value; 
    var listOfTo = document.getElementById("todoList");

    let currentList = listOfTo.innerHTML;
    listOfTo.innerHTML = currentList + `<input type = "checkbox" id="post" name="todo" /> ${newT} <br> `
    
}

function todoClear(e) {
    e.preventDefault();

    let elements = values.querySelectorAll("#post");
    elements.forEach((x) => {
      x.checked = false;
    });

}

function todoMark(e) {
    e.preventDefault();

    let elements = values.querySelectorAll("#post");
    elements.forEach((x) => {
      x.checked = true;
    });
}

function todoDel(e) {
    e.preventDefault();

    document.getElementById("todoList").innerHTML = "";
}