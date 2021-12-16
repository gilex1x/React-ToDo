import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import './assets/App.css';
const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/*Aca debemos mapear las Todo  */}
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export { App };
