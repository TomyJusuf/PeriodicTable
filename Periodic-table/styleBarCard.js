const alkMetal = document.getElementById("b1");
const alkEarthMetal = document.getElementById("b2");
const transitionMetal = document.getElementById("b3");
const postTransitionMetals = document.getElementById("b4");
const metalloids = document.getElementById("b5");
const reactNonMetals = document.getElementById("b6");
const nobleGases = document.getElementById("b7");
const lanthanides = document.getElementById("b8");
const actinides = document.getElementById("b9");
const unknownProperty = document.getElementById("b10");

const alkMetalNumbers = [3, 11, 19, 37, 55, 87];
const AlkEathMetalNumbers = [4, 12, 20, 38, 56, 88];
const transitionMetalNumbers = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108,
];
const postTransitionNUmbers = [13, 31, 49, 50, 81, 82, 83, 84, 85];
const metalloidsNumbers = [5, 14, 32, 33, 51, 52];
const reactiveNonMetalsNumbers = [1, 6, 7, 8, 9, 15, 16, 17, 34, 35, 53];
const nobleGasesNumbers = [2, 10, 18, 36, 54, 86];
const landthanidesNumbers = [
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
];
const actinidesNumbers = [
  89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
];
const unknownPropertiesNumbers = [
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
];

// *** Alkali metals ***

alkMetal.addEventListener("mouseover", () => {
  alkMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(18, 182, 190)";
  });
});
alkMetal.addEventListener("mouseout", () => {
  alkMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(6, 51, 53)";
  });
});

//  *** Alkaline earth metals  ***

alkEarthMetal.addEventListener("mouseover", () => {
  AlkEathMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(231, 52, 91)";
  });
});
alkEarthMetal.addEventListener("mouseout", () => {
  AlkEathMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(110, 32, 49)";
  });
});

// *** Transition metals ***

transitionMetal.addEventListener("mouseover", () => {
  transitionMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(91, 64, 224)";
  });
});
transitionMetal.addEventListener("mouseout", () => {
  transitionMetalNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(31, 23, 71)";
  });
});

// ***  Post-transition metals ***

postTransitionMetals.addEventListener("mouseover", () => {
  postTransitionNUmbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(90, 207, 184)";
  });
});
postTransitionMetals.addEventListener("mouseout", () => {
  postTransitionNUmbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(27, 58, 52)";
  });
});

// ***  Metalloids ***

metalloids.addEventListener("mouseover", () => {
  metalloidsNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(211, 153, 53)";
  });
});
metalloids.addEventListener("mouseout", () => {
  metalloidsNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(70, 51, 19)";
  });
});

// ***  Reactive non-metals ***

reactNonMetals.addEventListener("mouseover", () => {
  reactiveNonMetalsNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(73, 138, 243)";
  });
});
reactNonMetals.addEventListener("mouseout", () => {
  reactiveNonMetalsNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(14, 35, 68)";
  });
});

// ***  Noble gases ***

nobleGases.addEventListener("mouseover", () => {
  nobleGasesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(238, 144, 166)";
  });
});
nobleGases.addEventListener("mouseout", () => {
  nobleGasesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(98, 56, 66)";
  });
});

// ***  Lanthanides  ***

lanthanides.addEventListener("mouseover", () => {
  landthanidesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(6, 154, 247)";
  });
});
lanthanides.addEventListener("mouseout", () => {
  landthanidesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(0, 74, 119)";
  });
});

// ***  Actinides  ***

actinides.addEventListener("mouseover", () => {
  actinidesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(238, 144, 96)";
  });
});
actinides.addEventListener("mouseout", () => {
  actinidesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(97, 59, 40)";
  });
});

// ***  Unknown properties  ***

unknownProperty.addEventListener("mouseover", () => {
  unknownPropertiesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(206, 209, 226)";
    card.style.color = "rgb(70, 71, 76)";
  });
});
unknownProperty.addEventListener("mouseout", () => {
  unknownPropertiesNumbers.map((x) => {
    card = document.querySelector(`.card:nth-of-type(${x})`);
    card.style.backgroundColor = "rgb(70, 71, 76)";
    card.style.color = "white";
  });
});
