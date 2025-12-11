import { stockMarket } from "../data/dataStock.js"
import { isNumber, isEmpty } from "./helper.js"

const searchStock = (identifier) => {
    const found = stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier )
    return isEmpty(found)
}

function filterStocksByPrice(givenPrice, above) {
    isNumber(givenPrice)
    if (above){
        return isEmpty(stockMarket.stocks.filter(stock => stock.currentPrice > givenPrice))
    } return isEmpty(stockMarket.stocks.filter(stock => stock.currentPrice < givenPrice))
}

function OperateOnStock(operation, identifier) {}