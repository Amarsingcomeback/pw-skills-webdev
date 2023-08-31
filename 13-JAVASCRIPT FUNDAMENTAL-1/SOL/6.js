
let Name = "amar";
let email = "amrsing1727@gmail.com";
// let age = 20;
let age = "error";
let validation = "age";
switch(validation){
    case "name" :
        if(typeof Name === "number"){
            console.log("ok");
        }
        else{
            console.log("you should be a String");
        }
        break;
    case "email" :
        if(typeof email === "number"){
           console.log("ok");
        }
        else{
         console.log("you should be a String");
        }  
        break;      
    case "age" :
        if(typeof age === "number"){
           console.log("ok");
        }
        else{
         console.log("you should be a number");
        }   
        break;     
    
}