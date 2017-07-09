angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {id:"Google", text:'http://www.google.com/', done:false},
      {id:"Yahoo", text:'http://www.yahoo.com', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({id:todoList.todoID, text:todoList.todoText, done:false});
        todoList.todoID = '';
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
    
    
  });