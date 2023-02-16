
//element wherin the password will appear
const pswEl = document.querySelector(".psw-el")

//User input
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

//Giving the textContent an empty value
//And resetting the textContent to empty when reset() is called

function reset(){
    pswEl.textContent = ""
    errorMessageEl.textContent = ""
}


//Function that loops through the characters array and ranomly displays the items
function loop(){
    
    for ( i = 0; i < input.value; i++){ 
        pswEl.textContent += characters[ Math.floor( Math.random() * characters.length) ]
                
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


       