
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import Produto from "@/app/Models/Produto";

const CadastroProduto = () => {
    let [nome, setNome] = useState('');
    let [descricao, setDescricao] = useState('');
    let [preco, setPreco] = useState(0);

    return(
        <view>
          <text>Nome:</text>
          <TextInput onChangeText={setNome} value= {nome} />
          <text>Descrição:</text>
          <TextInput onChangeText={setDescricao} value= {descricao} />
          <text>Preço:</text>
          <TextInput onChangeText={(v)=> 
                            {setPreco(
                                isNaN(parseFloat(v))? 0: parseFloat(v));} }
          inputMode="numeric" value={preco.toString()}></TextInput>
          </view>

    )

    function Cadastrar(){
        let produto: Produto = {
          nome: nome,
          descricao: descricao,
          preco: preco,
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api, produto)
      }
    
}
 export default CadastroProduto;