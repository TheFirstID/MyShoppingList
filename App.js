import { View, ScrollView, Text } from "react-native";
import { style } from "./app.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// Importation des composants
import { Title } from "./components/Title/Title";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { Footer } from "./components/Footer/Footer";

// Importation des services 
import { deleteArticle } from "./services/Alerts";
import { numberOfItemsToFind } from "./services/Helper";

export default function App() {
  const [section, setSection] = useState("notfound");
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

  function filterArticles() {
    switch (section) {
      case "all":
        return articles;
      case "find":
        return articles.filter((ar) => ar.checked);
      case "notfound":
        return articles.filter((ar) => !ar.checked);
    }
  }

  function articlesList() {
    return filterArticles().map((article) => (
      <ArticleCard key={article.id} article={article} onPress={changeStatus}  onLongPress={()=>deleteArticle(articles, setArticles, article)} />
    ));
  }

  function changeStatus(article) {
    const updateArticle = {
      ...article,
      checked: !article.checked,
    };

    const indexArticle = articles.findIndex(
      (article) => article.id === updateArticle.id
    );
    const newArticlesList = [...articles];
    newArticlesList[indexArticle] = updateArticle;
    setArticles(newArticlesList);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#FFD700" }}
      >
        <Title setSection={setSection} numberOfItemsToFind={numberOfItemsToFind(articles)}/>
        <View style={style.container_body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {articlesList(articles)}
          </ScrollView>
        </View>
        <Footer setSection={setSection} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
