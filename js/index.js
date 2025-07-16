let nam = document.getElementById("name");
nam.onkeyup = function () {
  var val = document.getElementById("name").value;
  let check = /^[a-zA-Z]+$/;
  let result = check.test(val);
  console.log(result);
  if (val.length > 2 && result == true) {
    nam.setAttribute("valid", "true");
  } else {
    nam.setAttribute("valid", "false");
  }
};
//
let url = document.getElementById("url");
url.onkeyup = function () {
  var valu = document.getElementById("url").value;
  let checked = /[a-zA-Z]\.\w[a-zA-Z]/;
  let resulte = checked.test(valu);
  console.log(resulte);
  if (resulte == true) {
    url.setAttribute("valid", "true");
  } else {
    url.setAttribute("valid", "false");
  }
};

let sub = document.getElementById("submit");
x = 0;
sub.addEventListener("click", function () {
  if (
    nam.value != "" &&
    url.value != "" &&
    nam.getAttribute("valid") === "true" &&
    url.getAttribute("valid") === "true"
  ) {
    x++;
    let tab = document.getElementById("body");
    let body = document.createElement("tr");
    let td1 = document.createElement("td");
    body.appendChild(td1);
    td1.append(x);
    let td2 = document.createElement("td");
    body.appendChild(td2);
    td2.append(nam.value);
    let td3 = document.createElement("td");
    body.appendChild(td3);
    let link = document.createElement("a");
    link.setAttribute("href", url.value);
    let icon2 = document.createElement("i");
    icon2.setAttribute("class", "fa-solid fa-eye");
    link.append(icon2);
    link.append("visit");
    td3.append(link);
    let td4 = document.createElement("td");
    body.appendChild(td4);
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    let btn = document.createElement("button");
    btn.append(icon);
    btn.append("delete");
    btn.addEventListener("click", function () {
      tab.removeChild(body);
      let td1 = document.createElement("td");
      body.appendChild(td1);
      td1.append(x--);
      x--;
    });
    td4.appendChild(btn);
    tab.appendChild(body);
    nam.value = "";
    url.value = "";
  } else {
    let pop = document.getElementById("pop");
    let btn1 = document.getElementById("close");
    pop.style.display = "flex";
    btn1.addEventListener("click", function () {
      pop.style.display = "none";
    });
  }
});
