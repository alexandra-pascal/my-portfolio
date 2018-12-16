import gdc from "./../img/gdc.jpg";
import kodflix from "./../img/kodflix.jpg";
import dbl from "./../img/dbl.jpg";
import sc from "./../img/sc.jpg";

let Projects = [
  {
    title: "Kodflix",
    img: kodflix,
    description: [
      "Role: Web Development",
      "Description: A full stack project simulating the production of Netflix",
      "Used technologies: React.js, Node.js, Express and Mongo.DB",
      "Styling: CSS"
    ]
  },
  {
    title: "Seasonal Cuisine",
    img: sc,
    description: [
      "Role: UI/UX/ Web Development",
      "Description: Front-end project for a cuisine app where the user can filter their favourite dish for Christmas dinner from several recipes from different countries, types of food and dietary restrictions",
      "Used technologies: React.js",
      "Styling: CSS",
    ]
  },
  {
    title: "Gentle Dental Care",
    img: gdc,
    description: [
      "Role: Branding / UI/UX/ Web Development",
      "Description: A static website, presenting the image of Gentle Dental Care practice online",
      "Used technologies: Vue.js",
      "Styling: SCSS",
    ]
  },
  {
    title: "Digital Bee Line",
    img: dbl,
    description: [
      "Role: UX/UI",
      "Description: A static website, created for a small Creative Digital Agency where the main provided services are web design and web development",
    ]
  }
];

export default Projects;
