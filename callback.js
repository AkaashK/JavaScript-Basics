/**
 * Callback function in Javascript
 * 
 * @author Akaash
 * @since 30.02.2020
 * @version 0.1
 */
//Callback Function
function showReply(question,yes,no){
    if(question == "Do you eat chocolates often?")
        yes();
    else 
        no();
}

function printDoEatChocolates(){
    console.log("Dont eat them often, then you may damage your teeth..!");
}

function printDoesntEatChocolates(){
    console.log("Much better..");
}

//Here works the callback function by passing other functions as parameters
showReply("Do you eat chocolates often?",printDoEatChocolates,printDoesntEatChocolates);