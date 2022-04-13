

function convertDaysToMilisec(days) {
	return days*1000*60*60*24;
}

function convertMilisecToDays(ms) {
	return Math.floor(ms/(1000*60*60*24));
}

let fiveYearAfterGC = new Date(2025, 02, 22);
let applicationDate = new Date(fiveYearAfterGC - convertDaysToMilisec(90));
let diffInDays = convertMilisecToDays(applicationDate - Date.now());

diffInDays = Math.max(0, diffInDays);

years = Math.floor(diffInDays/365)
days = diffInDays%365

document.getElementById("countdown").textContent = `${years} years ${days} days until ${applicationDate.toLocaleDateString()} (90 days before ${fiveYearAfterGC.toLocaleDateString()})`;