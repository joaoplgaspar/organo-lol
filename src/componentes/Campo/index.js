import './Campo.css'

const Campo = (props) => {

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo