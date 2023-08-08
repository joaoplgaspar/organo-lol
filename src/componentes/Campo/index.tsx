import './Campo.css'

interface CampoProps {
    label: string
    type?: string
    valor: string
    placeholder: string
    obrigatorio?: boolean
    aoAlterado: (valor: string) => void
}

const Campo = ({ aoAlterado, label, placeholder, type, valor, obrigatorio = false } :CampoProps) => {

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo