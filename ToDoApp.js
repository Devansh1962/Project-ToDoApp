let todoList = [
    {
    item:"By milk",
     dutoDate:`08/08/2024`

}, 
    
    {
        item:`gose to college`, 
        dutoDate:`08/08/2024`

    }

];

displaytodo();

function addTodo(){
    let inputElment = document.querySelector(`#todo-input`);
    let dateElment = document.querySelector(`#todo-date`);
    let todoItem = inputElment.value;
    let todoDate = dateElment.value;
    todoList.push({ item: todoItem, dutoDate: todoDate});
    inputElment.value = '';

    displaytodo();


}

function displaytodo(){
    let cantenarElment = document.querySelector(`.cantenar-todo`);
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){

        let {item , dutoDate} = todoList[i];

        newHtml += `
        
        <span>${item}</span>
        <span>${dutoDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);displaytodo();">Delete</button>
        
        `;

        
    }
    cantenarElment.innerHTML = newHtml;
}