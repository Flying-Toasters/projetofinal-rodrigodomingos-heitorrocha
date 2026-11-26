const cors = require('cors');
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

let dadomusicas = [];

try{
    const conteudo = fs.readFileSync('musicas.json', 'utf-8');
    dadomusicas = JSON.parse(conteudo);
    console.log('Ficheiro lido com sucesso')
}
catch(erro)
{
    console.log('Erro ao ler o ficheiro JSON', erro.message);
}

function save(){
    try {
        fs.writeFileSync('musicas.json', JSON.stringify(dadomusicas, null, 2), 'utf-8');
        console.log('Dados guardados em jogos.json com sucesso!');
    } catch (erro) {
        console.log('Erro ao gravar no ficheiro:', erro.message);
    }
}

app.get('/api/musica', (req, res) =>{
    res.json(dadomusicas)
})
app.listen(PORT, () => {
    console.log(`servidor a rodar http://localhost:${PORT}`)
})