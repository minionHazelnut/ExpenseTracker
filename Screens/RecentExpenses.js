import { Text } from "react-native"
import ExpensesOutput from "../Components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../Store/Context"
import { useContext } from "react"
import { getDateMinusDays } from '../Constants/Date'
import { DummyExpenses } from "../Store/Context"

export default function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext)
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
  //  const recentExpenses = DummyExpenses.filter((expense) => {    
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today, 7)
        return expense.date > date7daysAgo
});
    return (
        <ExpensesOutput expenses ={recentExpenses} periodName='Last 7 days'/>
    )
}