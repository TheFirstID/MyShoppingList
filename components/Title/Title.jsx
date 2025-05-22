import {Text, TouchableOpacity} from "react-native"
import { style } from "./Title.style"

export function Title({setSection, numberOfItemsToFind}){
    return ( 
    <TouchableOpacity style={style.container_title} onPress={()=>setSection("all")}>
        <Text style={style.txt_title}>MyShoppingList</Text>
         <Text>Vous avez encore {numberOfItemsToFind} articles à trouver</Text>
    </TouchableOpacity>
)}