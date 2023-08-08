import { useEffect, useState } from 'react'
import './LolChampionsApi.css'

let ListaNomesChamps = 'Aatrox Ahri Akali Akshan Alistar Amumu Anivia Annie Aphelios Ashe AurelionSol Azir Bard Belveth Blitzcrank Brand Braum Caitlyn Camille Cassiopeia Chogath Corki Darius Diana Draven DrMundo Ekko Elise Evelynn Ezreal Fiddlesticks Fiora Fizz Galio Gangplank Garen Renata Gnar Gragas Graves Gwen Hecarim Heimerdinger Illaoi Irelia Ivern Janna JarvanIV Jax Jayce Jhin Jinx Kaisa Kalista Karma Karthus Kassadin Katarina Kayle Kayn Kennen Khazix Kindred Kled KogMaw Leblanc LeeSin Leona Lillia Lissandra Lucian Lulu Lux Malphite Malzahar Maokai MasterYi MissFortune MonkeyKing Mordekaiser Morgana Nami Nasus Nautilus Neeko Nidalee Nilah Nocturne Nunu Olaf Orianna Ornn Pantheon Poppy Pyke Qiyana Quinn Rakan Rammus RekSai Rell Renata Renekton Rengar Riven Rumble Ryze Samira Sejuani Senna Seraphine Sett Shaco Shen Shyvana Singed Sion Sivir Skarner Sona Soraka Swain Sylas Syndra TahmKench Taliyah Talon Taric Teemo Thresh Tristana Trundle Tryndamere TwistedFate Twitch Udyr Urgot Varus Vayne Veigar Velkoz Vex Vi Viego Viktor Vladimir Volibear Warwick Xayah Xerath XinZhao Yasuo Yone Yorick Yuumi Zac Zed Zeri Ziggs Zilean Zoe Zyra'

let listaNomeChamps = ListaNomesChamps.split(" ")

interface LolChampionsApiProps {
    aoAlterado: (evento: string, image: string) => void
    valor: {}
}

function LolChampionsApi({aoAlterado} :LolChampionsApiProps){
    const [vetor, setVetor] = useState([{name:'', image:'', id:''}]);

    const obterDados = async () => {
        const dados = await fetch('https://ddragon.leagueoflegends.com/cdn/13.13.1/data/pt_BR/champion.json')
        const dadosConvertidos = await dados.json()
        
        setVetor(converteDados(dadosConvertidos))
    }

    function converteDados(dadosConvertidos: {}) {
        let listaArr:any = []
        let dados:any = dadosConvertidos
        let i = 0

        listaNomeChamps.forEach(nome => {
            const dataChamp = {
                "name": dados.data[`${nome}`].name,
                "id": i,
                "image": `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nome}_0.jpg`
            }

            i++
            listaArr.push(dataChamp)
        })

        return listaArr
    }

    useEffect(() => {
        obterDados()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function descobrirImage(target:string): any{
        let image

        vetor.forEach( objeto => {
            if(objeto.name === target){
                image = objeto.image 
            }
        })   

        return image
    }

    return (
        <div className='lista-suspensa-champ'>
            <label>Campeão</label>
            <select onChange={evento => aoAlterado(evento.target.value, descobrirImage(evento.target.value) 
                )}> 
                <option value=""></option>
                {vetor.map( objeto => (<option 
                    key={objeto.id} data-image={objeto.image}>
                    {objeto.name}</option>))}
            </select>
        </div>
    )
}

export default LolChampionsApi;