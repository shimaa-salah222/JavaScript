//functions
//question 1------------------------------------
// function fun(a,b){
//    if (arguments.length !==2){
//     throw ("Invalid number of parameters");
//    }
//    console.log(a,b);
// }
// fun(1,2);
// fun(1,2,3);
//---------------------------------------------------------------

// question2---------------------------------------
// function reversePar(){
//   var result =[];
//   for(i=arguments.length-1; i>=0;i--){
//     result.push(arguments[i]);
//   }
//   console.log(result);
 
// }
// reversePar(1,2,3,4,5,6);
// reversePar(2,6,7,1);

////////////////////////////////////////////////////////////////////


//question 3---------------------------

// function addPar(){
//     var sum =0;
//     for(var i=0;i<arguments.length;i++){
//         if(!isNaN(arguments[i])|| typeof arguments[i] === "Number"){
//             sum += parseInt(arguments[i]);  
//         }
//         else{
//             throw("Error: Enter only numerical values: ");
//         }
       
//     }
//     return sum;
    
// }
// console.log(addPar(1,2,3,4));
// console.log(addPar(10,2,4,5,7,8));
// console.log(addPar(1,2,4,'e'));
