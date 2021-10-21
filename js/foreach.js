// Created variable for the array.
// Each element of the array is an object and describe some properties.



const photosILove = [{

        id: "0",
        title: "Lake and Mountain",
        description: " beautiful lake surrounded by mountain",
        width: " 300",
        height: " 300",
        pathurl: "nature1.jpg",
        linkurl: "https://pixabay.com/photos/dolomites-val-gardena-lake-2580866/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "1",
        title: "Fall",
        description: " Fall in the Mountains",
        width: "300",
        height: "300",
        pathurl: "fall.mountains.jpg",
        linkurl: "https://pixabay.com/photos/dolomites-mountains-alps-alpine-2897227/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "2 ",
        title: "Dunes",
        description: " ",
        width: "300",
        height: "300",
        pathurl: "dunes.jpg",
        linkurl: "https://pixabay.com/photos/dunes-outdoors-travel-sand-dusk-2184976/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "nature4 ",
        title: "Cabin Fall",
        description: "a charig cabin during the fall",
        width: "300",
        height: "300",
        pathurl: "cabin-fall.jpg",
        linkurl: "https://pixabay.com/photos/cabin-dolomites-lake-trees-hut-2961098/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "3",
        title: "Horsy Mountain",
        description: " Some horses and moutains",
        width: "300",
        height: "300",
        pathurl: "horses-mountains.jpg",
        linkurl: "https://pixabay.com/photos/dolomites-horses-mountains-italy-2181633/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "4 ",
        title: "Chapel by the River",
        description: "A little chapel by the river",
        width: "300",
        height: "300",
        pathurl: "chappel-river.jpg",
        linkurl: "https://pixabay.com/photos/ramsau-church-christians-chapel-2438402/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "5 ",
        title: "Winter and Nature",
        description: "Frozen nature ",
        width: "300",
        height: "300",
        pathurl: "snow.jpg",
        linkurl: "https://pixabay.com/photos/snow-winter-frost-cold-frozen-3148850/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "6",
        title: "Cabin Inn",
        description: "Cabin by the mountain ",
        width: "300",
        height: "300",
        pathurl: "cabin.mountain.jpg",
        linkurl: "https://pixabay.com/photos/val-gardena-dolomites-south-tirol-3566418/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "7",
        title: "Cute Italy",
        description: " A shore in Italy",
        width: "300",
        height: "300",
        pathurl: "italy.jpg",
        linkurl: "https://pixabay.com/photos/limone-garda-italy-vacations-lake-4305129/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    },
    {
        id: "8",
        title: "Gifhorn",
        description: "Gifhorn in Netherlands ",
        width: "100",
        height: "100",
        pathurl: "gifhorn.jpg",
        linkurl: "https://pixabay.com/photos/gifhorn-mill-museum-mill-museum-2631153/",
        credit: "Kordi_vahle",
        crediturl: "https://pixabay.com/users/kordi_vahle-4934524/ ",
    }

]

// Created a function:

let pictures = " ";
photosILove.forEach(function(item) {
    pictures = pictures + `<article> <a href = "${item.linkurl}"><img src="assets/images/${item.pathurl}" 
    alt="${item.title}"></a><h2>${item.title} <br> By ${item.credit}</br></h2></article>`;
});
// Each "item" is regarding the array variable "photosILove"

const photo = document.querySelector(".container");
photo.innerHTML = pictures;