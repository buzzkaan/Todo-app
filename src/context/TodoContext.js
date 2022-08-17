import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const getCategoriesfromLS = () => {
  const getCategories = localStorage.getItem('categories');
  if (getCategories) {
    return JSON.parse(getCategories);
  } else {
    return [];
  }
};

const getTodofromLS = () => {
  const getTodos = localStorage.getItem('todoList');
  if (getTodos) {
    return JSON.parse(getTodos);
  } else {
    return [];
  }
};

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(getTodofromLS());
  const [todo, setTodo] = useState('');
  const [newTodo, setNewTodo] = useState([]);

  const [categories, setCategories] = useState(getCategoriesfromLS());
  const [categoriesValue, setCategoriesValue] = useState('');

  const [selectedCategory, setSelectedCategory] = useState();

  const todoLength = newTodo.length;

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    const getCategories = JSON.parse(localStorage.getItem('categories'));
    if (getCategories) {
      return setTodoList(getCategories);
    }
  }, []);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todoList'));
    if (getTodos) {
      return setTodoList(getTodos);
    }
  }, []);

  const addTodo = category => {
    setTodoList(prevTodoList => [
      ...prevTodoList,
      {
        id: uuidv4(),
        todo: newTodo,
        category,
        isEditable: false,
        isCompleted: false,
      },
    ]);
    setNewTodo('');
  };

  const completeTodo = id => {
    setTodoList(prevTodoList =>
      prevTodoList.map(todoItem =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };

  const editTodo = (id, oldTodo) => {
    setTodoList(prevTodoList =>
      prevTodoList.map(todoItem =>
        todoItem.id === id
          ? { ...todoItem, isEditable: !todoItem.isEditable }
          : todoItem
      )
    );
    setTodo(oldTodo);
  };

  const saveTodo = id => {
    setTodoList(prevTodoList =>
      prevTodoList.map(todoItem =>
        todoItem.id === id
          ? { ...todoItem, isEditable: !todoItem.isEditable, todo: todo }
          : todoItem
      )
    );
  };

  const deleteTodo = id => {
    setTodoList(prevTodoList =>
      prevTodoList.filter(todoItem => todoItem.id !== id)
    );
  };

  useEffect(() => console.log(todoList), [todoList]);

  useEffect(() => console.log(selectedCategory), [selectedCategory]);
  return (
    <TodoContext.Provider
      value={{
        setNewTodo,
        todoList,
        setTodoList,
        setTodo,
        addTodo,
        categories,
        categoriesValue,
        selectedCategory,
        setSelectedCategory,
        setCategoriesValue,
        setCategories,
        deleteTodo,
        completeTodo,
        saveTodo,
        editTodo,
        todoLength,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
