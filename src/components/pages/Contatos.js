import ItemFormulario from '../ItemFormulario';
function Contatos() {
    return (
        <div className="contato">
            <h1>Formulário de Contato</h1>

            <p><ItemFormulario nome="nome" tipo="text" forr="name =" ph="Digite seu nome" /></p>
            <p><ItemFormulario nome="email" tipo="email" forr="email =" ph="Digite seu e-mail" /></p>
            <hr></hr>
            <p>Assunto</p>
            <p><ItemFormulario tipo="text" forr="name =" ph="Assunto do seu contato" /></p>
            <p>Digite sua mensagem</p>
            <p> <textarea nome="mensagem" tipo="text"></textarea></p>
            <button>Enviar</button>
        </div>
    )
}
export default Contatos 