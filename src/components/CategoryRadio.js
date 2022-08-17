import {
  VStack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Radio,
  RadioGroup,
  HStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';

import React from 'react';
import TodoContext from '../context/TodoContext';

const CategoryRadio = () => {
  const { categories, setSelectedCategory, selectedCategory } = useContext(
    TodoContext
  );

  return (
    <Tabs
      onChange={index => setSelectedCategory(categories[index])}
      alignItems={'center'}
      height={'50vh'}
      variant='unstyled'
      overflowY={'auto'}
      sx={{
        '&::-webkit-scrollbar': {
          width: '5px',
          borderRadius: '8px',
          backgroundColor: `#9B878C`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `blackAlpha.500`,
          borderRadius: '16px',
        },
      }}
    >
      {categories.map((categories, index) => (
        <TabList justifyContent={'center'}>
          <Tab
            value={selectedCategory}
            key={index}
            width={'6vw'}
            borderRadius={'6'}
            bg={'rgba(208, 189, 189, 0.6)'}
            color={'white'}
            mb={'5'}
            height={'5vh'}
            _selected={{ color: 'white', bg: '#332934' }}
          >
            {categories}
          </Tab>
        </TabList>
      ))}
    </Tabs>
  );
};

export default CategoryRadio;

/* {categories.map((category, index) => (
    <Stack gap={''} display={'flex'} alignItems={'center'} pt={'3'}>
      <Box
        onChange={e => {
          setSelectedCategory(e.target.value);
        }}
        as='button'
        key={index}
        className='content-wrapper'
        borderRadius={'0.5rem'}
        width={'7vw'}
        h={'5vh'}
      >
        <Text>{category}</Text>
      </Box>
    </Stack>
  ))} */

{
  /*  */
}
