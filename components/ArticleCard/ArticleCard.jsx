import {Text, Image, TouchableOpacity} from "react-native"
import { style } from "./ArticleCard.style"

// Importation des icons des cartes article 
import iconEmptyShoppingCart from "../../assets/Icons/caddieVide.png"
import iconFullShoppingCart from "../../assets/Icons/caddieRempli.png"

export function ArticleCard({article, onPress, onLongPress}){
    return (
        <TouchableOpacity onPress={()=>onPress(article)} onLongPress={()=>onLongPress(article)} style={style.container_card}>
            <Text style={style.txt_article}>{article.name}</Text>
            {article.checked === false ? <Image style={style.icon_card} source={iconEmptyShoppingCart}/> : <Image style={style.icon_card} source={iconFullShoppingCart}/>}
        </TouchableOpacity>
    )
}