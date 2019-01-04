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
      "The main goal, when designing and developing the code for Gentle Dental Care website was to create a gentle and clean online image that would reflect the kind environment and the good treatment this dental practice has to offer",
    ],
    mockupDesk: deskGdc,
    desktopDescription: [
      "Having the role of designer and developer for this project, I encountered multiple challenges, such as making sure the design looks good and works on all of devices. Having multiple types of user in mind that would benefit from the dental practice services, I created a clean layout, simple to use interface with few animations that would emphasize some of the titles and buttons"
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
      "A pair-programming application using React.js. Main goal was to create a Christmas theme food application where the user can either look at all the recipes, one by one, presented on the home page, or they can choose one or more recipes by accesing the filter placed in the hero of the app"
    ],
    mockupDesk: deskSC,
    desktopDescription: [
      "Main challenges were to create the responsive design, logo, and to develop the layout for the home page and the recipe page dinamically. Also to create the the filter that helps the user choose a certain type of recipe."
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
      "Used technologies: React.js",
      "Styling: CSS"
    ],
    mockupMob: mobKod,
    projectDescription: [
      "A work in progress project, for personal practice of React.js library and JavaScript. With a similar design as Netflix, when developing this application the main focus is to gain more web development knowledge"
    ],
    mockupDesk: deskKod,
    desktopDescription: [
      "Challenges: Start using React.js reusable components, use React Router for navigation, retrieve data from a single js file, deployment of the app, responsive design "
    ]
  },
  // {
  //   id: "london-dental-specialists",
  //   link: "​x-el.me/",
  //   title: "London Dental Specialists",
  //   imgBig: lds,
  //   imgSmall: ldsSmall,
  //   description: [
  //     "Role: Branding / UX/UI",
  //     "Description: A mobile first application presenting the London Dental Specialists dental practice"
  //   ],
  //   mockupMob: mobLDS,
  //   projectDescription: [
  //     ""
  //   ],
  //   mockupDesk: deskLDS,
  //   desktopDescription: [
  //     ""
  //   ]
  // }
];

export default Projects;
