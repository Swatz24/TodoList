
 // Initialize todoList array in local storage
 let todoList = JSON.parse(localStorage.getItem('todoList') || "[]");

 renderTodoList();

 // Call function to display the todoList in page whenever we load.
 //renderTodoList();
 
 // addToDO() function to do items to the list.
 function addToDo(){
   let todoName = document.querySelector('.js-name-input').value; // get input value from HTML through DOM query.
   let todoDate = document.querySelector('.js-date-input').value; // get input value from HTML through DOM query.
   let todo = {name: todoName, dueDate:todoDate}; // Save it as an object.
 
   // Get the updated todoList from local storage and push the added item to it.
  //todoList = JSON.parse(localStorage.getItem('todoList')); 
  todoList.push(todo);
  localStorage.setItem('todoList', JSON.stringify(todoList));
   console.log(todoList);
   // Make the input field blank after adding the item.
   document.querySelector('.js-name-input').value = '';
   document.querySelector('.js-date-input').value = '';
 
   // Call function to display the todoList once it gets added.
   renderTodoList();
 }
 
 
 // Function to display the todoList once todo item gets added.
 function renderTodoList(){
 let todoListHTML = ''; // initialize a variable to store HTML which will later be displayed in the page.
//  let  temp = (JSON.parse(localStorage.getItem('todoList'))); // Get the updated todoList from the localStorage.
//  //console.log(temp[0]);
 
 // Looping through the array of todoList to display all the items. 
 for (let i=0; i< todoList.length; i++){
   const todoItem = todoList[i];
   const todoName = todoItem.name;
   const todoDate = todoItem.dueDate;
 
   // Adding HTML elements in javascript to display the todo items once it gets added.(Added as <Div>s)
//    const html = `
//      <div>${todoName} </div>
//      <div> ${todoDate} </div>
//      <button 
//        class="delete-todo-button js-delete-todo-button">Mark Completed
//        </button>
//      `;
//    todoListHTML += html;
//  }

  // Adding HTML elements in javascript to display the todo items once it gets added.
  //Edited to add as unordered list items.
 const html = `<li class="todo-li"><span class ="liSpan">${todoName}. </span>
                DueDate:${todoDate}      <button class="delete-todo-button js-delete-todo-button">Mark Completed
   </button> </li>
 `;
todoListHTML += html;
}
 // Displaying the HTML elements from JS by accessing the <div>'s innerHTML.
 document.querySelector('.js-todo-list').innerHTML = todoListHTML;
 
 // Event Listener for deleteButton to delete the Item once its clicked.
 document.querySelectorAll('.js-delete-todo-button'). 
       forEach((deleteButton, index) => {
           deleteButton.addEventListener('click' , () => {
            let todoDelete = (JSON.parse(localStorage.getItem('todoList'))); // get the Updated todoList from Local storage.
             todoList.splice(index, 1);  // Deletes the item with index 'index'
            localStorage.setItem('todoList', JSON.stringify(todoList)); // Update local Storage .
             renderTodoList(); // Call the function to display the changes.
           });
         
       });
 }
 
 // Event Listener for add button which calls the addToDo() function when clicked.
 document.querySelector('.add-todo-button').
     addEventListener('click', () =>  {
       addToDo();
      // localStorage.setItem('todoList', JSON.stringify(todo));
       }  
     );
