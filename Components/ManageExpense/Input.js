import { TextInput,Text, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../Constants/Styles'

export default function Input({ label, style, textInputConfig }){

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputmultiline)
    }

    return (
         <View style={[styles.inputcontainer, style]} >
        <Text style={styles.label} >{label}</Text>
        <TextInput {...textInputConfig} style={inputStyles} />
    </View>
    )
   
}

const styles = StyleSheet.create({
    inputcontainer:{
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label:{
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputmultiline:{
        minHeight: 100,
        textAlignVertical: 'top' //to get same result on both platforms this is used
    },
})