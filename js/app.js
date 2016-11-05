//create pagination
  //loop through elements to count them
  //queryselectorall? li.student-item
  // var parent = document.getElementById('parent');
  // var child_nodes = parent.childNodes;
  // console.log(child_nodes.length); // let's assume "2"
  // parent.appendChild(document.createElement('div'));
  // console.log(child_nodes.length); // should output "3"
  //https://developer.mozilla.org/en-US/docs/Web/API/NodeList

  var students = document.querySelectorAll('li.student-item');
console.log("Students list:  ", students);
console.log("Number of students:  ", students.length);
//console.log(students[0]);//gives us the html elements that we need for items
//pageNum * 10 - 1 ; the loop start; loop end would be initial start + 10
//var pageHtml = " ";
//var slidesHolder = document.getElementsByClassName("student-list");
//onsole.log(slidesHolder);





//console.log(pageHtml);
//slidesHolder.innerHTML();

//looping over a nodelist
//http://www.w3schools.com/js/js_htmldom_nodelist.asp

  //number of pages: var div = Math.floor(total# of items/10);
  //number of items on the last page: var rem = total# of items % 10;
var pageNum = Math.floor((students.length/10) + 1);
console.log("page #s:   ", pageNum);
var students = document.querySelectorAll('li.student-item');

//search give current items on each click up
console.log(document.getElementsByClassName('student-list'));
//console.log(document.getElementsByClassName('student-list')[0].children);
//document.getElementsByClassName('student-list')[0].children[6].style.display = 'none';

for (var i = 0; i < students.length; i++) {
  document.getElementsByClassName('student-list')[0].children[i].style.display = 'none';
}

for (var i = 19; i < 29; i++) {
  document.getElementsByClassName('student-list')[0].children[i].style.display = 'block';
}
