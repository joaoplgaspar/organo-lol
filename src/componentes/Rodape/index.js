import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul>
                <a href='https://www.facebook.com'><img src='/imagens/fb.png' alt='logo facebook'/></a>
                <a href='https://www.twitter.com'><img src='/imagens/tw.png' alt='logo twitter'/></a>
                <a href='https://www.instagram.com'><img src='/imagens/ig.png' alt='logo instagram'/></a>
            </ul>
            <img src='/imagens/logo.png' alt='logo organo'/>
            <p>Desenvolvido por João Pedro Lima Gaspar</p>
        </footer>
    )
}

export default Rodape