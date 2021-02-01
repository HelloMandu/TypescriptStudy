{
    type Todo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<Todo>){
        // todo.title = 'jaja'; // error
    }
}