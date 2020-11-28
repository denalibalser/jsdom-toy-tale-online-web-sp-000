let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  return fetch('http://localhost:3000/toys')
    
  .then(function(response) {
    return response.json();
  })

  .then(function(object) {
    let toys = document.querySelector("#toy-collection");
    let newDiv = document.createElement('div.card');
    newDiv.innerHTML = object;
    toys.appendChild(newDiv);
  })

  //let card = document.querySelector(".card")
  
});
