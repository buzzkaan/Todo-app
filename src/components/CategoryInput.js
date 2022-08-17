import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  Avatar,
  TagLabel,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

export const CategoryInput = () => {
  const {
    selectedCategory,
    categories,
    categoriesValue,
    setCategories,
    setCategoriesValue,
  } = useContext(TodoContext);

  return (
    <div>
      <Tag
        backgroundColor={'blackAlpha.300'}
        color='white'
        width={'7vw'}
        m={1}
        mt={2}
        mb={2}
        borderRadius='full'
      >
        <Avatar
          src='https://img.acunn.com/uploads/icerikler/2021/04/27/basliksiz-16288204066087c6553e489.jpg'
          size='md'
          m={1}
          ml={-1}
          mr={2}
        />
        <TagLabel>{selectedCategory}</TagLabel>
      </Tag>
      <InputGroup display={'flex'} pb={'4'}>
        <Input
          ml={'1'}
          mr={'1'}
          value={categoriesValue}
          color='white'
          type='text'
          id='form-input'
          onChange={e => setCategoriesValue(e.target.value)}
        />
        <InputRightElement>
          <Button
            mr={'2'}
            size={'sm'}
            bg={'rgba(208, 189, 189, 0.8)'}
            onClick={e => {
              e.preventDefault();

              if (categoriesValue.length > 0) {
                setCategories([...categories, categoriesValue]);
                setCategoriesValue('');
              } else {
                alert('Lütfen Bir Kategori Giriniz');
              }
            }}
          >
            +
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
