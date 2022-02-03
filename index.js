const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

//Capitalizes first letter and returns copy
/*function titler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);  
}
//spaces array to individual words
function spacer(sArray) {
  let stringAray = sArray.split(" ");
  return (stringAray.map(titler).join(' '))
  
}
const titleCased = () => {
  console.log("titleCased")
  return tutorials.map(spacer);
}*/

// const titleCased = () => {
//   return tutorials.map(function (newArray){
//     let stringArray = newArray.split (' ');
//     return stringArray.map(function (string){
//       return string.charAt(0).toUpperCase() +string.slice(1);
//     }).join(' ')
//   })
// }

/*const titleCased = tutorials => {
  tutorials = tutorials.map(element => 
    element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  )
  return tutorials 
}
console.log(titleCased(tutorials))*/



/*const titleCased = () => {
  let lowerCase = tutorials.toLowerCase();
  let upperCase = lowerCase.split(" ").map(function(currentValue){
    return currentValue[0].toUpperCase() + currentValue.substring(1);
  })
  
  
  return tutorials.push();
}*/


/*function titleCased() {
  let strLowerCase = str.toLowerCase();
  let wordArr = strLowerCase.split(" ").map(function(currentValue) {
      return currentValue[0].toUpperCase() + currentValue.substring(1);
  });

  return wordArr.join(" ");
}*/

/*const titleCased = tutorials => {
  tutorials.map(function (element) {
    const words = element.split(" ");
    words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  })
}

console.log(titleCased(tutorials))*/


// function titler(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);  
// }
// function spacer(sArray) {
//   let stringAray = sArray.split(" ");
//   return (stringAray.map(titler).join(' '))
  
// }
// const titleCased = () => {
//   console.log("titleCased")
//   return tutorials.map(spacer);
// }


const titleCased = () => {
  return tutorials.map(function (tutorialString){
    let stringArray = tutorialString.split (' ');
    return stringArray.map(function (string){
      return string.charAt(0).toUpperCase() +string.slice(1);
    }).join(' ')
  })
}