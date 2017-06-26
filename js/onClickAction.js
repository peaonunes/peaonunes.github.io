function changeDiv(i){
	if (i == 3)
		document.getElementById("content").innerHTML = document.getElementById("mainProjects").innerHTML;
	else if (i == 2)
		window.open("https://medium.com/@peaonunes", "_blank");
	else if (i == 1)
		document.getElementById("content").innerHTML = document.getElementById("mainResume").innerHTML;
	else
		document.getElementById("content").innerHTML = document.getElementById("mainSite").innerHTML;
}