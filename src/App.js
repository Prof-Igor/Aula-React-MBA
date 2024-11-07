import Frase from "./components/Frase.js"

function App() {
    const estiloBotao = {
        marginTop: 12, 
        paddingTop: 8, 
        paddingBottom: 8,
        backgroundColor: 'blueviolet', 
        color: 'white', 
        border: 'none', 
        width: '100%',
        borderRadius: 8
    };
    const textoLabel = "Nome:";

    function obterTextoBotao() {
        return "Enviar";
    }

    function enviar(){
        return alert("Enviou!")
    }

    return (
        <div style={{
            margin: 'auto', 
            width: 768, 
            backgroundColor: '#EEE', 
            padding: 12, 
            borderRadius: 8
        }}>
            <Frase />
            <label className="rotulo" htmlFor="nome" style={{
                display: 'block',
                marginBottom: 4
            }}>{textoLabel}</label>
            <input type="text" id="nome" style={{
                paddingTop: 8, 
                paddingBottom: 8,
                borderStyle: 'hidden', 
                width: '100%', 
                borderRadius: 8, 
                outline: 'none', 
                boxSizing:'border-box'
            }} />
            <button style={estiloBotao} onClick={enviar} >{obterTextoBotao()}</button>
            <Frase />
            <Frase />
            <Frase />
        </div>
    )
}

export default App