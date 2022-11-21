const express = require("express")
const app = express()
const PORT = process.env.PORT || 5003;

/*
GET - PEGA DADOS
POST - INSERE DADOS
PUT - ATUALIZA
DELETE - DELETA
*/

app.use(express.jason());

app.get('/', (req, res) =>{
    return res.send({msg: "Você está na rota raiz." }) 
});

app.get("/user", (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        return res.send({id: id, msg: "Usuário existe."});
    }

    return res.send("Usuario não existe.");
});

//localhost:5003/user/

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));