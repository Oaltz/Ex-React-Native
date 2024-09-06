import Produto from "@/app/Models/Produto";
import Style from "@/app/Styles/Default";
import React from "react";
import { Button, Image, Text, View } from "react-native";
import { ExclusiveGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition";

interface PropProd{
    produto:Produto,
}

const ItemProduto: React.FC<PropProd> = ({produto})=>{

    console.log(produto)
    function Excluir(id: number) {
        throw new Error("Function not implemented.");
    }

return(
    <View style = {Style.card}>
        <Text style ={Style.cardText}>{produto.nome}</Text>
        <Text style = {Style.cardText}>{produto.preco}</Text>
        <Image source={{uri:produto.foto} } style={Style.image} ></Image>
        <Button title="Excluir"
            onPress={()=>{Excluir(produto.id)}}/>
    </View>
)

}

export default  ItemProduto;