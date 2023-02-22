import { HStack, Button, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function AddTodo({addtodo}) {
  
    const toast = useToast()
  
    function handleSubmit(e) {
    e.preventDefault()
    if(!content) {
        toast({
            title: 'No Content',
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
        return
    }
    const todo = {
        id: nanoid(),
        body: content,
    };
    addtodo(todo);
    setcontent("")
  }

  const [content, setcontent] = useState("")
    return (
    <form onSubmit={handleSubmit}>
        <HStack mt='8'>
            <Input variant='filled' placeholder='Add Todo' value={content} onChange={ (e) => setcontent(e.target.value)}/>
            <Button colorScheme='pink' px='8' type='submit'>Add Todo</Button>
        </HStack>
    </form>
  )
}

export default AddTodo