import { Alert } from "react-native";

function deleteArticle(article) {
  Alert.alert(
    "Supprimer cet Article ?",
    `Vous êtes sur le point de supprimer "${article.name}" de votre liste d'article, êtes-vous sûr ?`,
    [
      {
        text: "Annuler",
        onPress: () => console.log("Annulé"),
      },
      {
        text: "Supprimer", 
        onPress: ()=> console.log('Article supprimé'),
        style: "destructive"
      },
    ]
  );
}

export { deleteArticle };
