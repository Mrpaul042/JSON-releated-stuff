

// var obj1 = { 
//     name: "Person 1", 
//     age:5 };
// var obj2 = { 
//     age:5, 
//     name: "Person 1" };
//     console.log(JSON.stringify(obj1)===JSON.stringify(obj2))


// 2. code using ajax-xmlhttp request with json api  and displayed all the country flags in console.


// var xhr = new XMLHttpRequest();


// xhr.onload = function () {
  
//   if (xhr.status >= 200 && xhr.status < 300) {
    
//     var t = JSON.parse(this.response);
//     Object.entries(t).forEach(function(key,value){
//         console.log(t[value].flag)
//     });
//   } else {
   
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// xhr.send();

// 3.Using the same rest countries url and printed all countries name, region, sub region and population

//var xhr = new XMLHttpRequest();
// xhr.onload = function () {
  
//   if (xhr.status >= 200 && xhr.status < 300) {
    
//     var t = JSON.parse(this.response);
//     Object.entries(t).forEach(function(key,value){
//         console.log(t[value])
//     });
//   } else {
   
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// xhr.send();