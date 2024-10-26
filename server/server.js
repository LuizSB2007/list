import express from "express";

 import { db } from "./db/dbConfig.js";

const app = express();
const dirname = "C:/Users/luizb/Desktop/Lista-Tiozin/public/";

app.use(express.static("public"), express.json());

app.get("/", (req, res) => res.sendFile(dirname + "index.html"));


db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

app.listen(3000, console.log(`Server rodando na porta 3000`));
