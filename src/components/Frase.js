import style from "./Frase.module.css"
import PropTypes from "prop-types"

const Frase = ({frase, titulo = "Carregador titulo...", nota = 0}) => {
    return (
        <>
            <h1 className="display-1">{titulo}</h1>
            <br />
            <p className={style.estiloFrase}>{frase}</p>
            <br />
            <p>Nota: {nota}</p>
            <br />
        </>
    )
}

Frase.propTypes = {
    nota: PropTypes.number.isRequired,
    titulo: PropTypes.string,
    frase: PropTypes.string
}

export default Frase