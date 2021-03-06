
//grabs the list of students
var students = document.querySelectorAll('li.student-item');
//console.log("Students list:  ", students);
//finds the number of students
var studentsCount = students.length;
//finds the number of students on the last page
var rem = studentsCount % 10;
//determines the number of pages
var pageNum = Math.ceil(students.length/10);
//tells the program what page of students the program should show at start
var pageSelected = 1;
//initializes the variable that will eventually contain the pagination HTML
var pageDOM;
//initializes the first page for the removal of the hightlight page # in pagination. Currently not working.
var pagePrevious = 1;


function addPagination(students) {
//function that adds paginiation to the page.
  //creates the div for the pagination
  var pageDiv = document.createElement("div");
  //creates the ul element for the pagination
  var pageList = document.createElement("ul");
  //adds class pagination to the ul
  pageList.className = "pagination";

  //loop that dynamically creates the line items for the pages links for pagination. Calculates the number of links based on the number of pages of items.
  for(var i=1; i<=pageNum; i++) {
    //creates each line item
    var pageLink = document.createElement("li");
    //creates the link for the line item
    var pageURL = document.createElement("a");
    //sets the visible text page number for the user
    pageURL.innerText = i;
    //Not currently bein used. Has been part of getting the current page # highlighted as active
    //pageURL.setAttribute("class", "");
    //append the a link to the li
    pageLink.appendChild(pageURL);
    //appends the completed li to the ul
    pageList.appendChild(pageLink);
  }
  //finds the div of page that we want to attach the pagination too.
  var listDiv = document.getElementsByClassName("page")[0];
  //attaches the pagination ul to the div we created above
  pageDiv.appendChild(pageList);
  //attaches our completed div to the page
  listDiv.appendChild(pageDiv);
  //the variable needed to call the pagination event listener
  pageDOM = document.getElementsByClassName("pagination")[0];
  //console.log("pageDOM:  ", pageDOM);
}

function displayStudents (students) {
  //function for displaying students on the page
  //initializes the first student we will display. Useful for the first time but also for each time we change pages and call the function as it resets the variable
  var firstStudent=0;
  //initializes the last student we will display. Useful for the first time but also for each time we change pages and call the function as it resets the variable
  var lastStudent=0;
  //console.log("firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
  //console.log("pageNum: ", pageNum, " pageSelected: ", pageSelected);
  //decision tree that first chooses if this is the last page and if not has the functionality for the other pages
  if (pageNum == pageSelected) {
    //sets the first student to be shown if this is the last page
    firstStudent = (10 * pageSelected) - 10;
    //find the remaining number of students to be shown on the last page
    lastStudent = firstStudent + rem;
    //console.log("inside if","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
    //console.log("inside if ","pageNum: ", pageNum, " pageSelected: ", pageSelected);
    //console.log("inside if ", "rem: ", rem);

  } else {
    //sets the first student to be shown
    firstStudent = (10 * pageSelected) - 10;
    //find the remaining number of students to be shown
    lastStudent = firstStudent + 10;
  }
  //hides those elements that are not to be shown for the selected page
  for (var i = 0; i < studentsCount; i++) {
    document.getElementsByClassName('student-list')[0].children[i].style.display = 'none';
  }
  //shows those elements to be shown on the selected page.
   for (var j = firstStudent; j < lastStudent; j++) {
     //console.log("inside loop ","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
     document.getElementsByClassName('student-list')[0].children[j].style.display = 'block';
 }
}

//Determines the page number selected and higlights it in the pagination
function pickPage(e) {
  var ulElement = document.getElementsByClassName("pagination")[0];
  var liElements = ulElement.getElementsByTagName("a");

  for (var x = 0; x < liElements.length; x++) {
    liElements[x].classList.remove("active");
  }
  pageSelected = e.target.innerHTML;
  e.target.setAttribute("class", "active");
  console.log("pageSelected",pageSelected);
  displayStudents(students);
}

function addSearchBox() {
console.log("Inside Search Box");
//Create Div to hold search box
  var searchDiv = document.createElement("div");
// add class student-search to div
  searchDiv.setAttribute("class", "student-search" );
//create search field
  var searchInput = document.createElement("input");
// set attributes for input
  searchInput.setAttribute("id", "myInput");
  searchInput.setAttribute("placeholder", "Search for students...");
  searchInput.setAttribute("onkeyup", 'eachPerson()');
//create button
  var searchButton = document.createElement("button");
  searchButton.appendChild(document.createTextNode('Search'));
//Add search field to div
  searchDiv.appendChild(searchInput);
//Add button to div
  searchDiv.appendChild(searchButton);
//Add Div
  var pageHeader = document.getElementsByClassName("page-header")[0];
//adds the entire searchDiv to the document
  pageHeader.appendChild(searchDiv);
}

function eachPerson() {
  document.getElementsByClassName('pagination')[0].style.visibility = 'hidden';
  //creates a new variable that contains all Students for the search function. created seperate list so it would not conflict with the regular students list.
 var allStudents = students;
 //finds the input searchbox in the DOM
 var myInput = document.getElementById("myInput");
 //grabs the value in that input and sets it to lowercase as all of the text in the students names is lowercase
 var filter = myInput.value.toLowerCase();
 //initializes numberOfMatches and sets it to 0 for every time the function is entered on keyup
 var numberOfMatches = 0;


for (var k = 0; k < allStudents.length; k++) {
  //grabs the name text for each student as it goes through the loop
 var personName = allStudents[k].getElementsByTagName("H3")[0].innerText;
 //grabs the email text for each student as it goes through the loop
 var personEmail = allStudents[k].getElementsByClassName("email")[0].innerText;
 //find the person element so that we can set the appropriate display based on whether they were found in the search
 var personDisplay = document.getElementsByClassName('student-list')[0].children[k];

  //function that does the searching using indexOf and the text from the search box
  if ((personName.toLowerCase().indexOf(filter) || personEmail.toLowerCase().indexOf(filter)) > -1) {
     //if the filter is found in indexOf for either the name or email the dispay is set to "" showing the item
      personDisplay.style.display = "";
      //the numberOfMatches is increased by one 1 which means that the no matching items will not display
      numberOfMatches += 1;

   } else {
     // there are no matches the item is set to none.
       personDisplay.style.display = "none";
   }
 }

 if (filter === ""){
   displayStudents(students);
   document.getElementsByClassName('pagination')[0].style.visibility = 'visible';
  }

   //if statement that sets whether the no-matches div/message is shown. First level is when there are no matches and it needs to be shown. I am currently receiving an error message from the remove method when there is nothing to remove but the program is operating as it should as far as I can tell.


   if ((numberOfMatches === 0) && (!document.getElementsByClassName("no-matches")[0])) {
     //creates div to include the no-matches message
     var messageDiv = document.createElement("div");
       //sets the class to no-matches for the div
       messageDiv.setAttribute("class","no-matches");
       //sets the visible text for the user when there are no matches
       messageDiv.innerText = "There are no matches";
       //finds the element that we want to attach the message to
       var pageHeader = document.getElementsByClassName("page-header")[0];
       //attaches the no-matches div to the element just selected
       pageHeader.appendChild(messageDiv);
     }

    if (numberOfMatches !== 0){
       messageRemoval();
     }

}

function messageRemoval(){
  var messageDivRemoval = document.getElementsByClassName("no-matches")[0];
  //removes the no-matches div
  //var parentNode = document.getElementsByClassName("page-header")[0];

  messageDivRemoval.remove();
}

//calls the function that adds the paginiation
addPagination(students);
//the event listener for the paginiation elements
pageDOM.addEventListener('click', pickPage, false);
//function that adds the search box to the DOM
addSearchBox();
//function that displays the students upon open
displayStudents(students);
