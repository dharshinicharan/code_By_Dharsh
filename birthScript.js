//name enter
function ourBirthday() {
  let a = document.getElementById("namebirth").value;
  let birthday = a;

  let m = document.getElementById("result");
  m.style.display = "block";
  m.scrollIntoView(
    { behavior: "smooth", block: "start" },

    (document.getElementById(
      "result"
    ).innerHTML = ` 🎉 Happy Birthday 🎂${birthday}`)
  );
}
//its script if elase
function checkName() {
  let name = document.getElementById("birthday").value.trim();
  if (name.toLowerCase() === "priya") {
    document.getElementById("").style.display = "none";
    document.getElementById("memories").style.display = "block";
  } else {
    alert("only priya can oprn the page");
  }
}

function openGift(id) {
  document
    .querySelectorAll("#memories div[id^='gift']")
    .forEach((g) => (g.style.display = "none"));
  //show selected elemnent
  dcument.getElementById(id).style.display = "block";
}

//show 1st hidden first show only clicked
function showMessage() {
  let message = document.getElementById("message-first");

  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
function showMessage1() {
  let message = document.getElementById("sec-wish");

  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
function showMessage2() {
  let message = document.getElementById("sec-out1");

  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}
function showMessage3() {
  let message = document.getElementById("sec-out2");

  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth", block: "start" });
}

function checkName() {
  let name = document.getElementById("birthday").value.trim();
  if (name.toLowerCase() === "priya") {
    document.getElementById("").style.display = "none";
    document.getElementById("memories").style.display = "block";
  } else {
    alert("only priya can oprn the page");
  }
}

function openGift(id) {
  document
    .querySelectorAll("#memories div[id^='gift']")
    .forEach((g) => (g.style.display = "none"));
  //show selected elemnent
  document.getElementById(id).style.display = "block";
}
