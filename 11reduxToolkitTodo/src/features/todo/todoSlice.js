import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hellow world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //state already has todos array, so we can push new todo to it
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload //destructuring the payload to get id and text
            const existingTodo = state.todos.find((todo) => todo.id === id) //find the todo object which has the same id as the payload and store it in existingTodo variable so existingTodo holds like existingTodo = {id: 1, text: "Hellow world"} and then we can update the text of that todo object
            if (existingTodo) {
                existingTodo.text = text 
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer