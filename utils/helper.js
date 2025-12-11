import input from "analiza-sync";

export function isNumber(price){   
    while (isNaN(price)) {
        console.log("price must be a number")
        price = input("Enter price again: ")
    }
    console.log("great")
}

export function isEmpty(found){
    if (found.length > 0) {
        return found
    } else {
        console.log("Sorry, could not find this stock")
        return found
    }
}
