const input = document.getElementById("input-box");
const listBox = document.getElementById("list-container");
const button = document.querySelector("button");
const btn2Div = document.createElement("div");
const btn2 = document.createElement("button");
const todoApp = document.querySelector(".todo-app");
// const divBtn2 = document.querySelector("hidden");
button.onclick = function () {
  if (input.value === "" || input.value === " ") {
    alert("EHI! DEVI SCRIVERE QUALCOSA!");
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;
    listBox.appendChild(li);
    const span = document.createElement("span");
    span.innerText = "\u00d7"; //icona crocetta
    li.appendChild(span);
  }
  input.value = "";
};

listBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");

      btn2.innerText = "Cancella";
      btn2Div.className = "btn2";
      btn2Div.appendChild(btn2);

      todoApp.appendChild(btn2Div);
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    //   e.target.closest("button").remove();
    }
  },
  false
);

const btnDelete = document.getElementById("");

// listBox.onclick = function () {
//   if (li.tagName === "LI") {
//
//     listBox.onclick = function () {
//       li.className = "unchecked";
//     };
//   }  else if(span.tagName==="SPAN"){
//     li.closest("li").remove();
//   }
// };
