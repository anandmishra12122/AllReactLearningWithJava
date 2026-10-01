import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value :0,
}

const counterSlice = createSlice({
    name:"studentCounter",
    initialState,
    reducers:{
        increment:(state)=>{
            if(state.value > 20)
            {
                state.value =0;
            }
            else
            {
                state.value +=1;
            }
        }
        ,
        decrement:(state) =>{
            state.value -=1;
        },
    },
})

export const {increment , decrement} = counterSlice.actions;
export default counterSlice.reducer;

