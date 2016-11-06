//https://developer.mozilla.org/en-US/docs/Web/API/NodeList


//number of items on the last page:

var students = document.querySelectorAll('li.student-item');
//console.log("Students list:  ", students);
var studentsCount = students.length;
var rem = studentsCount % 10;
var pageNum = Math.ceil(students.length/10);
var pageSelected = 6;

function addPagination(students) {

  console.log("page #s:   ", pageNum);

  var pageDiv = document.createElement("div");
  pageDiv.className = "pagination";

  var pageList = document.createElement("ul");

  for(var i=1; i<=pageNum; i++) {
    var pageLink = document.createElement("li");
    var pageURL = document.createElement("a");
    pageURL.innerText = i;
    pageURL.setAttribute("href", "#" +i );
    pageLink.appendChild(pageURL);
    pageList.appendChild(pageLink);
  }
  var listDiv = document.getElementsByClassName("page")[0];
  pageDiv.appendChild(pageList);
  listDiv.appendChild(pageDiv);
}

function displayStudents (students) {
  var firstStudent=0;
  var lastStudent=0;
  console.log("firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
  console.log("pageNum: ", pageNum, " pageSelected: ", pageSelected);
  if (pageNum === pageSelected) {
    firstStudent = (10 * pageSelected) - 10;
    lastStudent = firstStudent + rem;
    console.log("inside if","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
    console.log("inside if ","pageNum: ", pageNum, " pageSelected: ", pageSelected);
    console.log("inside if ", "rem: ", rem);

  } else {
    firstStudent = (10 * pageSelected) - 10;
    lastStudent = firstStudent + 10;
  }

  for (var i = 0; i < studentsCount; i++) {
    document.getElementsByClassName('student-list')[0].children[i].style.display = 'none';
  }

   for (var j = firstStudent; j < lastStudent; j++) {

     console.log("inside loop ","firstStudent: ", firstStudent, " lastStudent: ", lastStudent);
     document.getElementsByClassName('student-list')[0].children[j].style.display = 'block';
     //document.getElementsByClassName('.student-list')[0].children[0].style.display = 'block';
 }
   //document.getElementsByClassName('student-list')[0].children[0].style.display = 'block';
   //document.getElementsByClassName('student-list')[0].children[17].style.display = 'block';

}

addPagination(students);
displayStudents(students);

//search give current items on each click up
