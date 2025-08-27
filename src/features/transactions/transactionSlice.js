import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions: []
}


const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers:{
            addTransactions: (state, action) => {
                // garantir que o valor seja positivo
                let value = Math.abs(action.payload.value);

                if (action.payload.type != 'Depósito') {
                    value = -value;
                }

                state.transactions.push(
                    // payload tudo que vai ser enviado nessa ação
                    { ...action.payload,
                        value,
                        id: state.transactions.length + 1,
                        date: new Date().toISOString()
                     })
            }
    }
})
            // estado           o que vamos mudar                
export const selectTransactions = createSelector(state => state.transactions.transactions, (transactions)=>{
    return transactions.map(t => {
        return{
            ...t,
            date: new Date(t.date)
        }
    })
})

export const selectCurrentBalance = createSelector(
    selectTransactions,
                              // reduce: acumula os valores
    transactions => transactions.reduce((balance, t) => balance + t.value, 0)
                                        //  balance: total acumulado 
                                        // t: transaction
                                        // 0: valor inicial
)


// facilitar o acesso dessa função no component
export const { addTransactions } = transactionSlice.actions;

export default transactionSlice.reducer