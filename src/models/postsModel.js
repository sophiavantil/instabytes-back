import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados, localizada em um arquivo de configuração.

// Esta linha estabelece a conexão com o banco de dados. A string de conexão é obtida da variável de ambiente STRING_CONEXAO, que contém informações como o nome do banco de dados, usuário e senha.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
    // Seleciona o banco de dados 'imersao-instabytes' dentro da conexão estabelecida.
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção 'posts' dentro do banco de dados selecionado. As coleções são como tabelas em um banco de dados relacional.
    const colecao = db.collection("posts");
    // Busca todos os documentos (registros) da coleção 'posts' e retorna os resultados como um array.
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
     
     const db = conexao.db("imersao-instabytes");
     
     const colecao = db.collection("posts");

     return colecao.insertOne(novoPost);
  }

  export async function atualizarPost(id, novoPost) {
   const db = conexao.db("imersao-instabytes");
   const colecao = db.collection("posts");
   const objID = ObjectId.createFromHexString(id);
   return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}