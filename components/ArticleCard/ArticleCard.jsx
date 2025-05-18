import {Text, View} from "react-native"
import { style } from "./ArticleCard.style"

export function ArticleCard({articleName}){
    return (
        <View style={style.container_card}>
            <Text>{articleName}</Text>
            <Text>Image</Text>
        </View>
    )
}