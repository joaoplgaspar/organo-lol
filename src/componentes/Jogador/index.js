import './Jogador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai' 

const Jogador = ( {nome, imagem, nivel, imagemCampeao, campeao, aoDeletar, id, favorito, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='jogador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho'>
                <img className="campeaoImagem" src={imagemCampeao} alt={campeao}/>
                <img className="jogadorImagem" src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <p>{campeao}, {nivel}</p>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Jogador