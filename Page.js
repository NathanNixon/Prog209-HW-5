var gCount = 0;
var rowCount = 0;
const studentName1 = [];
const className1 = [];
const assignmentName1 = [];
const gradeLetter1 = [];
const Sign1 = [];


function gradeConstructor() {
	this.studentName = document.getElementById('studentName').value;
	this.className = document.getElementById('className').value;
	this.assignmentName = document.getElementById('assignmentName').value;
	this.gradeLetter = document.getElementById('gradeLetter').value;
	this.Sign = document.getElementById('Sign').value;
	studentName1[gCount] = this.studentName;
	className1[gCount] = this.className;
	assignmentName1[gCount] = this.assignmentName;
	gradeLetter1[gCount] = this.gradeLetter;
	Sign1[gCount] = this.Sign;
  	gCount++;
	textClear();
}

function displayList() {
	document.getElementById("Table1").style.display = "block";
        while (rowCount < gCount) {
      		let varTable = document.getElementById("Table1")
        	let varRow = varTable.insertRow(-1);
        	let varCell1 = varRow.insertCell(0);
		let varCell2 = varRow.insertCell(1);
		let varCell3 = varRow.insertCell(2);
		let varCell4 = varRow.insertCell(3);
        	varCell1.innerHTML = studentName1[rowCount];
		varCell2.innerHTML = className1[rowCount];
        	varCell3.innerHTML = assignmentName1[rowCount];
		varCell4.innerHTML = (gradeLetter1[rowCount] + Sign1[rowCount]);
        	rowCount++;
	}
}
function textClear() {
	document.getElementById("studentName").value = "";
	document.getElementById("className").value = "";
	document.getElementById("assignmentName").value = "";
}

document.addEventListener("DOMContentLoaded", function (event) {
    $(document).on("pagebeforeshow", "#list", function (event) {   
        displayList ();
    });
});