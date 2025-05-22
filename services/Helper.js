export const numberOfItemsToFind = (articles)=>{
    return articles.filter((articlesNotFound) => articlesNotFound.checked === false ).length
}