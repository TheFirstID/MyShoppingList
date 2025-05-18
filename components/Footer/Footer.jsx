import { style } from "./Footer.style";
import { View, Text, Image } from "react-native";

// Importation des icons du Footer
import iconAddArticle from "../../assets/Icons/addArticle.png"

export function Footer() {
  return (
    <View style={style.container_footer}>
      <Text>A trouver</Text>
      <Image source={iconAddArticle} style={{width: 50, height: 50}}/>
      <Text>Trouvés</Text>
    </View>
  );
}
