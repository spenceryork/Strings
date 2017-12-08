let userInput = document.getElementById("inputField");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let btn = document.getElementById("btn");
let testString = "";

btn.addEventListener("click", function() {
    testString = userInput.value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
});

function reversal(input) {
    let revSentence = input.split("").reverse();
    console.log(revSentence);
    output1.innerHTML = revSentence.join("");
};

function alphabits(input) {
    console.log("alphabits is running");
    let alphaSentence = input.split("").sort();
    console.log("alphasentence", alphaSentence);
    output2.innerHTML = alphaSentence.join("");
};

function palindrome(input) {
    let palindromeSent = input.split("").reverse().join("");
    console.log("palindrome is running", palindromeSent);
    console.log("user input", input);
    if (palindromeSent === input){
        output3.innerHTML = "Your string is a palindrome";
    } else {
        output3.innerHTML = "Your string is NOT a palindrome";
    }
};

