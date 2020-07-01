function compute(expression) {
    var expressionToArray = expression.split(""); // take each expression as a seperate value in the arr
    var currentmathOperator = null;
    var newMathOperator = null;
    var numberCount = 0;
    var polishMathArray = [];
    var solution = 0;
    var numberString = "";

    for(var index = 0; index < expressionToArray.length; index++){
            var currentToken = expressionToArray[index];
            numberString += currentToken;
            if(currentToken == "+" || currentToken == "-" || currentToken == "*" || currentToken == "/"){
              
              newMathOperator = currentToken;
              if(currentmathOperator == null){
                currentmathOperator = newMathOperator;
              }

              if(numberCount == 0){ // THIS IS THE VERY FIRST NUMBER ENCOUNTERED IN THE EXPRESISION
                //   console.log("FOUND THE VERY FIRST NUMBER");
                   polishMathArray[0] = parseInt(numberString);
                 //  console.log(polishMathArray[0]);
                   numberCount++;
                   numberString = "";
              }
              else if(numberCount == 1){
                //  console.log("FOUND THE 2nd NUMBER");
                  polishMathArray[1] = parseInt(numberString);
                 // console.log(polishMathArray[1]);
                  numberCount++;
                  numberString = "";
              }
            }
               //WE HAVE 2 NUMBERS and a math operator
          if(numberCount == 2 && currentmathOperator != null){
              console.log("CURRENT MATH OPERATOR = " + currentmathOperator);
              solution = doMath(polishMathArray, currentmathOperator);
              numberCount--;
              polishMathArray[0] = solution;
              currentmathOperator = newMathOperator; // SETS currentmathOperator to the newly found one;
        }
      } //------------------------- END OF FOR LOOP----------------------------------------------------------//

        //WE assume that the expression has eneded on a number and we need to deal with the last number with the last found operator

        polishMathArray[1] = parseInt(numberString);
        solution = doMath(polishMathArray, currentmathOperator);
        return solution;
}

function doMath(numberArray, mathOP){
  console.log("DOING MATH");
  console.log("NUMBER 1:" + numberArray[0] + " NUMBER 2:" + numberArray[1]);
  var currentSolution = 0;
  switch(mathOP){
    case "+":
      currentSolution = numberArray[0] + numberArray [1];
        console.log("Add"); 
         // console.log(solution);
        break;
    case "-":
      currentSolution = numberArray[0] - numberArray [1];
        console.log("Sub");  
        //console.log(solution);
        break;
    case "*":
      currentSolution = numberArray[0] * numberArray [1];
        console.log("MULT");
         // console.log(solution);
          break;
      case "/":
        currentSolution = (numberArray[0] / numberArray [1]);
          console.log("DIV");
         // console.log(solution);
          break;
  }
  console.log("CURRENT SOLUTION IS " + currentSolution);
  return currentSolution;
}



    