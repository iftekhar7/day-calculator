let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  let noDays = document.querySelector("#totalBill").value;
  let nameMonth = document.querySelector("#tipPercent").value;
  let Year = document.querySelector("#split").value;
  let yearCode;
  let lastTwo;
  if (Year < 2000) {
    yearCode = 0;
    lastTwo = -(1900 - Year);
  } else {
    yearCode = 6;
    lastTwo = -(2000 - Year);
  }
  let lastTwoDivided = lastTwo / 4;

  //validate
  if (totalBill === "" || tipPercent == 0 || split == 0) {
    alert("Please enter values");
    return;
  }
  //calculate
  let total =
    (Math.floor(noDays) +
      Math.floor(nameMonth) +
      Math.floor(yearCode) +
      Math.floor(lastTwo) +
      Math.floor(lastTwoDivided)) %
    7;
  if (total == 1) {
    document.getElementById("tip").innerHTML = "Sunday";
  } else if (total == 2) {
    document.getElementById("tip").innerHTML = "Monday";
  } else if (total == 3) {
    document.getElementById("tip").innerHTML = "Tuesday";
  } else if (total == 4) {
    document.getElementById("tip").innerHTML = "Wednesday";
  } else if (total == 5) {
    document.getElementById("tip").innerHTML = "Thursday";
  } else if (total == 6) {
    document.getElementById("tip").innerHTML = "Friday";
  } else if (total == 0) {
    document.getElementById("tip").innerHTML = "Saturday";
  }
});
