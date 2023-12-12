//  all required elements
const inputbox = document.querySelector(".inputfield input");
const addbtn = document.querySelector(".inputfield button");
const todolist = document.querySelector(".todolist");
const deleteallbtn = document.querySelector(".footer button");

// onkeyup event function
inputbox.onkeyup = () => {
    var usertext = inputbox.value;
    if (usertext.trim() != 0) {
        addbtn.classList.add("active");
    } else {
        addbtn.classList.remove("active");
    }
}

showtasks();

addbtn.onclick = () => {
    var usertext = inputbox.value;
    var getlocalstorage = localStorage.getItem("New Todo");
    if (getlocalstorage == null) {
        listarray = [];
    } else {
        listarray = JSON.parse(getlocalstorage);
    }
    listarray.push(usertext);
    localStorage.setItem("New Todo", JSON.stringify(listarray));
    showtasks();
    addbtn.classList.remove("active");
}

// function shows all the tasks
function showtasks() {
    var getlocalstorage = localStorage.getItem("New Todo");
    if (getlocalstorage == null) {
        listarray = [];
    } else {
        listarray = JSON.parse(getlocalstorage);
    }
    const pendingnum = document.querySelector(".pendingnumber");
    pendingnum.textContent = listarray.length;
    if (listarray.length > 0) {
        deleteallbtn.classList.add("active");
    } else {
        deleteallbtn.classList.remove("active");
    }
    var newlitag = "";
    listarray.forEach((element, index) => {
        newlitag += `<li>${element}<span class="icon" onclick="deletetask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML = newlitag;
    inputbox.value = "";
}

// delete task function
function deletetask(index) {
    var getlocalstorage = localStorage.getItem("New Todo");
    listarray = JSON.parse(getlocalstorage);
    listarray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listarray));
    showtasks();
}

// delete all tasks function
deleteallbtn.onclick = () => {
    var getlocalstorage = localStorage.getItem("New Todo");
    if (getlocalstorage == null) {
        listarray = [];
    } else {
        listarray = JSON.parse(getlocalstorage);
        listarray = [];
    }
    localStorage.setItem("New Todo", JSON.stringify(listarray));
    showtasks();
}
