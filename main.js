//Send info to hr@allmediadesk.com 3:15
//(5+8)*3/8+3

function main(){
    var eq = prompt("Enter an equation");
    var sepEq = eq.split("");
    if(sepEq.includes("(") == false){
        console.log(seperateEq(eq));
    }else{
        var parths = /[()]/;
        var sepEq = eq.split(parths);
        console.log(sepEq);
        var arr = [];
        for(var i = 0; i <= sepEq.length; i++){
            if(sepEq[i] == ""){
                sepEq.shift();
            }

            console.log(sepEq[i]);
            var ops = /[()+*/-\s]/;
            var temp = sepEq[i].split("");
            console.log("Temp:");
            console.log(temp);
            if(temp[0].match(ops)){
                    arr = arr.push(temp[0]);
                    temp.shift();
                    console.log("Temp:");
                    console.log(temp);
                    
                }
            temp = temp.join();
            temp = seperateEq(temp);
            arr.push(temp);
            console.log(arr);
            
            }
            
            arr = arr.join();
            seperateEq(arr);  
            
    }

    

}

function countInArray(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "(") {
            count++;
        }
    }
    return count;
}

function seperateEq(eq){
    var ops = /[()+*/-\s]/;
    var nums = /[\d\s]/;
    var numbers = eq.split(ops);
    var operators = eq.split(nums);

    return logical(numbers, operators);
}


function logical(numbers, operators){


        var sum = numbers[0];
        numbers = numbers.splice(1);

        for(var i = 0; i < numbers.length; i++){
            if(operators[0] == '' || operators[0] == null || operators[0] == ")" || operators[0] == "("){
                operators = operators.splice(1);
            }      

            sum = math(sum, numbers[i], operators[i]);

            console.log(sum);
        }

        window.alert(sum);
        
    }



function math(a, b, c){
    a = parseFloat(a);
    b = parseFloat(b);
    switch(c){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
    }
}

main();