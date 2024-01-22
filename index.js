// Add input element inside form, before button, to take fruit description
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const fruitToAdd = document.getElementById("fruit-to-add");
const descriptionInput = document.createElement("input");

form.insertBefore(descriptionInput, form.lastElementChild);
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting values from input fields
  // const fruitName = fruitToAddInput.value.trim();
  // const fruitDescription = descriptionInput.value.;

  // Creating a new list item for the fruit
  form.insertBefore(descriptionInput, form.lastElementChild);
  const fruitToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = "fruit";

  const description = document.createElement("p");
  const descriptionText = document.createTextNode(descriptionInput.value);
  description.appendChild(descriptionText);
  description.style.fontStyle = "italic";
  newLi.appendChild(description);

  const deleteBtn = document.createElement("button");
  const deleteBtnText = document.createTextNode("x");
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = "delete-btn";
  newLi.appendChild(deleteBtn);

  fruits.appendChild(newLi);
});
const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  const fruitItems = document.getElementsByClassName("fruit");
  const description = document.createElement("p");
  description.innerHTML = `${i}fruit name is ${fruitItems[
    i
  ].firstChild.textContent.toLowerCase()}`;
  description.style.fontStyle = "italic";

  lis[i].insertBefore(description, lis[i].lastElementChild);
}
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  console.log(event.target.value.toLowerCase());
  for (let i = 0; i < fruitItems.length; i++) {
    const currFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    const currFruitDes =
      fruitItems[i].firstElementChild.textContent.toLowerCase();
    if (
      currFruitText.indexOf(textEntered) == -1 &&
      currFruitDes.indexOf(textEntered) == -1
    ) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});

// Show the fruit description in italics on the next line

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
