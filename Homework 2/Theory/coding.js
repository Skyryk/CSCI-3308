function display2_1() {
  var myanswer  = "My answer goes here: Output 1 = undefined. Output 2 = true. Output 3 = false. Output 2 is true because double equal performs a type conversion and then determines that both null and undefined are " +
      "equal to each other. Output 3 is false because there is no type conversion wit triple equal. Since null and undefined are not of the same type we get false." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: You get an error saying that X is not defined. If you remove is strict you don't get an error when the script runs. This is because is strict makes javascript notify the" +
      " user when they are breaking coding conventions and won't let code run with errors of any kind. If you dont have use strict then javascript will just ignore the error and move on."  // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: We are able to see these children that we can not view in HTML because of the DOM. The DOM allows javascript to know everything about the html file, such as the children of an element, " +
      "regardless of it can be seen in a web browser or not." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

