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

//Call createHourDiv function to create and format the hour blocks to the left of user input
createHourDivs("9 AM", "#nineToTen");
createHourDivs("10 AM", "#tenToEleven");
createHourDivs("11 AM", "#elevenToTwelve");
createHourDivs("12 AM", "#twelveToOne");
createHourDivs("1 PM", "#oneToTwo");
createHourDivs("2 PM", "#twoToThree");
createHourDivs("3 PM", "#threeToFour");
createHourDivs("4 PM", "#fourToFive");

//Make the current date and time viewable at the top of the page in currentDay div.
dateLocation.text(moment().format('LLLL'));


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
        //Essentially grab what is in the nineToTen element and save it to workDayEvents object.
        saveUserInput($("#nineToTen"), "nineToTen");
        //style of if statement in code above is repeated below for every hour element.
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

  //Debugging tools
  console.log($(".row"));
  console.log($("#nineToTen"));
  console.log($("textarea"));
  console.log(moment().format("HH"));
  console.log($("textarea")[0].dataset.hour);
  console.log($(".row").children()[0]);
  // $(".row").children()[0].append("9 AM");
  console.log($("<h4>"));
  console.log($("#hour_block"));
  console.log($("#nineToTen").parent().prev());

  //Below code changes the class for each hour element based on the time of day.
  //This if statement checks to see if the time is after 5pm.  If so it removes the "present" & "future" css style classes and adds "past" to all textarea elements.
  if (moment().format("HH") >= 17) {
    $("textarea").removeClass("present").removeClass("future").addClass("past");
  }
  //This if statement checks to see if the time is before 9am.  If so it add all the css style "future" an removes "present" & "past" to all textarea elements.
  else if (moment().format("HH") < 9) {
    $("textarea").removeClass("present").removeClass("past").addClass("future");
  }
  //This if statment checks to see if the time is between 9am and 5pm.
  else if (9 >= moment().format("HH") < 17) {
    //this line of code does a jquery selector for all textarea tags and returns them in an object.  
    $.each($("textarea"), function (index) {
      if ($("textarea")[index].dataset.hour < moment().format("HH")) {
        $("textarea")[index].classList.value = "past";
      } else if ($("textarea")[index].dataset.hour === moment().format("HH")) {
        $("textarea")[index].classList.value = "present";
      } else if ($("textarea")[index].dataset.hour > moment().format("HH")) {
        $("textarea")[index].classList.value = "future";
      }
    });
  };
});

//This function takes the content inside of an element and saves it to workDayEvent object with specified keyname
function saveUserInput(hourElement, keyname) {
  //Take the text inside of the textarea and set it equal to var userText
  var userText = hourElement.val();
  var placeHolder = hourElement.placeholder;


  //If userText is blank then make the value displayed equal to the placeholder of the element
  if (userText === "") {
    userText = placeHolder;
  }

  //Add new userText to workDayEvents object under keyname parameter specified in function
  workDayEvents[keyname] = userText;

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

//This function creates the hour blocks to the left of the user input.
function createHourDivs(blockText, siblingChildId) {

  //Create a H3 tag and set it equal to variable
  var hDiv = $("<h3>");
  //take that H3 tag and make the text content equal to parameter blockText.
  hDiv.text(blockText);
  //Find the predecessor(sibling before) of the parent node of siblingChildId parameter and append H3 into it.
  $(siblingChildId).parent().prev().append(hDiv);
  //Find the predecessor(sibling before) of the parent node of siblingChildId parameter and add hour class to it.
  $(siblingChildId).parent().prev().addClass("hour");

};







