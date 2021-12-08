// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Farah",
  middleName: "",
  lastName: "Najib",
  message: " A passionate javascript developer. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/farah-najib",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@farahengnajib",
    },
  
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/farahnajeeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/Farah__Najib/",
    },
  ],
};



// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "farah-najib", 
  reposLength: 4,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "c#", value: 30 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};


const experiences = {
  show: false,
  heading: "Certification",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/codecamp.png'),
      date: '',
    },
  
  ]
}

export { navBar, mainBody, repos , skills, experiences };
