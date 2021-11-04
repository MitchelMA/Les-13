// begin met de follow element
follow_element = document.getElementById("follow");

function follow(e) {
  follow_element.style.top = `${e.clientY + 25}px`;
  follow_element.style.left = `${e.clientX + 25}px`;
}

follow_element.onclick = function () {
  document.onmousemove = follow;
};

// selecteables:
selecteables = document.querySelectorAll(".selecteable");

function select(index) {
  for (let i = 0; i < selecteables.length; i++) {
    if (i != index) {
      selecteables[i].classList.remove("selected");
    }
  }
  selecteables[index].classList.add("selected");
}

selecteables.forEach((selecteable, index) => {
  selecteable.onclick = () => select(index);
});
