import { Alert } from "react-native";

function deleteArticle(articles, setArticles, currentArticle) {
  Alert.alert(
    "Supprimer cet Article ?",
    `Vous êtes sur le point de supprimer "${currentArticle.name}" de votre liste d'article, êtes-vous sûr ?`,
    [
      {
        text: "Annuler",
        onPress: () => console.log("Annulé"),
      },
      {
        text: "Supprimer", 
        onPress: ()=> {
            // Retourne une liste d'article dont l'id est différent de celui à supprimer.
            setArticles(articles.filter((articlesInList) => articlesInList.id !== currentArticle.id))
        },
        style: "destructive"
      },
    ]
  );
}

export { deleteArticle };
