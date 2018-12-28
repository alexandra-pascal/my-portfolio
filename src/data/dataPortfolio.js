import gdc from "./../img/gdc.jpg";
import gdcSmall from "./../img/gdc-small.jpg";
import kodflix from "./../img/kodflix.jpg";
import kodflixSmall from "./../img/kodflix-small.jpg";
import sc from "./../img/sc.jpg";
import scSmall from "./../img/sc-small.jpg";
import lds from "./../img/lds.jpg";
import ldsSmall from "./../img/lds-small.jpg";
import mobGdc from "./../img/mob-gdc.png";
import mobSC from "./../img/mob-SC.png";
import mobKod from "./../img/mob-kod.png";
import mobLDS from "./../img/mob-LDS.png";
import deskGdc from "./../img/desk-gdc.jpg";
import deskSC from "./../img/desk-SC.jpg";
import deskKod from "./../img/desk-kod.jpg";
import deskLDS from "./../img/desk-LDS.jpg";

let Projects = [
  {
    id: "gentle-dental-care",
    link: "​gdc.x-el.me/",
    title: "Gentle Dental Care",
    imgBig: gdc,
    imgSmall: gdcSmall,
    description: [
      "Role: Branding / UI/UX/ Web Development",
      "Description: A static website, fully responsive, presenting the image of Gentle Dental Care practice online",
      "Used technologies: Vue.js",
      "Styling: SCSS"
    ],
    mockupMob: mobGdc,
    projectDescription: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which"
    ],
    mockupDesk: deskGdc,
    desktopDescription: [
      "DESKTOP",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    ]
  },
  {
    id: "seasonal-cuisine",
    link: "​kodiri.github.io/seasonal-cuisine/#/",
    title: "Seasonal Cuisine",
    imgBig: sc,
    imgSmall: scSmall,
    description: [
      "Role: UI/UX/ Web Development",
      "Description: Front-end-development project for a cuisine app where the user can filter their favourite dish for Christmas dinner from several recipes from different countries, types of food and dietary restrictions",
      "Used technologies: React.js",
      "Styling: CSS"
    ],
    mockupMob: mobSC,
    projectDescription: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    ],
    mockupDesk: deskSC,
    desktopDescription: [
      "DESKTOP",
      "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      "aaaThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    ]
  },
  {
    id: "kodflix",
    link: "​kodflix-alexandra-pascal.herokuapp.com",
    title: "Kodflix",
    imgBig: kodflix,
    imgSmall: kodflixSmall,
    description: [
      "Role: Web Development",
      "Description: A full stack project simulating the production of Netflix",
      "Used technologies: React.js, Node.js, Express and Mongo.DB",
      "Styling: CSS"
    ],
    mockupMob: mobKod,
    projectDescription: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    ],
    mockupDesk: deskKod,
    desktopDescription: [
      "DESKTOP",
      "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      "aaaThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou"
    ]
  },
  {
    id: "london-dental-specialists",
    link: "​x-el.me/",
    title: "London Dental Specialists",
    imgBig: lds,
    imgSmall: ldsSmall,
    description: [
      "Role: Branding / UX/UI",
      "Description: A mobile first application presentating the London Dental Specialists dental practice"
    ],
    mockupMob: mobLDS,
    projectDescription: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    ],
    mockupDesk: deskLDS,
    desktopDescription: [
      "DESKTOP",
      "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "aaaThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. If you are going to use a passage of Lorem Ipsum"
    ]
  }
];

export default Projects;
