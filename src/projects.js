import asianKitchen from './images/asian-kitchen.png'
import reactFirebase from './images/react-firebase.png'
import smartBop from './images/smart-bop.png'
import xSpace from './images/x-space.png'
import toDoJs from './images/todo-js.png'

const projects = [
  {
    id: 5,
    title: "Smart-Bop",
    description: "My teams' final project at the bootcamp.",
    image: smartBop,
    link: "https://www.smart-bop.com/",
    technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Bootstrap", "Heroku"],
    github: "https://github.com/dcavusoglu/smart-bop"
  },
  {
    id: 4,
    title: "X-Space",
    description: "This is our Air-BnB cloning project at the bootcamp.",
    image: xSpace,
    link: "https://x-space-696.herokuapp.com",
    technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Bootstrap", "Heroku"],
    github: "https://github.com/dcavusoglu/x-space"
  },
  {
    id: 1,
    title: "Vanilla JS ToDo List",
    description: "This is my to-do list app using pure JS.",
    image: toDoJs,
    link: "https://dcavusoglu.github.io/js-todo-list/public/index.html",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/dcavusoglu/js-todo-list"
  },
  {
    id: 2,
    title: "React Firebase",
    description: "My React journey! Learning Firebase deployment.",
    image: reactFirebase,
    link: "https://first-react-firebase-deploy.web.app/",
    technologies: ["React", "Firebase", "CSS", "JavaScript"],
    github: "https://github.com/dcavusoglu/react-firebase-deploy"
  },
  {
    id: 3,
    title: "Asian Kitchen",
    description: "Pure JS, how to use DOM tutorials final project.",
    image: asianKitchen,
    link: "https://dcavusoglu.github.io/asiankitchen/",
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    github: "https://github.com/dcavusoglu/asiankitchen"
  },
];

export default projects;