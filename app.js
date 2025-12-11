import input from "analiza-sync"
import {searchStock, filterStocksByPrice, operateOnStock} from "./utils/stockManager.js"

function menu(){
    console.log("Hello welcome to the stocks marketing")
    console.log("To Search for a stock by name or id press 1 \nTo Show all stocks above or below a given price press 2 \nTo Buy or sell a stock press 4\nTo exit press 4")
    switch (input("Enter your choice in numbers: ")) {
        case 1:
            console.log(searchStock(input("Please enter name or id: ")))
            break;
        case 2:
            console.log(filterStocksByPrice(input("Pleas enter price: ", input("Enter true to above price and false to below"))))
            break;
        case 3:
            operateOnStock(input("Enter your operation: ", input("Enter the stock identifier")))
            break;
        case 4:
            console.log("by by")
            return
    }
}

console.log(menu())