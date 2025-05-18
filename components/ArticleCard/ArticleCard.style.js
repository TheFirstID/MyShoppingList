import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container_card:{
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff", 
        borderRadius: 10,
        padding: 15, 
        marginVertical: 5,
    }, 
    txt_article:{
        fontSize: 14, 
        fontWeight: "bold"
    }, 
    icon_card:{
        width: 30, 
        height: 30
    }
})