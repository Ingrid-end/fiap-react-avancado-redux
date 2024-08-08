import { configureStore } from "@reduxjs/toolkit";

import transactionTypes from "../features/transactionTypes/transactionTypeSlice"
import transactionsReducer from "../features/transactions/transactionSlice"

const store = configureStore({
    reducer: {
        transactionTypes,
        transactions: transactionsReducer
    }
})

export default store