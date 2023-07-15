import './App.css'
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rota from './componentes/Rota';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [rotas, setRotas] = useState([
    {
      id: uuidv4(),
      nome: 'Top',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Jungle',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Mid',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Adcarry',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Support',
      cor: '#FAE9F5'
    }
  ])

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id))
  }

  function mudarCorDaRota(cor, id) {
    setRotas(rotas.map(rota => {
      if(rota.id === id) {
        rota.cor = cor
      }
      return rota
    }))
  }

  function cadastrarGrupo(novoGrupo) {
    setRotas([...rotas, {...novoGrupo, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setJogadores(jogadores.map(jogador => {
      if(jogador.id === id) jogador.favorito = !jogador.favorito
      return jogador
    })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarGrupo={cadastrarGrupo} 
        rotas={rotas.map(rota => rota.nome)} 
        aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}
      />
      <div className='title-rotas'><h2>Minha organização</h2></div>
      {rotas.map(rota => 
        <Rota
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDaRota}
          key={rota.nome} 
          nome={rota.nome}
          cor={rota.cor} 
          id={rota.id}
          jogadores={jogadores.filter(jogador => jogador.rota === rota.nome)}
          aoDeletar={deletarJogador} 
      />)}
      <Rodape />
    </div>
  );
}


export default App;
