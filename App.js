import { View, ScrollView, Text } from "react-native";
import { style } from "./app.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Dialog from "react-native-dialog";

// Importation des composants
import { Title } from "./components/Title/Title";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { Footer } from "./components/Footer/Footer";

// Importation des services
import { deleteArticle } from "./services/Alerts";
import { numberOfItemsToFind } from "./services/Helper";

export default function App() {
  const [section, setSection] = useState("notfound");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [articles, setArticles] = useState([]);

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
      <ArticleCard
        key={article.id}
        article={article}
        onPress={changeStatus}
        onLongPress={() => deleteArticle(articles, setArticles, article)}
      />
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
        <Title
          setSection={setSection}
          numberOfItemsToFind={numberOfItemsToFind(articles)}
        />
        <View style={style.container_body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {articlesList(articles)}
          </ScrollView>
        </View>
        <Footer
          setSection={setSection}
          setIsDialogVisible={setIsDialogVisible}
        />

        {/* Boite de dialogue pour ajout des taches */}
        <Dialog.Container
          visible={isDialogVisible}
          onBackdropPress={() => {
            setIsDialogVisible(false);
          }}
        >
          <Dialog.Title>Ajouter un article.</Dialog.Title>
          <Dialog.Description>
            Remplissez le champ pour ajouter un article à votre liste.
          </Dialog.Description>
          <Dialog.Input />
          <Dialog.Button label="Ajouter" />
        </Dialog.Container>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
