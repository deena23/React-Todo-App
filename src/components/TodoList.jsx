import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab, handleDeleteTodo, handleEditTodo } = props;

    const filteredTodoList = selectedTab === 'All' ? todos :
        selectedTab === 'Open' ? todos.filter(val => !val.complete) :
        todos.filter(val => val.complete);

    return (
        <>
            {filteredTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                    key={todos.findIndex(val => val.input == todo.input)}
                    todoIndex={todoIndex}
                    handleDeleteTodo={handleDeleteTodo} 
                    handleEditTodo={handleEditTodo}
                    todo = {todo}/>
                )
            })}
        </>
    )
}