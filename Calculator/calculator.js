const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");
for (let i=0; i<buttonsE1.length; i++){
    buttonsE1[i].addEventListener("click", function(){
        const buttonvalue = buttonsE1[i].textContent;
        if(buttonvalue === "C"){
            clearResult();
        }
        else if(buttonvalue === "="){
            calculateresult();
        }
        else{
            appendValue(buttonvalue);
        }

    })
}

function clearResult(){
      inputFieldE1.value = "";
}
function calculateresult(){
    inputFieldE1.value = eval(inputFieldE1.value)

}
function appendValue(buttonvalue){
    inputFieldE1.value += buttonvalue;

}