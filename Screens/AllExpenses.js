import { Text } from "react-native"
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../Store/Context"
import { DummyExpenses } from "../Store/Context"

export default function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext)
    return (
     /*   <ExpensesOutput expenses = {expensesCtx.expenses} periodName="Total"/>*/
             <ExpensesOutput expenses = {DummyExpenses} periodName="Total"/>
    )
}