import input from "analiza-sync";

export function isNumber(price){   
    while (isNaN(price)) {
        console.log("price must be a number")
        price = input("Enter price again: ")
    }
}

export function isEmpty(found){
    if (found.length > 0) {
        return found
    } else {
        console.log("Sorry, could not find this stock/s")
        return found
    }
}

export function isAvailable(amount, storeAmount){
    if (amount > storeAmount){
        console.log(`There is only ${storeAmount} stocks available `)
        return storeAmount
    } 
    return amount
}

export function validOperations(operation){
    const operations = ["buy", "sell"]
    while (!operations.includes(operation)) {
        console.log("This is not an operation")
        operation = input("Plaes enter operation again: ")
    }
} 

export function isProperty(stock, identifier){
    while (!stock.hasOwnProperty(identifier)) {
        console.log("This is not a property")
        identifier = input("Plaes enter identifier again: ")
    }
}

export function calcPercent(percent, total){
    return ((percent/ 100) * total)
}