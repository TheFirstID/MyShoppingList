import {Text, View} from "react-native"
import { style } from "./Title.style"

export function Title(){
    return ( 
    <View style={style.container_title}>
        <Text style={style.txt_title}>MyShoppingList</Text>
    </View>
)}