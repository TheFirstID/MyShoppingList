import { View, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./app.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// Importation des composants
import { Title } from "./components/Title/Title";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  const [articles, setArticles] = useState([
    {
        name: "Pain", 
        checked: false
    },
    {
        name: "Confiture", 
        checked: false
    },
    {
        name: "Dentifrice", 
        checked: false
    },
    {
        name: "Nutella", 
        checked: false
    },
    {
        name: "Viande", 
        checked: false
    },
    {
        name: "Fromage", 
        checked: false
    },
    {
        name: "Salade", 
        checked: false
    },
  ])
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#FFD700" }}
      >
        <Title />
        <View style={style.container_body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {articles.map((article, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>console.log(article.name)}>
                  <ArticleCard articleName={article.name} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
