    
function randomStudent(){ 
	var data = document.getElementById("content");
	var studentlist = data.getElementsByTagName("div"); 
	var numOfStudents = studentlist.length; 
	var numIterations = Math.floor(Math.random() * 20)+10; 
	var timeout=400; 
	var keeptime = 200; 
	//clear background 
	for(var x=0;x<numOfStudents;x++){
		
		studentlist[x].style.backgroundColor = "";
	}
	//iterating 
	for(var x=0;x<numIterations;x++){
	
	setTimeout(function () {
		var random1 = Math.floor(Math.random() * 100)%(numOfStudents);
		studentlist[random1].style.backgroundColor = "#0383AD";
		studentlist[random1].scrollIntoView(false);
		
		setTimeout(function () {
			studentlist[random1].style.backgroundColor = "";
			},keeptime);
		
		}, timeout * x);
	
	}
	//red color 
	setTimeout(function () {
		var random1 = Math.floor(Math.random() * 100)%(numOfStudents);
		studentlist[random1].style.backgroundColor = "green";
		studentlist[random1].scrollIntoView(false);
		}, timeout * numIterations);
		
}


var wholeText="";
var keyword = "random"
window.addEventListener('keydown', function(event) {
	wholeText+=(String.fromCharCode(event.which)).toLowerCase();
	console.log(wholeText);
	if(wholeText.indexOf(keyword) > -1){
		//calling function
		randomStudent();
		//reset string
		wholeText="";
	}
});



