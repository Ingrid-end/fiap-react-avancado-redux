import { configureStore} from '@reduxjs/toolkit';
import transactionsTypes from '../features/transactionsTypesSlice';
import transactionsReducer  from '../features/transactions/transactionSlice';
// Configuração global
const store = configureStore({
// cada porção das nossas funcionalidades
reducer:{
// fatia/slice/features
    transactionsTypes,
    // pode fazer assim tambem - para ser mais claro a nomeclatura
    transactions : transactionsReducer
}
})

export default store;