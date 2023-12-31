"use strict";
//-----------------Import-----------------
/* import ProjetBalise from "./JS/projetBalise.js";
import ProjetBalise2 from "./JS/projetBalise2.js";
import ProjetBalise3 from "./JS/projetBalise3.js";
 */

//-----Nom qui change --------------------------
const txtAnim = document.querySelector("span");
new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
})
  .changeDelay(50)
  .typeString("LAASSOULI")
  .pauseFor(7500)
  .deleteChars(18)
  .typeString("<strong> : Developpeuse,</strong>")
  .pauseFor(2000)
  .deleteChars(18)
  .typeString('<strong class="design"> : Designer..</strong>')
  .pauseFor(2000)

  .start();

//----------observeur -----------------

const ligne = document.querySelectorAll("ligne");
const section = document.querySelectorAll("section");
const observer = new IntersectionObserver(arrive, { rootMargin: "20px" });

section.forEach((s) => observer.observe(s));

function arrive(entries) {
  const entry = entries[0];

  if (entry.isIntersecting) {
    //console.log("je suis la ");
    entry.target.className = "animPara";
  } else {
    //console.log("je suis plus la ");
    entry.target.className = "";
  }
}

/* const para = document.querySelector('p')


const observer = new IntersectionObserver (arrive,{rootMarging : "-50px"})
observer.observe(para)

function arrive(entries)
{
  console.log(entries);
  const entry = entries[0]
  console.log(entry);

  if(entry.isIntersecting){
    //console.log("je suis la ");
    entry.target.className ="animPara"
  }
  else{
    //console.log("je suis plus la ");
    entry.target.className =""
  }
} */

/* const img = document.querySelectorAll('img')
const obsImg = new IntersectionObserver (arriveImg, {})

img.forEach(i=>obsImg.observe(i))

function arriveImg(entries)
{
  entries.forEach(show)
}

function show (entry)
{
  if(entry.isIntersecting)
  {
    console.log('on voi les img');
    entry.target.className = "animLang"
  }
  else
  {
    console.log('on les vois plus ');
    entry.target.className = ""
  }
} */

//---------Choix du theme----------

//todo faire une variable pour eviter de retaper les couleurs

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const language = document.querySelector(".mesCompetences");
const monHistoire = document.querySelector(".historique h2");
const times = document.querySelectorAll("time");
const lis = document.querySelectorAll("li");
const contact = document.querySelector(".contact");
const projet = document.querySelectorAll(".ag-courses-item_link");
const cardCouleur = document.querySelectorAll('.ag-courses_item:nth-child(2n)')
const cardCouleur1 = document.querySelectorAll(' .ag-courses-item_bg')

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");

//------------------------------
let couleurT11 = "rgb(238, 99, 82) ";
let couleurT12 = "rgb(89, 205, 144)";
let couleurT13 = "rgb(167, 204, 237)";
let couleurT14 = "rgb(99, 173, 242)";

let couleurT21 = "rgb(18, 30, 59) ";
let couleurT22 = "rgb(0, 30, 90)";
let couleurT23 = "rgb(167, 204, 237)";
let couleurT24 = "rgb(99, 173, 242)";

let couleurT31 = "#1B1A1A";
let couleurT32 = "antiquewhite";
let couleurT33 = "#1B1A1A";
let couleurT34 = "antiquewhite";

t1.addEventListener("click", () => {
  body.style.backgroundColor = couleurT11;
  h1.style.color = couleurT12;
  p.style.color = "black";
  p.style.backgroundColor = couleurT13;
  language.style.backgroundColor = couleurT13;
  monHistoire.style.color = "black";
  times.forEach((time) => (time.style.color = couleurT12));
  lis.forEach((li) => (li.style.background = couleurT13));
  projet.forEach((pr) => (pr.style.background = couleurT12));
  cardCouleur.forEach((cc) => (cc.style.color = couleurT13));
  cardCouleur1.forEach((cc1) => (cc1.style.color = couleurT13));
  contact.style.background = couleurT12;
});
t2.addEventListener("click", () => {
  body.style.backgroundColor = couleurT21;
  h1.style.color = couleurT24;
  p.style.color = couleurT22;
  p.style.backgroundColor = couleurT23;
  language.style.backgroundColor = couleurT24;
  monHistoire.style.color = couleurT24;
  times.forEach((time) => (time.style.color = couleurT24));
  lis.forEach((li) => (li.style.background = couleurT24));
  projet.forEach((pr) => (pr.style.background = couleurT24));
  cardCouleur.forEach((cc) => (cc.style.color = couleurT23));
  cardCouleur1.forEach((cc1) => (cc1.style.color = couleurT23));
  contact.style.background = couleurT24;
});
t3.addEventListener("click", () => {
  body.style.backgroundColor = couleurT31;
  h1.style.color = couleurT32;
  p.style.color = couleurT33;
  p.style.backgroundColor = couleurT32;
  language.style.backgroundColor = couleurT34;
  monHistoire.style.color = couleurT33;
  times.forEach((time) => (time.style.color = couleurT34));
  lis.forEach((li) => (li.style.background = couleurT34));
  projet.forEach((pr) => (pr.style.background = couleurT31));
  cardCouleur.forEach((cc) => (cc.style.color = couleurT32));
  cardCouleur1.forEach((cc1) => (cc1.style.color = couleurT32));
  contact.style.background = couleurT32;
});
