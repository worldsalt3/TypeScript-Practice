import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo { 
    id: number
    title: string
    completed: boolean
}

axios.get(url).then(response => {
    const data = response.data as  Todo
    const {id, title, completed} = data
   logTodo(id, completed, title)
})

const logTodo = (id: number, completed: boolean, title: string) => {
     console.log(
       `The ID is ${id} with a Title of ${title} and is it completed? ${completed} `
     )
}