import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { TodoProvider } from './context/TodoContext';
import './app.css';
import TodoInput from './components/TodoInput';

import { CategoryInput } from './components/CategoryInput';
import TodoItem from './components/TodoItem';
import CategoryRadio from './components/CategoryRadio';
import { TodoRadio } from './components/TodoRadio';

function App () {
  return (
    <TodoProvider>
      <ChakraProvider>
        <Flex className='container'>
          <Box width={'40vw'} h={'60vh'} className='glassmorphism-dark-1'>
            <Grid
              templateAreas={`
                  "header header"
                  "nav main"
                  "nav footer"
                  `}
              gridTemplateRows={'8vh 1fr 2vw'}
              gridTemplateColumns={'15vh 1fr'}
              h='auto'
              gap='1'
              color='blackAlpha.700'
              fontWeight='bold'
            >
              <GridItem
                borderBottom={'2px'}
                borderColor='rgba(113 119 144 / 25%)'
                area={'header'}
              >
                <TodoInput></TodoInput>
              </GridItem>

              <GridItem
                //category section
                borderRight={'1px'}
                borderColor='rgba(113 119 144 / 25%)'
                bg=''
                area={'nav'}
              >
                <CategoryInput></CategoryInput>
                <CategoryRadio></CategoryRadio>
              </GridItem>

              <GridItem className='content-wrapper' area={'main'}>
                <Box>
                  <TodoItem></TodoItem>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </ChakraProvider>
    </TodoProvider>
  );
}

export default App;
