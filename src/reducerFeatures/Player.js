import { createSlice } from "@reduxjs/toolkit";
import { playersData } from "../FakeData";


export const playerSlice = createSlice(
    {
        name: "whatever",
        initialState: { value: playersData },
        reducers: {
            newPlayer: (state, action) => {
              state.value.push(action.payload);
              // console.log(action.payload)
            },
        
            removePlayer: (state, action) => {
              state.value = state.value.filter((player) => player.id !== action.payload.id);
            },
        }
    }
)

export const { newPlayer, removePlayer } = playerSlice.actions;
export default playerSlice.reducer; // playersReduzierer