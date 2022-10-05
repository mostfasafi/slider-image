// Get Slider Items | Array.form [ES6 Feature]
var imges = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slides
var slidesCount = imges.length;

// Set Current Slide
var numperone = 1;

// Slide Number Element
var numperfoog = document.getElementById("slide-number");

// Previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var indicators = document.getElementById(`indicators`);

// Create The Main UL Element
var paginationElement = document.createElement("ul");

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
  // Create The LI
  var paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);

  indicators.appendChild(paginationElement);
}

let li = Array.from(document.querySelectorAll("#pagination-ul li"));
li[0].classList.add("active");
numperfoog.textContent = `slider # ` + numperone + ` of ` + slidesCount;

prevButton.classList.add("disabled");

function acskin() {
  numperfoog.textContent = `slider # ` + numperone + ` of ` + slidesCount;

  imges[numperone - 1].classList.add("active");

  li[numperone - 1].classList.add("active");

  if (numperone == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }

  if (numperone == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
}
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function () {
    remove();

    numperone = li[i].getAttribute("data-index");

    this.classList.add("active");

    acskin();
  };
}

function remove() {
  imges.forEach(function (e) {
    e.classList.remove("active");
  });

  li.forEach(function (e) {
    e.classList.remove("active");
  });
}

nextButton.onclick = function () {
  if (numperone == slidesCount) {
    return stop;
  } else {
    remove();

    numperone++;

    acskin();
  }
};

prevButton.onclick = function () {
  if (numperone == 1) {
    return stop;
  } else {
    remove();

    numperone--;

    acskin();
  }
};
