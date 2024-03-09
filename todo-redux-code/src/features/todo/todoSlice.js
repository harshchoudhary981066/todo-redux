import {createSlice, nanoid } from '@reduxjs/toolkit'; //nanoid generates unique IDs for elements in array


const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    //There is a generalised way to initiate things to use redux, like the 'name' property has to be used as
    //specifically 'name', since it is defined as such in redux

    name: 'todo',
    initialState,
    reducers: {

        //These are the two properties provided by Redux. State allows access to all the data stored currently in
        //the state and action allows to perform action on them. These two function fall under syntax.

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            //filter always returns true values. So when a todo whose ID matches the ID sent in the payload, that
            //will get eliminated

            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

//It is mandatory to export the reducers this way, where you separately export reducer functions and filename.reducer
//to actually use these functions anywhere. IT IS THE SYNTAX.

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer