import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [classificacao, setClassificacao] = useState([]);

  useEffect(() => {
    fetch('times.json')
      .then(resp => resp.json())
      .then(dados => {
        const classificacaoInicial  = dados.map(time => {
          return {nome: time.nome, sigla: time.sigla, pontos: 0, vitorias: 0, empates: 0,
             derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0};
        });
        setClassificacao(classificacaoInicial);
      })
      .catch(erro =>console.log(erro));    
  }, [])
  
  return (
    <div className="App">
      OLA
    </div>
    
  );
}

export default App;
