import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import LolChampionsApi from '../LolChampionsApi'
import './Formulario.css'
import {IJogador} from '../../shared/interfaces/IJogador'
import {v4 as uuidv4} from 'uuid';


interface FormularioProps {
    aoJogadorCadastrado: (jogador: IJogador) => void
    rotas: string[]
    cadastrarGrupo: (lista: {}) => void
}

function Formulario({aoJogadorCadastrado, rotas, cadastrarGrupo} :FormularioProps) {

    const niveis = [
        'Goat',
        'Excelente',
        'Bom',
        'Uma hora vai',
        'Tem que melhorar'
    ]

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')

    const [campeao, setCampeao] = useState({nome, image: ''})
    const [nivel, setNivel] = useState('')
    const [rota, setRota] = useState('')

    const [nomeGrupo, setNomeGrupo] = useState('')
    const [corGrupo, setCorGrupo] = useState('#000000')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoJogadorCadastrado({
            nome,
            imagem,
            campeao: campeao.nome,
            campeaoImg: campeao.image,
            nivel,
            rota,
            favorito: false,
            id: uuidv4()
        })
        setNome('')
        setImagem('')
        setCampeao({nome: '', image: ''})
        setNivel('')
        setRota('')
    }

    const adicionarCampeao = (nome: string, image: string) => {
        const campeao = {
            nome,
            image
        }

        setCampeao(campeao)
    }   

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card para o jogador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}    
                />
                <LolChampionsApi 
                    valor={campeao}
                    aoAlterado={(nome: string, image: string) => adicionarCampeao(nome, image)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={niveis} 
                    label="Nivel"
                    valor={nivel}
                    aoAlterado={valor => setNivel(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={rotas} 
                    label="Rota"
                    valor={rota}
                    aoAlterado={valor => setRota(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={ evento => {
                evento.preventDefault()
                cadastrarGrupo({ nome: nomeGrupo, cor: corGrupo})
            }}>
                <h2>Preencha os dados para criar um novo grupo.</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do grupo"
                    valor={nomeGrupo}
                    aoAlterado={valor => setNomeGrupo(valor)}
                />
                <Campo
                    type="color" 
                    obrigatorio
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corGrupo}
                    aoAlterado={valor => setCorGrupo(valor)}    
                />
                <Botao>
                    Criar Grupo
                </Botao>
            </form>
        </section>
    )
}

export default Formulario