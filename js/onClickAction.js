function changeDiv(i){
	if (i == 3)
		document.getElementById("content").innerHTML = document.getElementById("mainProjects").innerHTML;
	else if (i == 2)
		document.getElementById("content").innerHTML = document.getElementById("mainBlog").innerHTML;
	else if (i == 1)
		document.getElementById("content").innerHTML = document.getElementById("mainResume").innerHTML;
	else
		document.getElementById("content").innerHTML = document.getElementById("mainSite").innerHTML;
}

function RedirecToLink(){
	var link = document.getElementById("linkToGo").value;
	window.location=link;
}
