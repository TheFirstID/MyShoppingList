import {Text, TouchableOpacity} from "react-native"
import { style } from "./Title.style"

export function Title({setSection}){
    return ( 
    <TouchableOpacity style={style.container_title} onPress={()=>setSection("all")}>
        <Text style={style.txt_title}>MyShoppingList</Text>
    </TouchableOpacity>
)}