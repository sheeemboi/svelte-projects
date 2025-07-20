import {v4 as uuidv4} from "uuid"
  
export function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export function deleteItem(todos, id) {
  const newTodos = todos.filter((todo) => {
    return todo.id !== id;
  });
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return newTodos;
}

export function editItem(todos, todo) {
  const newTodos = todos.map(t => {
    if (t.id === todo.id) {
      const newEditable = !todo.isEditable;
      return { ...t, isEditable: newEditable, isDisabled: newEditable}
    }
    return t;
  })
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return newTodos;
}

export function completeItem(todos, todo) {
  const newTodos = todos.map(t => {
    if (t.id === todo.id) {
     return {...t, completed: !t.completed}
    }
    return t;
  })
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return newTodos;
}

export function addItem(todos, newText, e) {
  e.preventDefault();
  const newTodos = [...todos, {
    id: uuidv4(),
    text: newText,
    completed: false,
    isEditable: false,
    isDisabled: false,
  }];
  localStorage.setItem("todos", JSON.stringify(newTodos));
  return newTodos;
}