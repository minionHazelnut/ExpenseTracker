import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native"
import IconButton   from '../Constants/IconButton'
import { GlobalStyles } from "../Constants/Styles";
import Button from "../Constants/Button";
import { ExpensesContext } from "../Store/Context";
import ExpenseForm from "../Components/ManageExpense/ExpenseForm";

export default function ManageExpense({ route, navigation }){
    const expensesCtx = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId
    // this checks if params is there? then retrieve the id. if not? then return falsy.
    const isEditing = !!editedExpenseId;
    // the above is a js standard way of converting a value into a boolean. it converts truthy to true and falsy to false.

    const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId)

    useLayoutEffect(() => {
         navigation.setOptions({
         title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
    }, [ navigation, isEditing ])
    // setoptions cannot be directly used inside a fn. it must be wrapped in either useeffect or uselayouteffect

   
    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack()
    }
    function cancelHandler(){
        navigation.goBack()
    }

    function confirmHandler(expenseData){
        if (isEditing) {
            expensesCtx.updateExpense( editedExpenseId, expenseData )
        } else {
            expensesCtx.addExpense(expenseData)
        } 
        navigation.goBack()
    }

    return (
        <View style = {styles.container}>
            <ExpenseForm submitLabel={isEditing ? 'Update' : 'Add'} 
                         onCancel={cancelHandler}
                         onSubmit={confirmHandler}
                         defaultValues={selectedExpense}
                    
                         />
            
            <View style = {styles.deleteContainer}>
            {isEditing && (
                <IconButton icon='trash' color='red' size={36} onPressProp= {deleteExpenseHandler}/>
            )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 24,
        backgroundColor : GlobalStyles.colors.primary800
    },
   
    deleteContainer : {
        marginTop: 16,
        paddingTop: 8,
        alignItems: 'center',
    },
})