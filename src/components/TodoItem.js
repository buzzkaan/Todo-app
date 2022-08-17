import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Input,
  Checkbox,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { Form } from 'reactstrap';
import TodoContext from '../context/TodoContext';

const TodoItem = () => {
  const {
    todoList,
    todo,
    selectedCategory,
    completeTodo,
    setTodo,
    editTodo,
    saveTodo,
    deleteTodo,
  } = useContext(TodoContext);

  return (
    <Stack>
      {todoList.map(todoItem => {
        if (todoItem.category === selectedCategory) {
          return (
            <VStack>
              <HStack
                key={todoItem.id}
                className='glassmorphism-light-1'
                justifyContent={'space-between'}
                mt={'3'}
                w={'31vw'}
                h={'7vh'}
              >
                <HStack pl={'3'}>
                  <Checkbox
                    bg={'blackAlpha'}
                    value={todoItem.isCompleted}
                    onChange={() => completeTodo(todoItem.id)}
                    size='md'
                    borderColor='whiteAlpha.500'
                  ></Checkbox>

                  <Box>
                    {!todoItem.isEditable ? (
                      <Text
                        fontSize={'15px'}
                        className={` ${todoItem.isCompleted ? 'text' : ''} `}
                      >
                        {todoItem.todo}
                      </Text>
                    ) : (
                      <Input
                        placeholder={todo}
                        type='text'
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                      ></Input>
                    )}
                  </Box>
                </HStack>

                <HStack gap={0.5} pr={'3'}>
                  {!todoItem.isEditable ? (
                    <IconButton
                      bg={'blackAlpha.400'}
                      type='button'
                      value={todoItem.isEditable}
                      onClick={() => editTodo(todoItem.id, todoItem.todo)}
                      icon={<EditIcon />}
                      size='md'
                    ></IconButton>
                  ) : (
                    <IconButton
                      bg={'blackAlpha.400'}
                      type='button'
                      onClick={() => saveTodo(todoItem.id)}
                      icon={<CheckIcon />}
                      size='md'
                    ></IconButton>
                  )}

                  <IconButton
                    bg={'blackAlpha.400'}
                    type='button'
                    onClick={() => deleteTodo(todoItem.id)}
                    icon={<DeleteIcon />}
                    size='md'
                  ></IconButton>
                </HStack>
              </HStack>
            </VStack>
          );
        } else return null;
      })}
    </Stack>
  );
};

export default TodoItem;

/* 

<HStack
      justifyContent={'space-between'}
      width={'32.1vw'}
      height={'8vh'}
      className='glassmorphism-light-1'
    >
      <Checkbox colorScheme='teal' size='md'></Checkbox>

      <Text>{todo}</Text>
      <IconButton
        type='button'
        icon={<DeleteIcon />}
        size='md'
        bg={'black'}
        variant='solid'
      ></IconButton>
    </HStack>


*/
/*
 */

/*
 */
