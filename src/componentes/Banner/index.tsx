import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlt?: string
}

const Banner = ({ enderecoImagem, textoAlt } :BannerProps) => {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlt}/>
        </header>
    )
}

export default Banner