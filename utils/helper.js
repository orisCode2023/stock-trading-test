import input from "analiza-sync";

export function isNumber(price){   
    while (isNaN(price)) {
        console.log("price must be a number")
        price = input("Enter price again: ")
    }
    console.log("great")
}
