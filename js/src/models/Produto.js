class Produto {

    constructor(codigo, nome, preco, peso) {
        this._codigo = codigo
        this._nome = nome
        this._preco = preco
        this._peso = peso
        Object.freeze(this)
    }

    get codigo() {
        return this._codigo
    }

    get nome() {
        return this._nome
    }

    get preco() {
        return this._preco
    }

    get peso() {
        return this._peso
    }
}

export default Produto;