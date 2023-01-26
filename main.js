// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// this is the review index
let reviewNumber = 0;

// changing data function 
function changingData() {
    //image
    let image = document.querySelector(".person");
    image.src = reviews[reviewNumber].img;
    //name
    let name = document.querySelector(".name");
    name.textContent = reviews[reviewNumber].name;
    //job
    let job = document.querySelector(".job");
    job.textContent = reviews[reviewNumber].job
    //text
    let text = document.querySelector(".text");
    text.textContent = reviews[reviewNumber].text;
}





// next button
let nextButton = document.querySelector(".next-button");

nextButton.addEventListener("click", function () {
    reviewNumber += 1;
    // limit review number 
    if (reviewNumber > reviews.length - 1) {
        reviewNumber = 0;
    };
    changingData();
});


// prev button
let prevButton = document.querySelector(".prev-button");

prevButton.addEventListener("click", function () {
    reviewNumber -= 1;
    //limit review number 
    if (reviewNumber < 0) {
        reviewNumber = reviews.length - 1;
    };
    changingData();
});


// random number
let randomButton = document.querySelector(".random-button");

randomButton.addEventListener("click", function () {
    /* storing last value for review number to compare it with the recent one
    to know is it a repeated or not */
    let prevReviewNumber = reviewNumber;

    reviewNumber = Math.floor(Math.random() * reviews.length);
    // not allowing two next numbers equal each others
    for (let i = 0; i < reviews.length - 1; i++) {
        if (reviewNumber !== prevReviewNumber) {
            break
        }else {
        reviewNumber = Math.floor(Math.random() * reviews.length);
        }
    }
    changingData();
    // console.log(reviews[reviewNumber].img);
});

