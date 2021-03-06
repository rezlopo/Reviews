// local reviews data
const reviews = [
    {
      id: 1,
      name: "Dog Joy",
      job: "Ball Runner",
      img:
        "./dog.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Robert Cattus",
      job: "Mannager",
      img:
        "cat.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Rio Parrot",
      job: "movie actor",
      img:
        "./parrot.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Johny White",
      job: "Farmer",
      img:
        "./rabbit.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  // select items
  const img = document.getElementById("animal-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  // set starting item
  let currentItem = 0;

  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
      showAnimal();
  });

  // show animal base on item

  function showAnimal() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  // show nwxt person

  nextBtn.addEventListener("click", function() {
      currentItem++;
      if (currentItem > reviews.length - 1) {
          currentItem = 0;
      }
      showAnimal();
  });

  // show prew animal

  prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showAnimal();
});

// show random animal

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    
    showAnimal();
})

