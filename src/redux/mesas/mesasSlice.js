import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mesas: [],
    mesaSelecionada: -1,
    mesaInativaSelecionada: -1
}

const mesasSlice = createSlice({
    name: "mesas",
    initialState,
    reducers: {
        setMesas: (state, action) => {
            state.mesas = action.payload
        },
        setMesaSelecionada: (state, action) => {
            state.mesaSelecionada = action.payload
        },
        setMesaInativaSelecionada: (state, action) => {
            state.mesaInativaSelecionada = action.payload
        }
    }
});

// Exporta as actions para ser usadas nos componentes
export const { setMesas, setMesaSelecionada, setMesaInativaSelecionada } = mesasSlice.actions;
// Exporta os reducers para serem enviados para o rootReducer
export default mesasSlice.reducer;