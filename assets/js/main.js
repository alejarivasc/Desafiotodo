const ingresoTarea = document.querySelector("#ingresoTarea");
const agregarTarea = document.querySelector("#agregarTarea");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");
const listaTareas = document.querySelector("#listaTareas");


let tareas =[
    // {id: 16, Tarea: "Hacer mercado"},
    // {id: 60, Tarea: "Estudiar para la prueba"},
    // {id: 24, Tarea: "Sacar a pasear a Tobby"}
];

const render = (array) =>{
    listaTareas.innerHTML = ""
    array.forEach(tarea =>{
        listaTareas.innerHTML += `<li>ID: ${tarea.id}
        - Tarea: ${tarea.Tarea};  
        <input type="checkbox" data-update="${tarea.id}"></input>
        <button data-delete="${tarea.id}">X</button>
        </li>`
        total.innerHTML = `Total: ${tareas.length}`

    }); 
}



 render (tareas);

agregarTarea.addEventListener ("click", ()=> {
const nuevaTarea = ingresoTarea.value;
tareas.push ({
    id: Date.now(),
    Tarea: nuevaTarea,
});
ingresoTarea.value= ""
listaTareas.innerHTML = "";

render(tareas);


})
// Delegación de eventos 
listaTareas.addEventListener("click", (e) =>{
    //Eliminar
    if (e.target.dataset.delete){
        const idTarea = e.target.dataset.delete;
tareas = tareas.filter((tarea)=> tarea.id !== parseInt(idTarea))

render (tareas);

    }
    // actualizar
if (e.target.dataset.update) {
    console.log(e)
 const idTarea = e.target.dataset.update;
 const newArray = tareas.map((tarea) => {
    if (tarea.id == parseInt(idTarea)) {
        tarea.classList.toggle = ("done")



 }
return tarea;
});
tareas = newArray;
render(newArray);
realizadas.innerHTML = `Realizadas: ${newArray.length}`

}

 });