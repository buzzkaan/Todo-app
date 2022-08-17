import { Box, HStack, FormControl, RadioGroup, Radio } from '@chakra-ui/react';
import React from 'react';

export const TodoRadio = () => {
  return (
    <Box pb={'2'}>
      <HStack
        pl={5}
        height={'7vh'}
        width={'32.2vw'}
        borderBottom={'1px'}
        borderColor='rgba(113 119 144 / 25%)'
      >
        <FormControl as='fieldset'>
          <RadioGroup defaultValue='Itachi'>
            <HStack>
              <Radio value='Sasuke'>All</Radio>
              <Radio value='Nagato'>Active</Radio>
              <Radio value='Itachi'>Completed</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </HStack>
    </Box>
  );
};
