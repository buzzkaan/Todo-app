import { AddIcon } from '@chakra-ui/icons';
import { HStack, Input, IconButton } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import TodoContext, { TodoProvider } from '../context/TodoContext';

const TodoInput = todo => {
  const {
    selectedCategory,
    newTodo,
    addTodo,
    todoLength,
    todoList,
    setNewTodo,
  } = useContext(TodoContext);
  useEffect(() => console.log(todoList), [todoList]);

  useEffect(() => console.log(selectedCategory), [selectedCategory]);

  return (
    <TodoProvider>
      <HStack m={3} justifyContent={'space-between'}>
        <Input
          type='text'
          placeholder='Yapılacaklar Giriniz'
          _placeholder={{ color: 'white' }}
          value={newTodo}
          bgColor={'rgba(208, 189, 189, 0.6)'}
          border={'2px'}
          borderColor='rgba(113 119 144 / 25%)'
          onChange={e => setNewTodo(e.target.value)}
          w={'100%'}
          h={'5vh'}
          textColor='white'
        ></Input>

        <IconButton
          onClick={e => {
            e.preventDefault();
            if (todoLength > 0) {
              addTodo(selectedCategory);
            } else {
              alert('Please enter a todo');
            }
          }}
          icon={<AddIcon />}
          size='sm'
        ></IconButton>
      </HStack>
    </TodoProvider>
  );
};

export default TodoInput;
