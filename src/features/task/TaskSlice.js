import{ createSlice, nanoid } from "@reduxjs/toolkit";
const taskSlice = createSlice({
    name :'task',
    initialState: {
        items: []
    },
    reducers: {
        // reducers is collection of functions 
        addTask: (state, action) => {
            let data = {
                id: nanoid(),
                content:action.payload,
                completed: false
            }
            state.items.push(data)
        },
        deleteTask:{},
        completeTask:(state, action) => {
            let item = state.items.find((item) => item.id === action.payload)
            if(item) {
                item.completed = true
            }
        },
        undoTask: (state, action) => {
            let item = state.items.find((item) => item.id === action.payload)
            if(item) {
                item.completed = false
            }
        },
        toggleTask:{},

    }
})
export const {addTask, deleteTask, toggleTask, completeTask } = taskSlice.actions
export default taskSlice.reducer