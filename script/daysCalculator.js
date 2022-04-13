let applicationDate = new Date(new Date(2025, 03, 22).getTime() - 90*1000*60*60*24);
let diffInDays = Math.floor((applicationDate - Date.now())/(1000*60*60*24));

diffInDays = Math.max(0, diffInDays);

years = Math.floor(diffInDays/365)
days = diffInDays%365

document.getElementById("countdown").textContent = `${years} years ${days} days until ${applicationDate.toLocaleDateString()}`;