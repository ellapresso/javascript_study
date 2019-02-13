const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const ToDos_Ls = "toDos";
let toDos = [];

function filterFn(roDo) {
  return roDo.id === 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(ToDos_Ls, JSON.stringify(toDos)); //localstorage에 저장할 때, String으로 저장해주어야 함.
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerHTML = "❌"; //charset utf-8 해줘야 이모지 나옴.
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text, //text 만 써도 됨 (es6)
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(ToDos_Ls);
  if (loadedToDos != null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text); //to do list가 나타나게 함.
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
