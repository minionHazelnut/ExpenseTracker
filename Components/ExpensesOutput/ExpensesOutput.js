import { View, Text , StyleSheet} from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../Constants/Styles"



export default function ExpensesOutput({ expenses, periodName, fallBackText }){
    let content = <Text style={styles.fallBackText}>{fallBackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}  />

    }

    return (
       <View style={styles.container} >
        <ExpensesSummary expenses={expenses} periodName={periodName} />
        {content}
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,

    },
    fallBackText:{
        color: 'white',
        opacity: 0.8,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 250,
    },
})