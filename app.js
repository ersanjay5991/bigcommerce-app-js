var button = document.createElement("button");
button.innerHTML = "S Button";
button.onclick = function() {
    alert("Button clicked!");
}
;

// Set styles
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.border = "2px solid";
button.style.padding = "10px 20px";
button.style.borderRadius = "5px";
document.body.appendChild(button);
