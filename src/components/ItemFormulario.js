function ItemFormulario({ nome, tipo, forr, ph }) {
    return (
        <div>
            <p>
                <label for={forr}>{nome}</label>
                <input id={nome} type={tipo} placeholder={ph}></input>
            </p>
        </div>
    )
}
export default ItemFormulario;