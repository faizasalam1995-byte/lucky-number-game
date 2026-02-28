

let roundedValue = 0;

function generateNumber(){

    // Random decimal number
    let randomNum = Math.random() * 10;

    // Math methods
    let floorNum = Math.floor(randomNum);
    let ceilNum = Math.ceil(randomNum);
    roundedValue = Math.round(randomNum);

    document.getElementById("numbers").innerHTML =
        `Random: ${randomNum.toFixed(2)} <br>
         Floor: ${floorNum} <br>
         Ceil: ${ceilNum} <br>
         Round: ? (Guess it!)`;
}

function checkGuess(){

    let userGuess = Number(document.getElementById("guess").value);

    if(userGuess === roundedValue){
        document.getElementById("result").innerText = "✅ You Win!";
    }else{
        document.getElementById("result").innerText =
        "❌ Wrong! Correct Round = " + roundedValue;
    }
}

