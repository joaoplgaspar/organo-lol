import './Rota.css'
import Jogador from '../Jogador'
import hexToRgba from 'hex-to-rgba';

const Rota = (props) => {
    return (
        props.jogadores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input 
                type='color' 
                className="input-cor" 
                value={props.cor} 
                onChange={evento => props.mudarCor(evento.target.value, props.id)}
            />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => {
                    return <Jogador 
                        nome={jogador.nome} 
                        campeao={jogador.campeao} 
                        nivel={jogador.nivel} 
                        imagem={jogador.imagem} 
                        imagemCampeao={jogador.campeaoImg} 
                        key={jogador.id}
                        id={jogador.id} 
                        aoDeletar={props.aoDeletar}
                        favorito={jogador.favorito}
                        aoFavoritar={props.aoFavoritar}    
                    />
                })}
            </div>
        </section>
    )
}

export default Rota