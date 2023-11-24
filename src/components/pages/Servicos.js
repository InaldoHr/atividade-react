import ItemServico from '../ItemServico';

function Servicos() {
    return (
        <div>
            <h2>Servicos:</h2>
            <p>A InnovateTech Solutions tem como o objetivo de Dominar as linguagens de programação mais avançadas, com foco especial em React e JavaScript. Nossas soluções abrangem desde desenvolvimento de aplicativos web modernos até a criação de interfaces interativas e intuitivas. Estamos comprometidos em proporcionar experiências de usuário excepcionais que elevam a presença digital de nossos clientes.</p>


            <img src="https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png" alt="imagem"></img>
            <ItemServico servico="Criação de aplicativos web modernos e inovadores." />
            <ItemServico servico="Desenvolvimento de interfaces de usuário interativas e intuitivas." />
            <ItemServico servico="Especialização no uso das tecnologias React e JavaScript para criar soluções digitais." />
            <ItemServico servico="Transformação de conceitos e ideias inovadoras em produtos tangíveis." />
            <ItemServico servico="Compromisso em proporcionar experiências de usuário excepcionais." />


            <hr></hr>
        </div>
    );
}
export default Servicos;