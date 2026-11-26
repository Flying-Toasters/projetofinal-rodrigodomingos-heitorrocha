import { useState, useEffect } from "react";
import Musica from "./Musica.jsx";


function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [musicas, setMusicas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/musica")
      .then((res) => {
        if (!res.ok) throw new Error(`Erro HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setMusicas(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <main>
      <h1>Coleção de Músicas</h1>

      <p>
        Tenho {musicas.length} músicas
      </p>

      <ul>
        {musicas.map((musica) => (
          <Musica key={musica.nomemusica} {...musica} />
        ))}
      </ul>
    </main>
  )
}

export default App
