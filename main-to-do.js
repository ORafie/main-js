// 21. To do =============================================================================
/*
// 21.1 add an html tag to the page through html
const todoList = document.querySelector('#todo-list')
console.log(todoList)
const todoForm = document.querySelector('#todo-form')
console.log(todoForm)
const todoInput = document.querySelector('#todo-input')
console.log(todoInput)

todoForm.addEventListener('submit', formHandler2)

function formHandler2(event) {
    event.preventDefault()
    // console.log('Submit!')

    // receive a nname of new task from input
    const taskText = todoInput.value
    // console.log(taskText)

    // create a tag li through html
    const li = `<li>${taskText}</li>`
    // console.log(li)

    // add this html tag to our page
    todoList.insertAdjacentHTML('beforeend', li)

    // clean the input
    todoInput.value = ''

    // to put focus on input
    todoInput.focus()
}
*/


// 21.2 add an html tag to the page through creating the element
/*
const taskText2 = todoInput.value
const newTask2 = document.createElement('li')
newTask2.innerText = taskText2

todoList.append(newTask2)
todoInput.value = ''
todoInput.focus()
*/

// 21.3 add an html tag to the page through creating the element with an event
/*
const todoList3 = document.querySelector('#todo-list')
const todoForm3 = document.querySelector('#todo-form')
const todoInput3 = document.querySelector('#todo-input')

todoForm3.addEventListener('submit', formHandler3)

function formHandler3(event3) {
    event3.preventDefault()

    const taskText3 = todoInput3.value
    const newTask3 = document.createElement('li')
    newTask3.innerText = taskText3
    console.log(newTask3)

    // addin a button Delete
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('role', 'button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.style['margin-left'] = '15px'
    newTask3.append(deleteBtn)

    todoList3.append(newTask3)
    todoInput3.value = ''
    todoInput3.focus()

    // clean the input
    todoInput3.value = ''

    // to put focus on input
    todoInput3.focus()
}
*/

// 21.4 add an html tag to the page through creating the element with an event and function

const todoList4 = document.querySelector('#todo-list')
const todoForm4 = document.querySelector('#todo-form')
const todoInput4 = document.querySelector('#todo-input')

todoForm4.addEventListener('submit', formHandler3)

function formHandler3(event4) {
    event4.preventDefault()

    const taskText4 = todoInput4.value
    const newTask4 = document.createElement('li')
    newTask4.innerText = taskText4
    console.log(newTask4)

    // addin a button Delete
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('role', 'button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.style['margin-left'] = '15px'
    newTask4.append(deleteBtn)

    // adding an ability to delete a task
    deleteBtn.addEventListener('click', deleteTask4)

    //also we can write function here like this:
    //deleteBtn.addEventListener('click', (ev) => ev.target.closest('li').remove())

    //or put the function inside like this:
    /*
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove()
    })
    */

    todoList4.append(newTask4)
    todoInput4.value = ''
    todoInput4.focus()

    // clean the input
    todoInput4.value = ''

    // to put focus on input
    todoInput4.focus()
}
// tne function for deleting an element
function deleteTask4() {
    this.closest('li').remove()
}