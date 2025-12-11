import { stockMarket } from "../data/dataStock.js"

const searchStock = (identifier) => {
    const found = stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier )
    if (found.length > 0) {
        return found
    }
    return "Sorry, could not find this stock"
}
function filterStocksByPrice(givenPrice, above) {}
function OperateOnStock(operation, identifier) {}