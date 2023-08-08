import './Rota.css'
import hexToRgba from 'hex-to-rgba';
import { IJogador } from '../../shared/interfaces/IJogador';
import Jogador from '../Jogador';

interface RotaProps {
    cor: string
    jogadores: IJogador[]
    nome: string
    id: number
    corPrimaria: string
    mudarCor: (cor: string, id: number) => void
    aoDeletar: (id: number) => void
    aoFavoritar: (id: number) => void
}

const Rota = ({corPrimaria, cor, mudarCor, nome, id, jogadores, aoDeletar, aoFavoritar} :RotaProps) => {
    return (
        (jogadores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(cor, '0.6') }}>
            <input 
                type='color' 
                className="input-cor" 
                value={cor} 
                onChange={evento => mudarCor(evento.target.value, id)}
            />
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='jogadores'>
                {jogadores.map( jogador => {
                    return <Jogador 
                        nome={jogador.nome} 
                        campeao={jogador.campeao} 
                        nivel={jogador.nivel} 
                        imagem={jogador.imagem} 
                        imagemCampeao={jogador.campeaoImg} 
                        key={jogador.id}
                        id={jogador.id} 
                        aoDeletar={aoDeletar}
                        favorito={jogador.favorito}
                        aoFavoritar={aoFavoritar}    
                    />
                })}
            </div>
        </section>
        : <></>
    )
}

export default Rota