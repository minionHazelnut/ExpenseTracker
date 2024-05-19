import { Text } from "react-native"
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../Store/Context"
import { DUMMY_EXPENSES } from "../Store/Context"

export default function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext)
    return (
        <ExpensesOutput expenses = {expensesCtx.expenses} periodName="Total" fallBackText="Click the + icon to get started!" />
            //  <ExpensesOutput expenses = {DUMMY_EXPENSES} periodName="Total"/>
    )
}