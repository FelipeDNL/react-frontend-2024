import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pedidosProdutosMesa: [],
    pedidosProdutosMesaSelecionados: []
}

const pedidosMesaSlice = createSlice({
    name: "mesas",
    initialState,
    reducers: {
        setPedidosProdutosMesa: (state, action) => {
            state.pedidosProdutosMesa = action.payload
        },
        setPedidosProdutosMesaSelecionados: (state, action) => {
            state.pedidosProdutosMesaSelecionados = action.payload
        }
    }
});

// Exporta as actions para ser usadas nos componentes
export const { setPedidosProdutosMesa, setPedidosProdutosMesaSelecionados } = pedidosMesaSlice.actions;
// Exporta os reducers para serem enviados para o rootReducer
export default pedidosMesaSlice.reducer;