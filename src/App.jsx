import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true }
  // ];

  const [todos, setTodos] = useState([]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleEditTodo(index) {
    const newTodoList = [...todos];
    let completedTodo = newTodoList[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((val, valIndex) => {
      return valIndex != index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(latestTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: latestTodos}));
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) return;
    let db = JSON.parse(localStorage.getItem('todo-app'));

    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} /> 
      <Tabs 
      todos={todos}
      selectedTab={selectedTab} 
      setSelectedTab={setSelectedTab} />
      <TodoList 
      todos={todos}
      selectedTab={selectedTab}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
