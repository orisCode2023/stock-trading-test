import input from "analiza-sync"
import { stockMarket } from "../data/dataStock.js"
import { isNumber, isEmpty, isAvailable, validOperations, calcPercent } from "./helper.js"

const searchStock = (identifier) => isEmpty(stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier ))

function filterStocksByPrice(givenPrice, above) {
    isNumber(givenPrice)
    if (above){
        return isEmpty(stockMarket.stocks.filter(stock => stock.currentPrice > givenPrice))
    } return isEmpty(stockMarket.stocks.filter(stock => stock.currentPrice < givenPrice))
}


function updateStockPrice(operation, stock){
    const percentSingleStock = 5
    if (operation === "buy"){
        stock.previousPrices.push(stock.currentPrice)
        stock.currentPrice += calcPercent(percentSingleStock, stock.currentPrice)
        console.log(`The stock price went up from ${stock.previousPrices[stock.previousPrices.length - 1]} to ${stock.currentPrice}`)
        updatePriceCatagoryAdd(stock)
    } else {
        stock.previousPrices.push(stock.currentPrice)
        stock.currentPrice -= calcPercent(percentSingleStock, stock.currentPrice)
        console.log(`The stock price went down from ${stock.previousPrices[stock.previousPrices.length - 1]} to ${stock.currentPrice}`)
        updatePriceCatagorySub(stock)
    }
}

function updateTime(){
    stockMarket["lastUpdated"] = new Date()
}


function updatePriceCatagoryAdd(stock){
    const percentCatagoryStock = 1
    const stockCatagory = stockMarket.stocks.filter(stock1 => stock1.category === stock.category )
    for (let i = 0; i < stockCatagory.length; i++){
        stockCatagory[i].previousPrices.push(stockCatagory[i].currentPrice)
        stockCatagory[i].currentPrice += calcPercent(percentCatagoryStock, stockCatagory[i].currentPrice)
    }
     console.log(`The stock catagory price went up from ${stock.previousPrices[stock.previousPrices.length - 1]} to ${stock.currentPrice}`)
}
function updatePriceCatagorySub(stock){
    const percentCatagoryStock = 1
    const stockCatagory = stockMarket.stocks.filter(stock1 => stock1.category === stock.category )
    for (let i = 0; i < stockCatagory.length; i++){
        stockCatagory[i].previousPrices.push(stockCatagory[i].currentPrice)
        stockCatagory[i].currentPrice -= calcPercent(percentCatagoryStock, stockCatagory[i].currentPrice)
    }
    console.log(`The stock catagory price went down from ${stock.previousPrices[stock.previousPrices.length - 1]} to ${stock.currentPrice}`)
}

function operateOnStock(operation, identifier) {
    validOperations(operation)
    const stock = searchStock(identifier)
    const amount = input(`How many stocks do you want to ${operation} ?  `)
    stock.availableStocks -= isAvailable(amount, stock.availableStocks)
    updateStockPrice(operation, stock[0])
    updateTime()
}
operateOnStock("buy", "BrightFuture Academy")