export default class Carrinho {

    constructor() {
        this._items = [];
    }

    addItem(item) {
        this._items.push(item);
    }

    delItem(itemAtual) {
        let index = this._items.findIndex(item =>
            itemAtual.Produto.codigo == item.Produto.codigo
        )
        return this._items.splice(index, 1)
    }

    delItemByIndex(index) {
        return this._items.splice(index, 1)
    }

    get items() {
        return [].concat(this._items)
    }

    get valorTotal() {
        return this._items.reduce((total, n) => total += n._valorTotal, 0.0)
    }

}