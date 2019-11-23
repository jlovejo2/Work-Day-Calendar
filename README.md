# My Portfolio
This Porfolio is being created as homework 4 assignment in my coding bootcamp with NorthWestern University. The goal is to add responsive to my webpage with boostrap and media queries.

the link to my page is shown below:
https://jlovejo2.github.io/Work_Day_Calendar/

## Table of Contents
* [Work Day Calendar](#work-day-calendar)
* [Coding Languages Used](#coding-languages-used)
* [Technologies](#technologies)
* [Helpful hints](#helpful-hints)
* [Specific Changes Made](#specific-changes-made)
* [Functions Used](#functions-used)
* [Known Issues With Code](#known-issues-with-code)

## Trivia Quiz
* This homework was to design an interactive work day calendar webpage.  The goal was for the user to be able to add events to the hour blocks and store them locally so that they arent
lost when page is refreshed.  The other aspect of the site is that the hour block CSS class changes as the time progress in the day,

## Coding Languages Used
* HTML
* Boostrap
* CSS
* jquery

## Technologies
This project was created with:
* gitbash
* Visual Studio Code
* github
* bootstrap
* jquery
* moment.js

## Helpful Hints
This project has 4 total files of code:
* index.html - base html code for the work day calendar web page.  A lot of html was written but I also dynamically added some elements as well.
* assets folder - This folder only contains the files provided by the bootcamp in it.
* javascript.js - all javascript code for the work day calendar is in this file.
* style.css - contains all the css for the css classes associated with the work day calendar.  All CSS is either bootstrap classes or in the css file.

## Specific Changes Made
* I decided to add a clear events button to the calendar that clears all the events from local storage and refreshes the page.  
* I added a color coding key to the jumbotron.  The purpose was to get more practice dynamically changing html and because I thought it was more user friendly.  

## Functions Used
* click event - on the calendar area that checks for buttons clicked in it.
* click event - on the clear events button.
* saveUserInput - This function takes the content of an element and saves it to workDayEvent object with specified parameter keyname
* storeEvents - This function stores the workDayEvents object in localStorage
* init - This function runs the initial set=up for the page.  It gets the workDayEvents from localstorage and pulls the content into the appropriate hour locations
* createHourDivs - This function creates an hour div for the specifed textarea div.  Using the textarea id and a parameter that designates what text to go into it
* clearLocalStorage - This function sets the workDayEvents to empty, then stores it into localStorage, and refreshes the page.

## Known Issues With Code
* For my ClearLocalStorage button I used code that just refreshes page after the localstorage is cleared and then runs my init function.  I realize reloading the page 
is the not the most user friendly way to do it and would enjoy input on other solutions. 
* I would have liked to get just the margins around the hourDiv, textarea, and save buttons to be closer together.  I was unable to get them to be completely flush.