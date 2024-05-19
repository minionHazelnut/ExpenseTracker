import { Children, createContext, useReducer } from "react";

export const DUMMY_EXPENSES = [{
    id : 1,
    description : 'Shoes',
    amount : 300,
    date: new Date('2022-02-19'),
},
{
    id : 2,
    description : 'Game',
    amount : 500,
    date: new Date('2021-01-15'),
},
{
    id : 3,
    description : 'Pani Puri',
    amount : 30,
    date: new Date('2024-03-19'),
},
{
    id : 4,
    description : 'Mobile Stand',
    amount : 250,
    date: new Date('2023-09-01'),
},
{
    id : 5,
    description : 'Pants',
    amount : 800,
    date: new Date('2022-12-12'),
}
]


export const  ExpensesContext = createContext({
    expenses : [],
    addExpense : ({ description, amount, date }) => {},
    deleteExpense : (id) => {},
    updateExpense : ( id , { description, amount, date } ) => {},

});


function expensesReducer(state, action){
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString + Math.random().toString
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const UpdatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const UpdatableExpense = state[UpdatableExpenseIndex]
            const UpdatedItem = { ... UpdatableExpense, ...action.payload.data }
            const UpdatedExpenses  = [...state]
            UpdatedExpenses[UpdatableExpenseIndex] = UpdatedItem
            return UpdatedExpenses
        case 'DELETE':
            console.log(action.payload)
            return state.filter((expense) =>  expense.id !== action.payload)
            default: 
            return state;   

}
}


export default function ExpensesContextProvider({children}){
    const [expensesState, Dispatch]= useReducer(expensesReducer, DUMMY_EXPENSES)

    function addExpense(expenseData){
    Dispatch({ type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id){
       Dispatch({ type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData){
        Dispatch({ type: 'UPDATE', payload: {id: id, data : expenseData} })
    }

    value ={
         expenses: expensesState,
         addExpense: addExpense,
         deleteExpense: deleteExpense,
         updateExpense: updateExpense,
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}