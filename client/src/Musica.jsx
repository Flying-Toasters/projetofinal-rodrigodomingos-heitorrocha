import { useState } from "react";

function Musica({ nomeartista, nomemusica, genero, duracao }) {
    return (
        <li>
            <b>{nomeartista} - {nomemusica}</b> — {genero}, {duracao}
        </li>
    );
}

export default Musica;
