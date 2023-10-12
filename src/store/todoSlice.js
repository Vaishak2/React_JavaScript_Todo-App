import { createSlice } from "@reduxjs/toolkit";
// import { getValue } from "@testing-library/user-event/dist/utils";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, title: "My first state", completed: false },
        // { id: 2, title: "My second state", completed: false },
        // { id: 3, title: "My third state", completed: false },
        // { id: 4, title: "My fourth state", completed: false },
        // { id: 5, title: "My fifth state", completed: false },
    ],
    reducers:{
        addTodo: (state,action)=>{
            var todo = {
                title: action.payload,
                completed: false
            }
            var lastTodo = state[state.length-1];
            if(lastTodo){
                todo.id=lastTodo.id+1
            }else{
                todo.id=1
            }
            state.push(todo);
            console.log(todo)
        },
        toggleCompletion: (state,action)=>{
            var index = state.findIndex((todo)=>todo.id===action.payload)
            if(index!== -1){
                state[index].completed=!state[index].completed;
            }
        },
        deleteTodo: (state,action)=>{
            var index = state.findIndex((todo)=>todo.id===action.payload)
            if(index!== -1){
                state.splice(index,1)
            }
        },
        // editTodo: (state,action)=>{
        //     var index = state.findIndex((todo)=>todo.id===action.payload)
        //     var task = state.todo.title
        //     // var form = FormData(this.state)
        //     if(index!== -1){
                
        //         console.log(task)
        //         // state.push(todo)
        //     }
        // }
    }
});

export default todoSlice.reducer
export const {addTodo, toggleCompletion, deleteTodo, editTodo}=todoSlice.actions;