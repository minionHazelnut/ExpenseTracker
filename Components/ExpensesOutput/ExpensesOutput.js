import { View, Text , StyleSheet} from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../Constants/Styles"



export default function ExpensesOutput({ expenses, periodName }){
    return (
       <View style={styles.container} >
        <ExpensesSummary expenses={expenses} periodName={periodName} />
        <ExpensesList expenses={expenses}  />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,

    },
})