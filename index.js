
//element wherin the password will appear
let pswElOne = document.querySelector(".psw-elOne")
let pswElTwo = document.querySelector(".psw-elTwo")

//button element
let genBtn = document.querySelector(".genBtn")



//password characters
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
                    "/"
                ];
                

//function that generates random passwords             
genBtn.addEventListener( "click", function(){

    //declaring an empty string wherein the password will be displayed//
    pswElOne.textContent = ""
    pswElTwo.textContent = ""

    for ( i = 0; i < 15; i++){ 

    //these will fetch 15 random characters from the characters array
    let randomPswOne = Math.floor( Math.random() * characters.length)
    let randomPswTwo = Math.floor( Math.random() * characters.length) 

    //displaying the 15 characters in the empty string
    pswElOne.textContent += characters[randomPswOne]
    pswElTwo.textContent += characters[randomPswTwo]
            
    }
    
 
})
             