/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KVK's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "KVK Portfolio",
    type: "website",
    url: "https://portfolio-kvk.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "koneti venkata krishna",
  logo_name: "koneti venkata krishna",
  nickname: "MERN stack Web Developer",
  subTitle:
    "I am the one, who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:"https://drive.google.com/file/d/1ldVv6hg1OPONEG43EnMV5I0fbaoaHyZ9/view?usp=sharing",
  portfolio_repository: "https://portfolio-kvk.netlify.app/",
  githubProfile: "https://github.com/codingIsNotMyPassion",
  githubRepos: "https://github.com/codingIsNotMyPassion?tab=repositories"
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/codingIsNotMyPassion",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/venkatakrishnakoneti/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:venkatakrishnakoneti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly scalable production ready full stack applications",
        "⚡ Building responsive website front end using React",
        "⚡ Blending of HTML, CSS, and JavaScript to create web applications using Bootstrap",
        "⚡ Creating application backend in Node & Express with NPM and YARN libraries/packages",
        "⚡ Testing the Backend API's with Postman post development",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "black",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "purple",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "orange",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying the applications into the deployable environments like Heroku",
        "⚡ Integrating with Databases like Mongo to store the data"
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            backgroundColor: "purple",
            color: "white"
          },
        },
      ],
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "Sir C.R.R College of Engineering",
      subtitle: "B.Tech in Electrical and Electronics Engineering",
      logo_path: "aknu_logo.png",
      alt_name: "C.R.R college of Engineering",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have learnt programming language basics for C during my college",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Web Development",
      subtitle: "- GUVI",
      logo_path: "coursera_logo.png",
      certificate_link:
        "",
      alt_name: "GUVI Certification ",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Training, Work",
  description:
    "I have learnt Full Stack Web Development in GUVI with JavaScript as my primary language and developed many frontend projects and full stack projects with a good web responsiveness",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Training",
      experiences: [
        {
          title: "Full Stack Web Developer trainee",
          company: "GUVI - tech deserves you",
          company_url: "https://www.guvi.com/",
          logo_path: "guvi_logo.png",
          duration: "DEC 2021 - Present",
          location: "Andhra pradesh",
          description:
            "I am very passionate about the web developement right from the initial stages of my tech career. I have learnt the Full Stack Web Development in GUVI and have developed many frontend projects that includes 5 full stack projects as well that leverages all my skills that i have learnt with frontend as REACT, backend as NODE, middleware as EXPRESS and database as MONGO. Apart from this, I have learnt the technologies like HTML 5, CSS 3, JS, Bootstrap and many more frameworks and libraries that helps my code work efficiently in all environments. I have completed 35+ projects that includes React, Node and full stack i.e, (React+Node+Mongo+Express) as a part of my learning",
          color: "#fc1f20",
        }
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed Full-Stack projects using MERN Stack with different concepts and ideologies",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "Please reach out to me via contact details below",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 9866287747",
  },
  emailSection: {
    title: "Email",
    subtitle: "venkatakrishnakoneti@gmail.com"
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
