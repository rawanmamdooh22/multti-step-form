var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var next1 = document.getElementById("next1");
var back1 = document.getElementById("back1");
var next2 = document.getElementById("next2");
var back2 = document.getElementById("back2");
var progress = document.getElementById("progress");
next1.onclick = function () {
  form1.style.display = "none";
  form2.style.display = "block";
  progress.style.width = "240px";
};
back1.onclick = function () {
  form1.style.display = "block";
  form2.style.display = "none";
  progress.style.width = "120px";
};
next2.onclick = function () {
  form2.style.display = "none";
  form3.style.display = "block";
  progress.style.width = "335px";
};
back2.onclick = function () {
  form2.style.display = "block";
  form3.style.display = "none";
  progress.style.width = "230px";
};
