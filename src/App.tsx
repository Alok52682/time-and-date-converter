import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Stack spacing={4} direction='row' align='center'>
        <Button colorScheme='teal' size='xs'>
          Button
        </Button>
        <Button colorScheme='teal' size='sm'>
          Button
        </Button>
        <Button colorScheme='teal' size='md'>
          Button
        </Button>
        <Button colorScheme='teal' size='lg'>
          Button
        </Button>
      </Stack>
    </div>
  );
}

export default App;
