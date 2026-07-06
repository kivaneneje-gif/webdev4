let expression = "";

const expr = document.getElementById("expr");
const result = document.getElementById("result");

function updateDisplay(){
    expr.textContent = expression;
}

function pressNum(num){
    expression += num;
    updateDisplay();
}

function pressDot(){
    expression += ".";
    updateDisplay();
}

function pressOp(op){

    if(op==="×") op="*";
    if(op==="÷") op="/";
    if(op==="−") op="-";

    expression += op;
    updateDisplay();
}

function pressFn(fn){

    if(fn=="%"){
        expression += "%";
    }

    if(fn=="+/-"){

        if(expression!=""){
            expression=(-Number(expression)).toString();
        }

    }

    updateDisplay();

}

function pressDel(){

    expression=expression.slice(0,-1);

    updateDisplay();

}

function pressAC(){

    expression="";

    result.textContent="0";

    expr.textContent="";

}

function pressEq(){

    try{

        let answer=eval(expression);

        result.textContent=answer;

        document.getElementById("ans-badge").innerHTML="ANS: "+answer;

        expression=answer.toString();

    }

    catch{

        result.textContent="Error";

    }

}

function switchMode(mode,btn){

    document.querySelectorAll(".tab").forEach(tab=>{

        tab.classList.remove("active");

        tab.classList.add("inactive");

    });

    btn.classList.add("active");

    btn.classList.remove("inactive");

    document.getElementById("sci-section").style.display=
    mode==="sci"?"block":"none";

    document.getElementById("hist-section").style.display=
    mode==="hist"?"block":"none";

}