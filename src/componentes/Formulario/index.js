import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import LolChampionsApi from '../LolChampionsApi'
import { v4 as uuidv4 } from 'uuid'
import './Formulario.css'

function Formulario(props) {

    const niveis = [
        'Goat',
        'Excelente',
        'Bom',
        'Uma hora vai',
        'Tem que melhorar'
    ]

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')

    const [campeao, setCampeao] = useState([])
    const [nivel, setNivel] = useState('')
    const [rota, setRota] = useState('')

    const [nomeGrupo, setNomeGrupo] = useState('')
    const [corGrupo, setCorGrupo] = useState('#000000')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
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
        setCampeao('')
        setNivel('')
        setRota('')
    }

    const adicionarCampeao = (nome, image) => {
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
                    aoAlterado={(nome, image) => adicionarCampeao(nome, image)}
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
                    itens={props.rotas} 
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
                props.cadastrarGrupo({ nome: nomeGrupo, cor: corGrupo})
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