
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();       /*  output:1
                      10
                      undefined  */

// -----------------------------------

let x = 10;
console.log(x);      
function a(){                   
    x=100;                           
    console.log(x);                  
}
a();
x=1000;
                /* output: 10
                            100
                            1000*/

// -----------------------------------

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();
            /* output:   100
                          error  */

// -----------------------------------

function a(){
    console.log(x);
}
a();
var x=2   
                /* output: undefined
                            undefined */

// -----------------------------------

let x;
function b(){
    console.log(x);
}
b();
x=2;
                /* output: undefined
                           2   */
// -----------------------------------

function a(){
    console.log(x);
}
a();
let x=2 

                    /* output: Error because of late initialistion  */
// -----------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);
                        /* output: 10 
                                    20
                                    30
                                    2 */
// ----------------------------------


 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();
                        /* output: 7 */
// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();
                        /* output:  */
// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();
                    /* output:  0
                                1 2 3 4 5 */
// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}
                    /* output:  */


// question1: make copy of the object and manipulate values inthe new copied object

let user = { name: 'amy' };

let admin = user;

admin.name = 'jake'; 

alert(user.name);



// question2: print all the properties using appropriate for loop 

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop