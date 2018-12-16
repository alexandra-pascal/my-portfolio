import gdc from "./../img/gdc.jpg";
import gdcSmall from "./../img/gdc-small.jpg";
import kodflix from "./../img/kodflix.jpg";
import kodflixSmall from "./../img/kodflix-small.jpg";
import sc from "./../img/sc.jpg";
import scSmall from "./../img/sc-small.jpg";

let Projects = [
  {
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
    title: "London Dental Specialists",
    description: [
      "Role: Branding / UX/UI",
      "Description: A mobile first application presentating the London Dental Specialists dental practice"
    ]
  }
];

export default Projects;
