// Feature 1 = Dynamic Gallery

const artworks = [

    {
        name: "Early Work 1",
        image: "images/Tallo's Image2 2026-06-03 at 10.23.16.jpeg"
    },

    {
        name: "Early Work 2",
        image: "images/Tallo Image 3 2026-06-03 at 10.23.16.jpeg"
    },

    {
        name: "Early Work 3",
        image: "images/Tallo Image 4 2026-06-03 at 10.23.17.jpeg"
    },

    {
        name: "Early Work 4",
        image: "images/Tallo Image 6 2026-06-03 at 10.23.17.jpeg"
    }

];

let gallery = document.querySelector("#artGallery");

artworks.forEach(function(artwork){

    gallery.innerHTML +=
    `
    <img
        src="${artwork.image}"
        alt="${artwork.name}"
        width="500">
    `;

});


// FEATURE 2 - Wishlist

let addButton = document.querySelector("#addBtn");
let input = document.querySelector("#artInput");
let list = document.querySelector("#wishlistItems");

addButton.addEventListener("click", function(){

    if(input.value === ""){
        alert("Please enter an artwork.");
        return;
    }

    let newItem = document.createElement("li");

    newItem.textContent = input.value + " ";

    let removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function(){

        newItem.remove();

    });

    newItem.appendChild(removeButton);

    list.appendChild(newItem);

    input.value = "";

});



// FEATURE 3 - Form Validation


let form = document.querySelector("#contactForm");
let feedback = document.querySelector("#feedback");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.querySelector("#userName").value;
    let message = document.querySelector("#userMessage").value;

    if(name === "" || message === ""){

        feedback.textContent = "Please fill in all fields.";

    }

    else{

        feedback.textContent =
        "Thank you, " + name + "! Your message has been sent.";

        form.reset();

    }

});