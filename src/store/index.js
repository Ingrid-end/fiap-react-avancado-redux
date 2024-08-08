import { configureStore } from "@reduxjs/toolkit";

import transactionTypes from "../features/transactionTypes/transactionTypeSlice"

const store = configureStore({
    reducer: {
        transactionTypes
    }
})

export default store