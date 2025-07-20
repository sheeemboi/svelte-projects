  import {v4 as uuidv4} from "uuid"
  
  export function deleteItem(todos, id) {

    console.log("check delete")
    return todos = todos.filter((todo) => {
      return todo.id !== id;
    });
  }

  export function editItem(todo) {
    const newEditable = !todo.isEditable;
    todo.isEditable = newEditable;
    todo.isDisabled = newEditable;
  }

  export function completeItem(todo) {
    todo.completed = !todo.completed;
  }

  export function addItem(todos, newText, e) {
    e.preventDefault();
    todos.push({
      id: uuidv4(),
      text: newText,
      completed: false,
      isEditable: false,
      isDisabled: false,
    });
  }