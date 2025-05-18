import {Text, View, Image} from "react-native"
import { style } from "./ArticleCard.style"

// Importation des icons des cartes article 
import iconEmptyShoppingCard from "../../assets/Icons/caddieVide.png"

export function ArticleCard({articleName}){
    return (
        <View style={style.container_card}>
            <Text style={style.txt_article}>{articleName}</Text>
            <Image style={style.icon_card} source={iconEmptyShoppingCard}/>
        </View>
    )
}