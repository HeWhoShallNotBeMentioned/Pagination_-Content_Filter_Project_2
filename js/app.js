

var students = document.querySelectorAll('li.student-item');
//console.log("Students list:  ", students);
var studentsCount = students.length;
var rem = studentsCount % 10;
var pageNum = Math.ceil(students.length/10);
var pageSelected = 1;
var pageDOM;

function addPagination(students) {

//  console.log("page #s:   ", pageNum);

  var pageDiv = document.createElement("div");
  var pageList = document.createElement("ul");
  pageList.className = "pagination";

  for(var i=1; i<=pageNum; i++) {
    var pageLink = document.createElement("li");
    var pageURL = document.createElement("a");
    pageURL.innerText = i;
    //pageURL.setAttribute("href", "#" +i );
    pageLink.appendChild(pageURL);
    pageList.appendChild(pageLink);
  }
  var listDiv = document.getElementsByClassName("page")[0];
  pageDiv.appendChild(pageList);
  listDiv.appendChild(pageDiv);
  pageDOM = document.getElementsByClassName("pagination")[0];
}

function displayStudents (students) {
  var firstStudent=0;
  var lastStudent=0;
  // console.log("firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
  // console.log("pageNum: ", pageNum, " pageSelected: ", pageSelected);
  if (pageNum == pageSelected) {
    firstStudent = (10 * pageSelected) - 10;
    lastStudent = firstStudent + rem;
    // console.log("inside if","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
    // console.log("inside if ","pageNum: ", pageNum, " pageSelected: ", pageSelected);
    // console.log("inside if ", "rem: ", rem);

  } else {
    firstStudent = (10 * pageSelected) - 10;
    lastStudent = firstStudent + 10;
  }

  for (var i = 0; i < studentsCount; i++) {
    document.getElementsByClassName('student-list')[0].children[i].style.display = 'none';
  }

   for (var j = firstStudent; j < lastStudent; j++) {
     //console.log("inside loop ","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
     document.getElementsByClassName('student-list')[0].children[j].style.display = 'block';
 }
}

function pickPage(e) {
  console.log("Inside pickPage");
  console.log("event: ", e);
  console.log(e.target.innerHTML);
  pageSelected = e.target.innerHTML;
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
  searchInput.setAttribute("type", "search");//maybe text
//create button
  var searchButton = document.createElement("button");
  searchButton.appendChild(document.createTextNode('Search'));
//Add search field to div
  searchDiv.appendChild(searchInput);
//Add button to div
  searchDiv.appendChild(searchButton);
//Add Div
  var pageHeader = document.getElementsByClassName("page-header")[0];
  pageHeader.appendChild(searchDiv);
}


addPagination(students);
addSearchBox();
displayStudents(students);
pageDOM.addEventListener('click', pickPage, false);

//Implement search feature

  //define what I am searching for (i.e. what fields I will be searching)
        //name and email
  //send search when button is clicked
  //clear screen
  //find items that match
  //print items that match the search
  //make sure pagination works for those items
  //let the user know if nothing matches their search terms
 //search give current items on each upClick

//Highlight current page via paginate button
  //change previous alink
  //get clicked link
  //change to clicked alink
