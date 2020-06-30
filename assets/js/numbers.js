function compute(expression) {
    var expressionToArray = expression.split(""); // take each expression as a seperate value in the arr
    var mathOperator = null;
    var numberCount = 0;
    var polishMathArray = [];
    var solution = 0;

    for(var index = 0; index < expressionToArray.length; index++){
            var currentToken = expressionToArray[index];
            if(currentToken == "+" || currentToken == "-" || currentToken == "*" || currentToken == "/"){
              mathOperator = currentToken;
            //  console.log("THE MATH OPERATOR IS " + mathOperator);  
            }
            else{
                if(numberCount == 0){ // THIS IS THE VERY FIRST NUMBER ENCOUNTERED IN THE EXPRESISION
                 //   console.log("FOUND THE VERY FIRST NUMBER");
                    polishMathArray[0] = parseInt(currentToken);
                  //  console.log(polishMathArray[0]);
                    numberCount++;
                }
                else if(numberCount == 1){
                  //  console.log("FOUND THE 2nd NUMBER");
                    polishMathArray[1] = parseInt(currentToken);
                   // console.log(polishMathArray[1]);
                    numberCount++;
                }
        
               // console.log("numberCount = " + numberCount );
                //WE HAVE 2 NUMBERS and a math operator
                if(numberCount == 2 && mathOperator != null){
                 //   console.log("INSIDE THE MATH OPERATIONS IF")
                    switch(mathOperator){
                        case "+":
                            solution = polishMathArray[0] + polishMathArray [1];
                          //  console.log("ADDING " + polishMathArray[0] + " " + polishMathArray[1]);
                            numberCount--;
                            polishMathArray[0] = solution;
                           // console.log(solution);
                            break;
                        case "-":
                            solution = polishMathArray[0] - polishMathArray [1];
                           // console.log("Sub");
                            numberCount--;
                            polishMathArray[0] = solution;
                            //console.log(solution);
                            break;
                        case "*":
                            solution = polishMathArray[0] * polishMathArray [1];
                           // console.log("MULT");
                            numberCount--;
                            polishMathArray[0] = solution;
                           // console.log(solution);
                            break;
                        case "/":
                            solution = (polishMathArray[0] / polishMathArray [1]);
                            console.log("DIV");
                            numberCount--;
                            polishMathArray[0] = solution;
                           // console.log(solution);
                            break;
                    }
                }
            }
        }
        return solution;
}

// var expression = "1+1+1";
// var expressionToArray = expression.split("");
// var mathOperator = null;
// var numberCount = 0;
// var polishMathArray = [];
// var solution = 0;

// for(var index = 0; index < expressionToArray.length; index++){
//     var currentToken = expressionToArray[index];
//     if(currentToken == "+" || currentToken == "-" || currentToken == "*" || currentToken == "/"){
//       mathOperator = currentToken;
//       console.log("THE MATH OPERATOR IS " + mathOperator);  
//     }
//     else{
//         if(numberCount == 0){ // THIS IS THE VERY FIRST NUMBER ENCOUNTERED IN THE EXPRESISION
//             console.log("FOUND THE VERY FIRST NUMBER");
//             polishMathArray[0] = parseInt(currentToken);
//             console.log(polishMathArray[0]);
//             numberCount++;
//         }
//         else if(numberCount == 1){
//             console.log("FOUND THE 2nd NUMBER");
//             polishMathArray[1] = parseInt(currentToken);
//             console.log(polishMathArray[1]);
//             numberCount++;
//         }

//         console.log("numberCount = " + numberCount );
//         //WE HAVE 2 NUMBERS and a math operator
//         if(numberCount == 2 && mathOperator != null){
//             console.log("INSIDE THE MATH OPERATIONS IF")
//             switch(mathOperator){
//                 case "+":
//                     solution = polishMathArray[0] + polishMathArray [1];
//                     console.log("ADDING " + polishMathArray[0] + " " + polishMathArray[1]);
//                     numberCount--;
//                     polishMathArray[0] = solution;
//                    // console.log(solution);
//                     break;
//                 case "-":
//                     solution = polishMathArray[0] - polishMathArray [1];
//                     console.log("Sub");
//                     numberCount--;
//                     polishMathArray[0] = solution;
//                     //console.log(solution);
//                     break;
//                 case "*":
//                     solution = polishMathArray[0] * polishMathArray [1];
//                     console.log("MULT");
//                     numberCount--;
//                     polishMathArray[0] = solution;
//                    // console.log(solution);
//                     break;
//                 case "/":
//                     solution = polishMathArray[0] / polishMathArray [1];
//                     console.log("DIV");
//                     numberCount--;
//                     polishMathArray[0] = solution;
//                    // console.log(solution);
//                     break;
//             }
//         }
//     }
// }
// console.log(solution);


    