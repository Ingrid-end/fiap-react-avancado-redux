import {createSlice } from '@reduxjs/toolkit';


const initialState = {
    types: [
    'Depósito',
    'Saque',
    'Transferência'
    ]
}
// Slice é da funcionalidade ( não é global) - retorna o slice por isso é uma const
const transactionTypesSlice = createSlice({
    // nome da fatia
  name: 'transactionTypes',
   // estado incial 
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    },
    removeTransaction: (state, action) => {
      return state.filter(transaction => transaction.id !== action.payload.id);
    }
  }
});

// 
export default transactionTypesSlice.reducer;