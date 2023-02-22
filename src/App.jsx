import React from 'react';
import {
  ChakraProvider,
  theme,
  Heading,
  VStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
import { useState, useEffect } from 'react'

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ];

  const [todos, settodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  function deleteTodo(id) {
    const newTodos = todos.filter(todos => {
      return todos.id !== id
    })
    settodos(newTodos)
  }

  function addTodo(todo) {
    settodos([...todos, todo]);
  }


  return (
    <ChakraProvider theme={theme}>
      <VStack p={4}>
        <ColorModeSwitcher />
        <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip="text">Todo Application</Heading>
        <Todo todos={todos} deletetodo={deleteTodo} />
        <AddTodo addtodo={addTodo} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
