import { createSlice } from '@reduxjs/toolkit'



export const Homeslice = createSlice({
  name: 'home',
  initialState:{
    url:{},//which type of cinema like movie or tv show or webseries
    genres:{}// like u chose movie show genres is which tyoe of movie like comedy,action,thriller 
  },
  reducers: {
   getApiConfiguration:(state,actions)=>{
state.url=actions.payload
   },
   getGenres:(state,actions)=>{
    state.genres=actions.payload
   }
  },
})


export const {getApiConfiguration,getGenres} = Homeslice.actions

export default Homeslice.reducer