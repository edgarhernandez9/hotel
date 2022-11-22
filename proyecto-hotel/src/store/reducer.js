
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataLandig = createAsyncThunk('obtenerLandigs', async () => {
    const response = await fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
        .then((res) => res.json())
        .then((data) => data);
    return response;
})

export const crearLandig = createSlice(({
    name: 'landig',
    initialState: {
        datos: null,
        isLoading: true,
        english: false
    },
    reducers:{
        cambioIdioma: (state, action) => {
            state.english = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataLandig.fulfilled, (state, action) => {
            state.isLoading = false;
            state.datos = action.payload;
        })
    }
}))


export const { cambioIdioma } = crearLandig.actions;

export default crearLandig;