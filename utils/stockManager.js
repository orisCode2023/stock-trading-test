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
    } else {
        stock.previousPrices.push(stock.currentPrice)
        stock.currentPrice -= calcPercent(percentSingleStock, stock.currentPrice)
    }
}

function updateTime(){
    stockMarket["lastUpdated"] = new Date()
    console.log(stockMarket.lastUpdated)
}

function OperateOnStock(operation, identifier) {
    validOperations(operation)
    const stock = searchStock(identifier)
    const amount = input(`How many stocks do you want to ${operation} ?  `)
    stock.availableStocks -= isAvailable(amount, stock.availableStocks)
    updateStockPrice(operation, stock)
    // updateCatagoryPrice(stock.category)
    updateTime()
}


console.log(stockMarket.stocks[0])
updateStockPrice("sell", stockMarket.stocks[0])
console.log(stockMarket.stocks[0])


function updatePriceCatagory(operation, stock){
    const percentCatagoryStock = 1
    const stockCatagory = stockMarket.stocks.filter(stock1 => stock1.category === stock.category )
    if (operation === "buy"){
        for (let i = 0; i < stockCatagory.length; i++){
            stockCatagory[i].previousPrices.push(stockCatagory[i].currentPrice)
            stockCatagory[i].currentPrice += calcPercent(percentCatagoryStock, stockCatagory[i].currentPrice)
        }
    } else {
        for (let i = 0; i < stockCatagory.length; i++){
            stockCatagory[i].previousPrices.push(stockCatagory[i].currentPrice)
            stockCatagory[i].currentPrice -= calcPercent(percentCatagoryStock, stockCatagory[i].currentPrice)
        }
    }
    console.log(stockCatagory)
}


