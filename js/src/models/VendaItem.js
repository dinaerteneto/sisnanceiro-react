class VendaItem {

    constructor(Produto, valorUnitario, quantidade, tipoDesconto, valorDesconto) {
        this._Produto = Produto
        this._valorUnitario = valorUnitario
        this._quantidade = quantidade
        this._valorDesconto = valorDesconto
        this._tipoDesconto = tipoDesconto
        this._valorTotal = this.valorTotal
        Object.freeze(this)
    }

    get Produto() {
        return this._Produto
    }

    get valorUnitario() {
        return this._valorUnitario
    }

    get quantidade() {
        return this._quantidade
    }

    get tipoDesconto() {
        return this._tipoDesconto
    }

    get valorDesconto() {
        let ret = 0.0
        if (this._tipoDesconto !== '%') {
            ret = this._valorDesconto
        } else {
            ret = ((this._valorUnitario * this._quantidade) / 100) * this._valorDesconto
        }
        return ret
    }

    get valorTotal() {
        return (this.quantidade * this.valorUnitario) - this.valorDesconto
    }
}

export default VendaItem;