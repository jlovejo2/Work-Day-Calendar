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

    //Make the current date and time viewable at the top of the page in currentDay div.
    dateLocation.text(moment().format('LLLL'));
    console.log("test_outside_all_functions");

    $(document).ready(function() {
    // Start a click event on the entire calendar area ...
    $(workCalendar).click(function() {
      // event.preventDefault();
      if(event.target.tagName === "BUTTON"){
          if (event.target.id === "nineToTenButton" ) {
            console.log("9to10");
            saveUserInput($("#nineToTen"), "nineToTen");
          } else if (event.target.id === "tenToElevenButton" ) {
            console.log("10to11");
            saveUserInput($("#tenToEleven"), "tenToEleven");
          } else if (event.target.id === "elevenToTwelveButton" ) {
            console.log("11to12");
            saveUserInput($("#elevenToTwelve"), "elevenToTwelve");
          } else if (event.target.id === "twelveToOneButton" ) {
            console.log("12to1");
            saveUserInput($("#twelveToOne"), "twelveToOne");
          } else if (event.target.id === "oneToTwoButton" ) {
            console.log("1to2");
            saveUserInput($("#oneToTwo"), "oneToTwo");
          } else if (event.target.id === "twoToThreeButton" ) {
            console.log("2to3");
            saveUserInput($("#twoToThree"), "twoToThree");
          } else if (event.target.id === "threeToFourButton" ) {
            console.log("3to4");
            saveUserInput($("#threeToFour"), "threeToFour");
          } else if (event.target.id === "fourToFiveButton" ) {
            console.log("4to5");
            saveUserInput($("#fourToFive"), "fourToFive");
          }

        storeEvents();
        console.log(workDayEvents);
        
      }
    
      });

    });

    function saveUserInput(hourElement, keyname) {
      //Take the text inside of the ninToTen textarea and set it equal to var userText
      var userText = hourElement.val();

      // Return from function early if submitted userText is blank
      if (userText === "") {
      return;
      }
      console.log(userText);
      //Add new userText to nineToTen array, clear the input
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

    // If scores were retrieved from localStorage, update the scores array to it
    if (storedEvents !== null) {
        workDayEvents = storedEvents;
    }

    // // Render scores to the DOM
    // renderEvents();
}

// //This function renders the highscores to the html page.
// function renderEvents() {
//     // Clear highScoreList element and update highScoreCount

//     for (i of workDayEvents) {

//     };

//     highScoreCount.textContent = scoresArr.length;

//     // Render a new li for each score
//     for (i of scoresArr) {
//         var li = document.createElement("li");
//         li.textContent = i.initials + ": " + i.score;
//         li.setAttribute("data-index", i);
//         highScoreList.appendChild(li);
//     }
// }
  