/*Lucius Bossio*/

/*CurrentDate*/
function currentDate()
{
	var today = new Date();
	var month = new Array();
		month[0]="Jan";
		month[1]="Feb";
		month[2]="Mar";
		month[3]="Apr";
		month[4]="May";
		month[5]="Jun";
		month[6]="Jul";
		month[7]="Aug";
		month[8]="Sep";
		month[9]="Oct";
		month[10]="Nov";
		month[11]="Dec";
	var fullDate = month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
	document.getElementById("showDate").innerHTML = fullDate;
}

/*TableTheme*/
function changeTable()
{	
	document.getElementsByClassName("theme")[0].style.backgroundColor = "#f8f8ff";
	
	var x = document.getElementsByTagName("th");
	var index;
	for (index = 0; index < x.length; index++)
	{
		x[index].style.color = "#35bf5c";
		x[index].style.borderStyle = "solid";
		x[index].style.borderColor = "#303030";
	}
	
	var x = document.getElementsByTagName("td");
	for (index = 0; index < x.length; index++)
	{
		x[index].style.color = "#303030";
		x[index].style.borderStyle = "solid";
		x[index].style.borderColor = "#303030";
	}	
}