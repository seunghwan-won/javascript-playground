var todo = {
    todos : [],
    addTodo : function(todo) {
        this.todos.push(todo);
    },
    showTodo : function () {
        return this.todos;
    }
}