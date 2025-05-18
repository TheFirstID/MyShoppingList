import { Text, View, ScrollView } from "react-native";
import { style } from "./app.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importation des composants
import { Title } from "./components/Title/Title";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { Footer } from "./components/Footer/Footer";

// ** Helper à supprimer
import { articles } from "./Helper/article";
console.log(articles);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#FFD700" }}
      >
        <Title />
        <View style={style.container_body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {articles.map((article, index) => {
              return <ArticleCard key={index} articleName={article.name} />;
            })}
          </ScrollView>
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
