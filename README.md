API:

Item de exemplo:
{ "id": 1, "nomeartista": "", "nomemusica": "", "genero": "", "duracao": }

Rotas: 
GET /api/musica recebe nada, responde 200 e um array com todas as músicas
POST /api/musica recebe o nome do artista, o nome da música, o género e a duração e responde 201 com a música criada e o seu id
DELETE /api/musica/:id recebe o id especificado, responde 200 e mostra ao utilizador o item com o id especificado apagado