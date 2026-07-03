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