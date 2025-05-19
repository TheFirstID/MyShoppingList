import { style } from "./Footer.style";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Importation des icons du Footer
import iconAddArticle from "../../assets/Icons/addArticle.png";

export function Footer({setSection}) {
  return (
    <View style={style.container_footer}>
      <TouchableOpacity onPress={()=>setSection("notfound")}>
        <Text>A trouver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn_add_container}>
        <Image source={iconAddArticle} style={style.img_footer} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSection("find")}>
        <Text>Trouvés</Text>
      </TouchableOpacity>
    </View>
  );
}
