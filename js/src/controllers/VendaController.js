import Produto from '../models/Produto'
import Carrinho from '../models/Carrinho'
import VendaItem from '../models/VendaItem'

class VendaController {

    constructor() {

        let produto1 = new Produto('0001', 'Produto 1', 10, 1)
        let produto2 = new Produto('0002', 'Produto 2', 20.20, 1.500)
        let produto3 = new Produto('0003', 'Produto 3', 30, 3.500)

        let vendaItem1 = new VendaItem(produto1, 10, 2, '%', 5)
        let vendaItem2 = new VendaItem(produto2, 20, 1, 0, 0)
        let vendaItem3 = new VendaItem(produto3, 30, 1, 0, 0)

        var venda = new Carrinho()
        venda.addItem(vendaItem1)
        venda.addItem(vendaItem2)
        venda.addItem(vendaItem3)

        console.log(venda)

    }

}

let vendaController = new VendaController();
export function currentInstance() {
    return vendaController;
}