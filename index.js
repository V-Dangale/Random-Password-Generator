
//element wherin the password will appear
const pswElOne = document.querySelector(".psw-elOne")
const pswElTwo = document.querySelector(".psw-elTwo")

const input = document.querySelector(".input")

const errorMessageEl = document.querySelector(".errorMessage") 


//button element
const genBtn = document.querySelector(".genBtn")



//password characters
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
                    "/"
                ];


let length = input.value

console.log(length)
//Giving the textContent an empty value
//And resetting the textConten to empty when reset() is called

function reset(){
    pswElOne.textContent = ""
    pswElTwo.textContent = ""
}


//Function that loops through the characters array and displays the characters
function loop(){
    
    for ( i = 0; i < input.value; i++){ 

        //these will fetch (desired length) random characters from the characters array
        const randomPswOne = Math.floor( Math.random() * characters.length)
        const randomPswTwo = Math.floor( Math.random() * characters.length) 
    
        //displaying the random password in the empty string
        pswElOne.textContent += characters[randomPswOne]
        pswElTwo.textContent += characters[randomPswTwo]
                
        }
}


//function that displays the error message when called
function errorMessage(){
    errorMessageEl.textContent = "Please consider entering a valid length"
}


//Function that calls reset() and loop() functions when the appropriate conditions are met             
genBtn.addEventListener( "click", function(){
    
    if( input.value >= 8 && input.value <= 16){
        reset()
        loop()

    }else{
        reset()
        errorMessage()
    }
    
})


       