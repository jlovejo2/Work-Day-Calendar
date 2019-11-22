var dateLocation = $("#currentDay");
var workCalendar = $("#calendarArea");
// var nineToTen = $("#nineToTen");
// var tenToEleven = $("#tenToEleven");
// var eleventoTwelve = $("#elevenToTwelve");
// var twelveToOne = $("#twelvetoOne");
// var oneToTwo = $("#onetoTwo");
// var twoToThree = $("#twotoThree");
// var threeToFour = $("#threetoFour");
// var fourToFive = $("#fourtoFive");
// var nineToTenBtn = $("#nineToTenButton");
var workDayEvents = {};

// Call init function.  this function will render anything from localstorage to the DOM
init();

//Make the current date and time viewable at the top of the page in currentDay div.
dateLocation.text(moment().format('LLLL'));
console.log("test_outside_all_functions");

$(document).ready(function () {
  // Start a click event on the entire calendar area ...
  $(workCalendar).click(function () {
    // event.preventDefault();
    //Below if statement checks to see if the element that was clicked on is a button
    if (event.target.tagName === "BUTTON") {
      //if the above condition is true the follow if statements check to see what the id associated with the button is
      if (event.target.id === "nineToTenButton") {
        console.log("9to10");
        //if the id matches nineToTen then execute the saveUserInput function with below parameters.  
        //Essentially grab what is in the nineToTen element and save it to workDayEvents object
        saveUserInput($("#nineToTen"), "nineToTen");
      } else if (event.target.id === "tenToElevenButton") {
        console.log("10to11");
        saveUserInput($("#tenToEleven"), "tenToEleven");
      } else if (event.target.id === "elevenToTwelveButton") {
        console.log("11to12");
        saveUserInput($("#elevenToTwelve"), "elevenToTwelve");
      } else if (event.target.id === "twelveToOneButton") {
        console.log("12to1");
        saveUserInput($("#twelveToOne"), "twelveToOne");
      } else if (event.target.id === "oneToTwoButton") {
        console.log("1to2");
        saveUserInput($("#oneToTwo"), "oneToTwo");
      } else if (event.target.id === "twoToThreeButton") {
        console.log("2to3");
        saveUserInput($("#twoToThree"), "twoToThree");
      } else if (event.target.id === "threeToFourButton") {
        console.log("3to4");
        saveUserInput($("#threeToFour"), "threeToFour");
      } else if (event.target.id === "fourToFiveButton") {
        console.log("4to5");
        saveUserInput($("#fourToFive"), "fourToFive");
      }
      //This function takes the workDayEvents objects and saves it local storage
      storeEvents();
      //this is a console.log of the workDayEvents object that is used for troubleshooting code
      console.log(workDayEvents)
    }
  });
});

//This function takes the content inside of an element and saves it to workDayEvent object with specified keyname
function saveUserInput(hourElement, keyname) {
  //Take the text inside of the textarea and set it equal to var userText
  var userText = hourElement.val();

  // Return from function early if submitted userText is blank
  if (userText === "") {
    return;
  }
  //Add new userText to workDayEvents object under keyname parameter specified in function
  workDayEvents[keyname] = userText;
  // // nineToTen.text(workDayEvents);
}

//this function stores the highscore in object scoresArr in localStorage
function storeEvents() {
  // Stringify and set "scoresArr" key in localStorage to scoresArr
  localStorage.setItem("workDayEvents", JSON.stringify(workDayEvents));

}

//This function runs the initial set=up for the page.  It gets the workDayEvents from localstorage and pulls the content into the appropriate hour locations
function init() {
  // Get workDayEvents from localStorage
  // Parsing the JSON string to an object
  var storedEvents = JSON.parse(localStorage.getItem("workDayEvents"));

  // If events were retrieved from localStorage, set the storedEvents equal to workDayEvents.
  if (storedEvents !== null) {
    workDayEvents = storedEvents;
  }

  // Render events to the DOM
  // below line of code runs the function for every element of the object workDayEvents
  $.each(workDayEvents, function (key, value) {
    //below if statments search the object element for the keyname and if it is equal to the designated string it sets 
    //the associated elements content equal to the value associated with that keyname.  
    if (key === "nineToTen") {
      $("#nineToTen").text(value);
    } else if (key === "tenToEleven") {
      $("#tenToEleven").text(value);
    } else if (key === "elevenToTwelve") {
      $("#elevenToTwelve").text(value);
    } else if (key === "twelveToOne") {
      $("#twelveToOne").text(value);
    } else if (key === "oneToTwo") {
      $("#oneToTwo").text(value);
    } else if (key === "twoToThree") {
      $("#twoToThree").text(value);
    } else if (key === "threeToFour") {
      $("#threeToFour").text(value);
    } else if (key === "fourToFive") {
      $("#fourToFive").text(value);
    }
  });

};



