import gdc from "./../img/gdc.jpg";
import gdcSmall from "./../img/gdc-small.jpg";
import kodflix from "./../img/kodflix.jpg";
import kodflixSmall from "./../img/kodflix-small.jpg";
import sc from "./../img/sc.jpg";
import scSmall from "./../img/sc-small.jpg";
import lds from "./../img/lds.jpg";
import ldsSmall from "./../img/lds-small.jpg";

let Projects = [
  {
    id: "kodflix",
    link: '​https://kodflix-alexandra-pascal.herokuapp.com/',
    title: "Kodflix",
    imgBig: kodflix,
    imgSmall: kodflixSmall,
    description: [
      "Role: Web Development",
      "Description: A full stack project simulating the production of Netflix",
      "Used technologies: React.js, Node.js, Express and Mongo.DB",
      "Styling: CSS"
    ]
  },
  {
    id: "seasonal-cuisine",
    link: '​http://seasonal-cuisine.herokuapp.com/',
    title: "Seasonal Cuisine",
    imgBig: sc,
    imgSmall: scSmall,
    description: [
      "Role: UI/UX/ Web Development",
      "Description: Front-end-development project for a cuisine app where the user can filter their favourite dish for Christmas dinner from several recipes from different countries, types of food and dietary restrictions",
      "Used technologies: React.js",
      "Styling: CSS"
    ]
  },
  {
    id: "gentle-dental-care",
    link: '​http://seasonal-cuisine.herokuapp.com/',
    title: "Gentle Dental Care",
    imgBig: gdc,
    imgSmall: gdcSmall,
    description: [
      "Role: Branding / UI/UX/ Web Development",
      "Description: A static website, fully responsive, presenting the image of Gentle Dental Care practice online",
      "Used technologies: Vue.js",
      "Styling: SCSS"
    ]
  },
  {
    id: "london-dental-specialists",
    link: '​https://x-el.me/',
    title: "London Dental Specialists",
    imgBig: lds,
    imgSmall: ldsSmall,
    description: [
      "Role: Branding / UX/UI",
      "Description: A mobile first application presentating the London Dental Specialists dental practice"
    ]
  }
];

export default Projects;
