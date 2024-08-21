import { View, StyleSheet, Text, Alert } from "react-native"
import { useState } from "react";
import Input from "./Input"
import Button from "../../Constants/Button";
import getFormattedDate from "../../Constants/Date";

export default function ExpenseForm({submitLabel, onCancel, onSubmit, defaultValues}){
    const [inputValues, setInputValues] = useState({

        amount : {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid : defaultValues ? true : false},
        date : {
             value: defaultValues ? getFormattedDate(defaultValues.date) : '',
             isValid: !!defaultValues},
        description: {value: defaultValues ? defaultValues.description : '',
                        isValid: !!defaultValues},
})

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier] : enteredValue,
                description: inputValues.description
            }
        })
    }

    function submitHandler(){
        const expenseData = {  
            amount : +inputValues.amount, //the + converts it into a number
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() === 'Invalid Date'
        const descriptonIsValid = expenseData.description.length > 0 //trim removes the extra whitespace and keeps only letters.

        if (!amountIsValid || !dateIsValid || !descriptonIsValid){
            Alert.alert('Invalid Input', 'Please enter valid inputs only')
            return;
        }

        onSubmit(expenseData)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Add your expense</Text>
            <View style={styles.inputsRow} >
                <Input style={styles.rowInput} label="Amount" textInputConfig={{
                    keyboardType : 'decimal-pad',
                    onChangeText : inputChangedHandler.bind(this, 'amount'),
                    value : inputValues.amount,
                }} />
                <Input style={styles.rowInput} label="Date" textInputConfig={{
                    placeholder : 'YYYY-MM-DD',
                    maxLength : 10,
                    onChangeText : inputChangedHandler.bind(this, 'date'),
                    value : inputValues.date,
                }}/>
            </View>
            <Input label="Description" textInputConfig={{
                   multiline : true,
                   autoCorrect: false,
                   onChangeText : inputChangedHandler.bind(this, 'description'),
                    value : inputValues.description,
            }} />
            <View style = {styles.buttons}>
                <Button style = {styles.button} mode ="flat" onPressProp={onCancel}>Cancel</Button>
                <Button style = {styles.button}  onPressProp={submitHandler}>  {submitLabel}
                </Button>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    form:{
        marginTop: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    rowInput:{
        flex: 1
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

})