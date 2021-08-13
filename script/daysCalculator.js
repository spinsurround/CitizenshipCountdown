let applicationDate = new Date(2025, 03, 22);
let diffInDays = Math.floor((applicationDate - Date.now())/(1000*60*60*24));

diffInDays = Math.max(0, diffInDays - 90);

document.getElementById("countdown").textContent = `${diffInDays} Days`;