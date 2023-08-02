let output = document.getElementById("calc");


// FUNCTION TO DISPLAY NUMS ON OUTPUT
function Display(num){
    output.value += num;
}

// FUNCTION TO CLEAR  NUMS ON OUTPUT
function Clear(){
    output.value = "";
}

// FUNCTION TO DELETE  NUM ON OUTPUT
function Delete(){
    output.value = output.value.slice(0, -1);
}


// FUNCTION TO CALC  NUMS ON OUTPUT
function Calc(){
    output.value = eval(output.value);
}

