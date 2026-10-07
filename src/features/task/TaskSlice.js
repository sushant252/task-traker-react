import{ createSlice, nanoid } from "@reduxjs/toolkit";
const taskSlice = createSlice({
    name :'task',
    initialState: {
        item: []
    },
    reducers: {
        addTask: (state, action) => {
            let data = {
                id: nanoid(),
                content:action.payload,
                completed: false
            }
            StyleSheet.items.push(data)
        },
        deleteTask:{},
        completeTask:{},
        toggleTask:{}
    }
})
export default taskSlice.reducer