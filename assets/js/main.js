const add = document.querySelector("#add");
const btnAdd = document.querySelector("#btnAdd");
const total = document.querySelector("#total");
const done = document.querySelector("#done");
const finalList = document.querySelector("#finalList");

let tareas = [
  { id: 16, Tarea: "Hacer mercado", completed: false },
  { id: 60, Tarea: "Estudiar para la prueba", completed: false },
  { id: 24, Tarea: "Sacar a pasear a Tobby", completed: false },
];

const render = (array) => {
  finalList.innerHTML = "";
  let totalDone = 0;
  array.forEach((tarea) => {
    let completed = "";
    let modStyle = "";
    if (tarea.completed) {
      completed = "checked";
      totalDone++;
      modStyle = `class="finished"`;
    }
    finalList.innerHTML += `<li class ="info"><p>${tarea.id}</p>
        <p ${modStyle}>${tarea.Tarea}</p>
        <div class="infobtn"> <input type="checkbox" ${completed} data-update="${tarea.id}"></input>
        <button class="deletebtn" data-delete="${tarea.id}">❌</button>
        </div></li>`;
  });
  total.textContent = `${tareas.length}`;
  done.textContent = `${totalDone}`;
};

render(tareas);

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (add.value != ""){
  const addToDo = add.value;
  tareas.push({
    id: Date.now(),
    Tarea: addToDo,
    completed: false,
  });
  render(tareas);
  add.value = "";
//   finalList.innerHTML = "";
} else {
    alert ("Debes ingresar una tarea")
}

});

// Delegación de eventos
finalList.addEventListener("click", (e) => {
  //Eliminar
  if (e.target.dataset.delete) {
    const idTarea = e.target.dataset.delete;
    tareas = tareas.filter((tarea) => tarea.id !== parseInt(idTarea));
    render(tareas);
  }
  // check box
  if (e.target.dataset.update) {
    const idTarea = e.target.dataset.update;
    const index = tareas.findIndex((tarea) => tarea.id == idTarea);
    tareas[index].completed = !tareas[index].completed;
    render(tareas);
  }
});
