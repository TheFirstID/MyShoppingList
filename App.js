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
      id: 1,
      name: "Pain",
      checked: false,
    },
    {
      id: 2,
      name: "Confiture",
      checked: false,
    },
    {
      id: 3,
      name: "Dentifrice",
      checked: false,
    },
    {
      id: 4,
      name: "Nutella",
      checked: true,
    },
    {
      id: 5,
      name: "Viande",
      checked: false,
    },
    {
      id: 6,
      name: "Fromage",
      checked: false,
    },
    {
      id: 7,
      name: "Salade",
      checked: true,
    },
  ]);

function articlesList(articles) {
  return articles.map((article) => (
      <ArticleCard key={article.id} article={article} onPress={changeStatus} />
  ));
}

function changeStatus(article){
  // Création d'un nouvel objet mis a jour 
  const updateArticle = {
    ...article, 
    checked: !article.checked
  }

 const indexArticle = articles.findIndex((article)=> article.id === updateArticle.id)
 const newArticlesList = [...articles]
 newArticlesList[indexArticle] = updateArticle
 setArticles(newArticlesList)
}
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#FFD700" }}
      >
        <Title />
        <View style={style.container_body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {articlesList(articles)}
          </ScrollView>
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
