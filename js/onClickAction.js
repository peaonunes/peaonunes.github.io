function changeDiv(i){
	if (i == 3)
		document.getElementById("main").innerHTML = document.getElementById("mainProjects").innerHTML;
	else if (i == 2)
		document.getElementById("main").innerHTML = document.getElementById("mainBlog").innerHTML;
	else if (i == 1)
		document.getElementById("main").innerHTML = document.getElementById("mainResume").innerHTML;
	else
		document.getElementById("main").innerHTML = document.getElementById("mainSite").innerHTML;
}

function Redirecting(){
	console.log('teste');
	var link = document.getElementById("Golink").value;
	console.log(link);
	window.location=link;
}
