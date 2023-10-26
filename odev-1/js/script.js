let firstNameAlert = prompt("İsminizi giriniz:");
let firstName = document.querySelector("#name");
let newDate = document.querySelector(".date");

firstName.innerHTML = firstNameAlert
let firstDate = new Date();
let gun = ["pazartesi", "salı", "çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

newDate.innerHTML = `${firstDate.getHours()} : ${firstDate.getMinutes()} : ${firstDate.getSeconds()}, ${gun[firstDate.getDay()]} `