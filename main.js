"use-strict";

const kittens = document.querySelector(".js-list");


const kittenData_1 = {


Image1: "https://dev.adalab.es/gato-siames.webp",
Name1: "Anastacio",
Desc1:
  " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
Race1: "Siamés",
};

 const kittenOne =
   `<li class="card">
              <article>
                <img
                  class="card_img"
                  src=${Image1}                 alt="siames-cat"
                />
                <h3 class="card_title">${Name1}</h3>
                <h4 class="card_race"> ${Race1}</h4>
                <p class="card_description">
                 ${Desc1}
                </p>
              </article>
         </li>`;

const kittenData_2 = {
Image2: "https://dev.adalab.es/sphynx-gato.webp",
Name2: "Fiona",
Desc2:
  " Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
Race2: "Sphynx",
};
// const kittenTwo =
//   `<li class="card">
//             <img
//               class="card_img"
//               src="${kittenImage2}"
//               alt="sphynx-cat"
//             />
//             <h3 class="card_title">${kittenName2}</h3>
//             <h4 class="card_race">${kittenRace2}</h4>
//             <p class="card_description">
//               ${kittenDesc2}
//             </p>
//           </li>`;

const kittenData_3 = {
Image3: "https://dev.adalab.es/maine-coon-cat.webp",
Name3: "Cielo",
Desc3:
  " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
Race3: "Maine Coon",
};

// const kittenThree = `<li class="card">
//             <img
//               class="card_img"
//               src=${kittenImage3}
//               alt="maine-coon-cat"
//             />
//             <h3 class="card_title">${kittenName3}</h3>
//             <h4 class="card_race">${kittenRace3}</h4>
//             <p class="card_description">
//               ${kittenDesc3}
//             </p>
//           </li>`;


kittens.innerHTML = kittenOne + kittenTwo + kittenThree;

const menuAdd = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.newForm');

function showNewCatForm() {
  newForm.classList.remove('collapsed');
  console.log(newForm)
}

function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

newForm.addEventListener("click", showNewCatForm);


//   formSection.classList.remove('collapsed');
// });

// const buttonCancel = document.querySelector('.js-btn-cancel');

// buttonCancel.addEventListener("click", () => {
//   const formSection = document.querySelector('.new-form');
//   formSection.classList.add('collapsed');
//   // console.log("clickcancel");
// });

/* 
 Cuando la usuaria haga click en buscar 
 - recogemos el valor de la descripción 
  - si la descripción de Anastasio incluye lo que ha puesto la usuaria
    yo mostraré a Anastasio
  - si la descripción de gato2 incluye lo que ha puesto la usuaria
    yo mostraré a gato2
  - si la descripción de gato3 incluye lo que ha puesto la usuaria
    yo mostraré a gato3
  Elementos html que necesitamos:
  La descripción y el botón
*/

const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js-desc');
const kittenCard1 = document.querySelector(".js-card-anastacio");
const kittenCard2 = document.querySelector(".js-card-fiona");
const kittenCard3 = document.querySelector(".js-card-cielo");

const handleClick = (event) => {
  event.preventDefault();
const descrSearchText = input_search_desc.value; 

// ocultar gatitos al darle a buscar
kittenCard1.classList.add("collapsed");
kittenCard2.classList.add("collapsed");
kittenCard3.classList.add("collapsed");

// añadiendo el toLowerCase hace que todo sea en minúscula 
if(kittenDesc1.toLowerCase().includes(descriptionValue)) {
  kittenCard1.classList.remove("collapsed");
}

if(kittenDesc2.toLowerCase().includes(descriptionValue)) {
  kittenCard2.classList.remove("collapsed");
}

if(kittenDesc3.toLowerCase().includes(descriptionValue)) {
  kittenCard3.classList.remove("collapsed");
}

};


buttonSearch.addEventListener('click', handleClick);

