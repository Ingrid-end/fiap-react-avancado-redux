import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [
        'Depósito',
        'Saque',
        'Transferência'
    ]
}

const transactionTypeSlices = createSlice({
    name: 'transactionTypes',
    initialState
})

export default transactionTypeSlices.reducer