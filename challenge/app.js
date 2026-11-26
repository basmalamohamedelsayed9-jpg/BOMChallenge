let input = document.querySelector(".input")
let add = document.querySelector(".add")
let form = document.querySelector(".form")
let tasks = document.querySelector(".tasks")
console.log(input);
console.log(add);
console.log(tasks);

add.addEventListener("click", () => {
    let invalue = input.value.trim()
    if (invalue === "") return;
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

    tasksArray.push(invalue);

    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    window.localStorage.setItem("input_value", `${invalue}`)
    let delbtn = document.createElement("button")
    delbtn.textContent = "delet";

    let newtask = document.createElement("div")
    newtask.append(invalue, delbtn)
    document.body.appendChild(newtask)
    tasks.appendChild(newtask)

    delbtn.addEventListener("click", () => {
        newtask.remove();
    })
    input.value = "";



})
let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

tasksArray.forEach((task) => {
    let delbtn = document.createElement("button");
    delbtn.textContent = "delete";

    let newtask = document.createElement("div");
    newtask.append(task, delbtn);

    tasks.appendChild(newtask);
});
// let input = document.querySelector(".input");
// let add = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");

// // Get saved tasks
// let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

// // Display and save tasks
// function renderTasks() {
//     tasks.innerHTML = "";

//     tasksArray.forEach((task, index) => {
//         let newtask = document.createElement("div");

//         let delbtn = document.createElement("button");
//         delbtn.textContent = "Delete";

//         newtask.append(task, delbtn);
//         tasks.appendChild(newtask);

//         delbtn.addEventListener("click", () => {
//             tasksArray.splice(index, 1);
//             renderTasks();
//         });
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasksArray));
// }

// // Add new task
// add.addEventListener("click", () => {
//     let invalue = input.value.trim();

//     if (invalue === "") return;

//     tasksArray.push(invalue);

//     input.value = "";

//     renderTasks();
// });

// // Display saved tasks on page load
// renderTasks();                      