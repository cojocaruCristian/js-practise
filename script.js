var helloWorld = 45;
var today = "Sat";
var value = false;
var nothing = null;
var waiting = undefined;
var user = {name: "vasiok"};
var myCurrentAge = 16;

if(myCurrentAge > 18){
    console.log("I am over 25 years old")
}else{
    console.log("I am under 25");
}

var result = (myCurrentAge >= 18)? "I am an adult" : "I am a child";
console.log (result);


console.log(typeof today, helloWorld, value, nothing, waiting, user );


// if (today === "Sat"){
//     console.log("Today is saturday");
// }
// else{
//     console.log("whatever");
// }
