import { View, Text, FlatList } from "react-native"
import ExpenseItem from "./ExpenseItem"

function RenderExpenseItem( itemData ){
    return (
        <ExpenseItem {...itemData.item}/>
    )
}

export default function ExpensesList({ expenses }){

    return (
        <FlatList data={expenses} 
                  renderItem={RenderExpenseItem} 
                  keyExtractor={(item) => item.id} />
    )
}