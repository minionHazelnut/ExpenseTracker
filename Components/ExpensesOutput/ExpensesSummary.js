import { View, Text,StyleSheet } from "react-native"
import { GlobalStyles } from "../../Constants/Styles"


export default function ExpensesSummary({ periodName, expenses }){
    const expenseSum = expenses.reduce((sum, expense) => {
     //console.log(Number(expense.amount), sum, sum + Number(expense.amount))
        return sum + Number(expense.amount)
    } , 0)

    return (
        <View style={styles.container}>
        <Text style={styles.periodStyle} >{periodName}</Text>
        <Text style={styles.sum}>{expenseSum}</Text>
        {/* toFixed is a js method that limits the max number of decimal places allowerd to be shown, here 2 */}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginBottom: 16,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems  :'center',

    },
    periodStyle:{
        fontSize: 12,
        color: GlobalStyles.colors.primary400,

    },
    sum:{
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
})