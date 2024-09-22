
//  if-else

const  budget =prompt("Enter Your Budget An i Let You Know Which Compact Car Youn Can Afford.")

if (budget >= 500000 && budget <= 1500000){

    console.log("Under Your " +budget+ " Budget you can afford a seidan")

} else if(budget >= 1500000 && budget <= 4000000 ){

    console.log("you have a good budget of " +budget+ "so you can buy a good SUV Car ") 

}else if(budget >= 4000000 && budget <= 20000000){

    console.log("you have an exxellent budget of " +budget+ " so you can buy a highEnd luxury SUV Car")

} else if (budget < 500000){

    console.log("So sorry your budget is below 5lakh so you cant buy any of this")

    // this will execute if there will be no input by the user

} else if (prompt() == " "){
    alert("Enter Your Budget First")
}

else {
    console.log("got by a cycle you r broke")
}

