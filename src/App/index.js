import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    sincronizeTodos,
  } = useTodos();

  return(
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        // render={todo => (
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text} 
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)} 
        //   />
        // )}
      >
        {todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
          /> 
        )}
      </TodoList>
      
      
        {/* <TodoList>
            {error && <TodosError/>}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}

            {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} 
                />
            ))}
        </TodoList> */}

      {!!openModal &&(
          <Modal>
              <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              />
        </Modal>
      )}
       
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert 
        sincronize={sincronizeTodos}
      />

    </React.Fragment>
    );
}

export default App;
