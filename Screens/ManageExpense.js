import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native"
import IconButton   from '../Constants/IconButton'
import { GlobalStyles } from "../Constants/Styles";
import Button from "../Constants/Button";
import { ExpensesContext } from "../Store/Context";

export default function ManageExpense({ route, navigation }){
    const expensesCtx = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId
    // this checks if params is there? then retrieve the id. if not? then return falsy.
    const isEditing = !!editedExpenseId;
    // the above is a js standard way of converting a value into a boolean. it converts truthy to true and falsy to false.

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

    function confirmHandler(){
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId, 
                { description: 'Test!!!!', 
                  amount: '275', 
                  date : new Date("2024-09-19")}
            )
        } else {
            expensesCtx.addExpense({ 
                description: 'Test', 
                amount: '399', 
                date : new Date("2024-03-19")})
        } 
        navigation.goBack()
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <Button style = {styles.button} mode ="flat" onPressProp={cancelHandler}>Cancel</Button>
                <Button style = {styles.button}  onPressProp={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttons:{
        flexDirection :'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    },

    deleteContainer : {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
})