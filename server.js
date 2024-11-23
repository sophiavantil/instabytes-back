import express from "express"; // Importa o framework Express, que será utilizado para criar o servidor web.
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express, que será o núcleo do servidor web.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que o servidor está ouvindo por requisições.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
